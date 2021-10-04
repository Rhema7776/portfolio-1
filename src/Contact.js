import React from 'react'

const Contact = () => {
    return (

      <div>
          <h1 className="Contactus">Contact us</h1>
         <div className="contact_flex">
          <div className="contact_flex1">
           <h2 className="cont_get">Get In touch</h2><br></br> <br></br>
           <input className="cont1"  placeholder="Name"/>
           <input className="cont1" placeholder="Email"/>
           <input className="cont1"  placeholder="Phone no."/>
           <input className="cont1" id="cont2" placeholder="Write a Message"/>
           
           < button className="hire_button" >SEND MESSAGE</button>
          </div>
          
          {/* <p>Wow you have done it Wow you have done it Wow you have done it</p> */}
          <div className="contact_flex2">
           <h2>My Contact Details</h2><br></br> <br></br>
           <div>
             <p className="purple">EMAIL</p>
             <p>rhemachukwumah7@gmail.com</p>
           </div>
           <div>
             <p className="purple">PHONE</p>
             <p>09037058213</p>
           </div>
           <div>
             <p className="purple">ADDRESS</p>
             <p>1 madarikan avenue, alake B/stop , Ikotun-idimu rd, Lagos</p>
           </div>
           
           

          </div>
        </div>
        {/* <a href="https://wa.me/!!!yourNumberWithCountryCodeHere!!!?text=Hi%20Eric,%20I%20am%20sending%20you%20this%20message%20because%20I%20am%20interested%20in%20your%20business!" style="text-decoration: none;" target="_blank">
                <img class="lo1" src="https://i.ibb.co/N9P0K9H/239px-Whats-App-svg.png" width="110" height="110"/>
                </a> */}
             
      </div>
      
    )
}

export default Contact
 