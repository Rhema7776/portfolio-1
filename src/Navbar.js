import {React, useState} from 'react'
import { Link, withRouter } from 'react-router-dom'


const Navbar = () => {
    
    window.onscroll = () => {
       let myclass= document.querySelector("ul")
    //   myclass.style.backgroundColor="white"
     
    //   scrollTop = $window.scrollTop();
    //   $container.css('ul', (scrollTop - height + $window.height()) + "px");
        // background-color: white;

      
    }
  const Heigth =() =>{
    window.scrollBy(0, 0);
    //   document.body='' 
    console.log(window.screen.height);
  }
 



   const height =() =>{
    window.scrollBy(700, 690);
 
    
    
   }
   
   const height2 =() =>{
       window.scrollBy(660, 400);
       console.log(window.screen.height);
   }

   const height3 =() =>{
       window.scrollBy(660, 359);
       console.log(window.screen.height)

   }

   const [state, setstate] = useState(false)


  const checkScroll = ()=> {
      const navHeight = window.pageYOffset
      console.log(navHeight)
      if (navHeight >= 5) {
          setstate(true)
      }
      else{
          setstate(false)
      }
  }

  window.addEventListener('scroll',checkScroll)


    return (
        <div className='ul'>
            {/* <img className="portfolio_img" src='./' */}
            <ul className={state?'ul_div act': 'ul_div'} >
                
                <li ><a href='' className='li' to='/' onClick={Heigth} >HOME</a></li>
                <li ><a href='#Home_id' className='li' to='/about' onClick={height}>ABOUT </a></li>
                <li><a  href='#Home_id' className='li' to='/service' onClick={height3}>RESUME</a></li>
                <li ><a href='#Home_id' className='li' to='/contact' onClick={height2}>CONTACT</a></li>

            </ul>
           
           
           <div className='me'>
             <p className='hello'>HELLO! I'M</p>
             <h1 className='rhehjma'>RHEMA</h1>
          </div>
            
        </div>
    )
}

export default Navbar;
