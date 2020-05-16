
/* */


let randomUsers='';
let totalusers= randomUsers.length;
let userProfileArray=[];


apiCall(); //

// This is the Api call to the random user API , requesting 12 users from the Great Britain 

function apiCall ()
    {
    fetch("https://randomuser.me/api/?results=12&nat=gb")
        .then(response => {
            return response.json();})
            .then(data => {

            //business logic
              randomUsers = data.results;
              createUsers();
              showAllGeneratedUsers();
            
            }) }
   

    /*This function creates new User Profile Objects  */ 

    function createUsers() {
        let i =0 ;

          function nameGen (){return ("userNumber"+i)}; //function to create strings for dynamic user names 

            for(i; i<randomUsers.length;i++) 
                { 
                    let id=  nameGen();

                    window [id]= new UserProfile (randomUsers[i]); //new user profile is created

                    userProfileArray.push(window [id]); //Assigns the variables to the userProfileArray

                }
            }


    /* This function displays all the generated users by the crateUsers() to the gallery Div */

    function showAllGeneratedUsers()
                 {
                    let gallery =document.querySelector('.gallery'); //This selects the gallery class
                    gallery.innerHTML ='';
                     for (let i = 0 ;i<userProfileArray.length ;i++)
                        {
                          userProfileArray[i].adduserToDisplay();// populates the DOM with all the generated users 
                        }
                    

                    /* Click event listener added to each card as it is created */
                        setTimeout(()=> //Delay function 
                        
                        { 
                         let cards =document.querySelectorAll('.card');

                         for(let t=0 ;t<userProfileArray.length;t++)
                            {
                                cards[t].addEventListener(
                             
                                'click', (e)=>
                                        {

                                       let clickElement = e.currentTarget.dataset.id;
                                            
                                        for (let w=0 ; w<userProfileArray.length;w++)
                                             {
                                               if(userProfileArray[w].first_name ==clickElement) 
                                                {
                                                   userProfileArray[w].userPopUp();
                                                }
                                             }                                  
                                          })
                            }  
                        },200)      
                }


     /* This function closes all and any  popup appended to the body */
       function closePopUp(){

            let popUps = document.querySelectorAll('.modal-container');
                while(popUps.length)
                    {
                        popUps[0].remove();

                        popUps =document.querySelectorAll('.modal-container') 
                    }
                    showAllGeneratedUsers();
                 
                }
                
    
          