



class UserProfile {
    //This takes in a object and parses it, extracting the bits Required 
    
    constructor(userData) {

    this.userData=userData;

    this.first_name= (userData.name.first); 

    this.last_name= (userData.name.last);

    this.email= userData.email;

    this.picture= userData.picture.large;

    this.cell =userData.cell;

    this.city_state= userData.location.city;

    this.country = userData.location.country;

    this.zipCode = userData.location.postcode;
                
    this.dateOfBirth = new Date (userData.dob.date);
    
    this.dateOfBirth=this.dateOfBirth.toDateString();

    this.address = userData.location.street.number + ' ' + userData.location.street.name  + ', ' + userData.location.city + ', ' + userData.location.postcode ;

                }


        
 /* The adduserToDisplay() method allows the object to be displayed to the screen*/

    adduserToDisplay() {

                let galleryDisplayTemplate = 
                    
                    `
                    <div class="card" data-id="${this.first_name}">
                        <div class="card-img-container">
                            <img class="card-img" src=${this.picture} alt="profile picture">
                        </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap"> ${this.first_name}  ${this.last_name} </h3>
                            <p class="card-text">${this.email}</p>
                            <p class="card-text cap">${this.city_state}</p>

                     </div>
                        </div>`

                        let gallery =document.querySelector('.gallery');

                        gallery.innerHTML = gallery.innerHTML + galleryDisplayTemplate; 

                     }


//This is the method that creates a modal ,  i need to find a way to trigger this method 

    userPopUp(){


            let modalDisplayTemplate = 
                `<div class="modal-container">
                    <div class="modal">
                        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                            <div class="modal-info-container">
                            <img class="modal-img" src=${this.picture} alt="profile picture">
                            <h3 id="name" class="modal-name cap"> ${this.first_name}  ${this.last_name} </h3>
                            <p class="modal-text">${this.email}</p>
                            <p class="modal-text cap">${this.country}</p>
                            <hr>
                            <p class="modal-text">${this.cell}</p>
                            <p class="modal-text">${this.address}</p>
                            <p class="modal-text">Birthday: ${this.dateOfBirth} </p>
                    </div>
                    </div> `

            let body =document.querySelector('body');

             body.innerHTML = body.innerHTML + modalDisplayTemplate;

//This is the click event listener for the close button

            document.querySelector(".modal-close-btn").addEventListener('click',()=> {closePopUp()});
          
     } }



