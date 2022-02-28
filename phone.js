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
                          <h5 class="card-title">${phone.brand}</h5>
                         </div>
                        <div class="card-footer">
                        <button class="btn btn-info">Phone Details</button>
                        </div>
                      </div>
                    
                    `;

                    PhoneDiv.appendChild(div)
  });
  console.log(phoneDisplay);
};
