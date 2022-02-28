console.log("ll;po vyt");

const LoadPhones = () => {
  fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then((res) => res.json())
    .then((phones) => DisplayPhone(phones.data));
};

LoadPhones();

const DisplayPhone = (phoneDisplay) => {
  const PhoneDiv = document.getElementById("about-phone");
  phoneDisplay.forEach((phone) => {
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
//   console.log(phoneDisplay);
};


const GetphoneId = (phoneId) =>{

          const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`
          fetch(url)
          .then(res => res.json())
          .then(phoneIds =>PhoneDetails(phoneIds.data))
}




const PhoneDetails = (phoneDetail) => {
  const PhoneDetailsDiv = document.getElementById("phone-details");
  const div = document.createElement("div");
  PhoneDetailsDiv.textContent =""
  div.innerHTML = `
          <div class="card w-50 p-4    ">
                              <img src="${phoneDetail.image}" class="card-img-top   w-50 "   alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${phoneDetail.brand}</h5>
                                <h5 class="card-title">${phoneDetail.name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                            </div>
          
          `;
          PhoneDetailsDiv.appendChild(div);

          

//   console.log(phoneDetail);
};
