// console.log("ll;po vyt");

const SearchClick = () => {
  document.getElementById("spinner").style.display = "block";
  const searchInput = document.getElementById("search-field");
  const searchInputValue = searchInput.value;
  const PhoneDetailsNull = document.getElementById("phone-details");
  const noFoundError = document.getElementById("no-found");
  const InputError = document.getElementById("no-input");
  InputError.innerHTML = "";

  if (searchInputValue === "" || searchInputValue == null) {
    document.getElementById("spinner").style.display = "none";
    // console.log("empty>>>");
    noFoundError.textContent = "";
    //     const p = document.createElement("p");
    //     p.innerHTML = alert`please input value`;

    //     const div = document.createElement("div");

    //     div.innerHTML = `<h3>Please Input Valid Value</h3>

    //           `;

    //           InputError.appendChild(div);
    // InputError.textContent =""

    const div = document.createElement("div");

    div.innerHTML = `<h3>Please Input Valid Value</h3>
          
          `;
    InputError.appendChild(div);

    // InputError.style.display ="block";
    // InputError.style.color ="red";
  } else {
    noFoundError.textContent = "";
    PhoneDetailsNull.textContent = "";
    //     console.log("done ", searchInputValue);
    LoadPhones(searchInputValue);
    searchInput.value = "";
  }
};

const LoadPhones = (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    //     .then((phones) => console.log(phones.data));
    .then((phones) => DisplayPhone(phones.data));
};

const DisplayPhone = (phoneDisplay) => {
  if (phoneDisplay.length > 0) {
    // console.log("dssdd",phoneDisplay.length);
    const NewphoneDisplay = phoneDisplay.slice(0, 20);
    //     console.log("new", NewphoneDisplay.length);

    const PhoneDiv = document.getElementById("about-phone");
    PhoneDiv.textContent = "";
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
                              <button class="btn btn-info " onclick="GetphoneId('${phone.slug}')" > Details</button>
                              </div>
                            </div>
                          
                          `;

      PhoneDiv.appendChild(div);

      document.getElementById("spinner").style.display = "none";
      // noFoundError.appendChild(div).innerHTML="";

     
    });

    
  } else {
    document.getElementById("about-phone").textContent ="";

    document.getElementById("spinner").style.display = "none";

    const noFoundError = document.getElementById("no-found");
    const div = document.createElement("div");

    div.innerHTML = `<h3>No Match Result</h3>
          <p>Search again</p>
          `;

    noFoundError.appendChild(div);
    //     PhoneDiv.textContent = "";
    // div.innerHTML ="";

    // noFoundError.appendChild(div).textContent = "";

    // noFoundError.style.display = "block";

    // console.log("no data");
    // const p = document.createElement("p");

    // p.innerHTML = `please Not found value`;
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
  // div.classList.add("col");
  PhoneDetailsDiv.textContent = "";
  div.innerHTML = `
<div class="card conatiner     d-flex    ">
                  <div class="row">

                  
                  
                  <div class="col-12 col-sm-12 col-lg-6  d-flex justify-content-center    ">
                  <img src="${
                    phoneDetail.image
                  }" class="  img-fluid my-5  "   alt="..." style="  height:400px"  >
                  
                  </div>


                  <div class="col-12 col-sm-12 col-lg-6 d-flex justify-content-center "  >
                  <div class="card-body my-5 col-12 col-sm-12 col-lg-6 " >
                  <span class="fw-bolder">Brand Name: ${
                    phoneDetail.brand
                  }</span><br>
                  <span class="fw-bolder">Phone Name: ${
                    phoneDetail.name
                  }</span><br>
                  <span class="fw-bolder">Realese Date: ${
                    phoneDetail.releaseDate
                      ? phoneDetail.releaseDate
                      : "No Realese Date"
                  }</span><br><hr>
                  <span class="fw-bolder text-success ">MainFeatures Info:</span><br>
                  
                  <span class="fw-bolder">Chipset: ${
                    phoneDetail.mainFeatures.chipSet
                  }</span><br>
                  <span class="fw-bolder">Memory: ${
                    phoneDetail.mainFeatures.memory
                  }</span><br>
                  <span class="fw-bolder">Display Size: ${
                    phoneDetail.mainFeatures.displaySize
                  }</span><br>
                  <span class="fw-bolder">Sensors:${
                    phoneDetail.mainFeatures.sensors
                  }</span><br>
                  <hr>
                  <span class="fw-bolder text-success ">Others Info:</span><br>
                   
                  <span class="fw-bolder">Blutooth:${
                    phoneDetail.others?.Bluetooth ? phoneDetail.others?.Bluetooth : "No Blutooth"
                  }</span><br>
                  <span class="fw-bolder">GPS:
                  ${(phoneDetail.others?.GPS ? phoneDetail.others?.GPS : "No GPS")}

                  </span><br>
                  <span class="fw-bolder">NFC:
                  ${( phoneDetail.others?.NFC ? phoneDetail.others?.NFC : "NO NFC")}
                  </span><br>
                  <span class="fw-bolder">Radio:
                  ${( phoneDetail.others?.Radio ? phoneDetail.others?.Radio : "NO Radio")}
                  </span><br>
                  <span class="fw-bolder">USB:
                  ${( phoneDetail.others?.USB ? phoneDetail.others?.USB : "NO USB" )}
                  </span><br>
                  <span class="fw-bolder">WLAN:
                  ${( phoneDetail.others?.WLAN ? phoneDetail.others?.WLAN : "NO WLAN")}
                  </span>
                   </div>
                  
                  </div>
                  
                  </div>
                    </div>


               

`;
  PhoneDetailsDiv.appendChild(div);

  //   console.log(phoneDetail);
};
