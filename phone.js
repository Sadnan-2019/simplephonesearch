console.log("ll;po vyt");

const SearchClick = () => {
  const searchInput = document.getElementById("search-field");
  const searchInputValue = searchInput.value;
  
if(searchInputValue === "" || searchInputValue == null){
          console.log("empty>>>")
          
}else{
          console.log("done ",searchInputValue);
          LoadPhones(searchInputValue);
          searchInput.value = "";
}
 
};

const LoadPhones = (searchText) => {


  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
//     .then((phones) => DisplayPhone(phones.data));
    .then((phones) => DisplayPhone(phones.data));
};

LoadPhones("");

const DisplayPhone = (phoneDisplay) => {

          if(phoneDisplay.length > 0){
                    console.log("dssdd",phoneDisplay.length);
                    const NewphoneDisplay = phoneDisplay.slice(0, 20);
                    console.log("new",NewphoneDisplay.length);


                    




                    const PhoneDiv = document.getElementById("about-phone");
                    PhoneDiv.textContent="";
                    NewphoneDisplay.forEach((phone) => {
                      const div = document.createElement("div");
                      div.classList.add("col");
                      div.innerHTML = `
                                      
                                      
                                      <div class="card h-100 p-4">
                                          <img src="${phone.image}" class="card-img-top img-fluid w-50 " alt="...">
                                          <div class="card-body">
                                            <h5 class="card-title">Brand Name : ${phone.brand}</h5>
                                            <p class="card-title fw-bolder">Phone Name : ${phone.phone_name}</p>
                                           </div>
                                          <div class="card-footer">
                                          <button class="btn btn-info " onclick="GetphoneId('${phone.slug}')" >Phone Details</button>
                                          </div>
                                        </div>
                                      
                                      `;
                  
                      PhoneDiv.appendChild(div);
                    });
                    
          }else{

                    console.log("no data");
          }
    
  //   console.log(phoneDisplay);
};

const GetphoneId = (phoneId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  fetch(url)
    .then((res) => res.json())
    .then((phoneIds) => PhoneDetails(phoneIds.data));
  // .then(phoneIds =>console.log(phoneIds.data))
};

const PhoneDetails = (phoneDetail) => {
  const PhoneDetailsDiv = document.getElementById("phone-details");
  const div = document.createElement("div");
  div.classList.add("col");
  PhoneDetailsDiv.textContent = "";
  div.innerHTML = `
          


                            <div class="card h-100 p-4">
                            <img src="${
                              phoneDetail.image
                            }" class="card-img-top img-fluid w-50 " alt="...">
                            <div class="card-body">
                            <h5 class="fw-bolder">Brand Name: ${
                              phoneDetail.brand
                            }</h5>
                            <h5 class="fw-bolder">Phone Name: ${
                              phoneDetail.name
                            }</h5>
                            <p class="fw-bolder">Realese Date: ${
                              phoneDetail.releaseDate
                                ? phoneDetail.releaseDate
                                : "No Realese Date"
                            }</p>
                            <p class="fw-bolder">Chipset: ${
                              phoneDetail.mainFeatures.chipSet
                            }</p>
                            <p class="fw-bolder">Memory: ${
                              phoneDetail.mainFeatures.memory
                            }</p>
                            <p class="fw-bolder">Display Size: ${
                              phoneDetail.mainFeatures.displaySize
                            }</p>
                            <p class="fw-bolder">Sensors:${
                              phoneDetail.mainFeatures.sensors
                            }</p>
                             </div>
                            <div class="card-footer">
                             </div>
                          </div>
          
          `;
  PhoneDetailsDiv.appendChild(div);

  //   console.log(phoneDetail);
};
