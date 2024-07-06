
import { useState } from 'react';
import './Navbar.css';
import { useEffect } from 'react';
import { Link }from 'react-router-dom' ;
function Navbar () {

    useEffect ( () => {
        window.addEventListener("scroll" , ()=> {
    if (window.scrollY > 300){
        setshowScroll(true)
    }
    else {
        setshowScroll (false)
    } 
    });
    },[]); 
    
    const [ showScroll,setshowScroll] = useState(false);
    const [ showModal,setshowModal] = useState(false);
   return (
     <div className='parant'>
         <div className='navbar'>
            <div> <button  onClick ={()=> {
                setshowModal(true)
            } }       className='menu' >Menu </button>   </div>
            <div className='block'>
          <ul>
           <li><i class="fa-sharp fa-solid fa-house"></i> Home</li>
           <li> <i class="fa-duotone fa-comments"></i> About</li>
           <li> <i class="fa-sharp fa-solid fa-right-to-bracket"></i>  <Link to ='/Singin' > Singin </Link>  </li>
           <li> <Link to ='/Singup' > Singup </Link> </li>
           <li><i class="fa-solid fa-compress"></i>   <Link to ='/Footer'> Conact Us </Link>     </li>
          </ul>
          </div>
          <div></div>
          </div>
          {showModal &&(
          
          
          <div className='modal' >
<ul>
<button   onClick ={()=> {
                setshowModal(false)
            } }            className='close' >X</button>

           <li><i class="fa-sharp fa-solid fa-house"></i> Home</li>
           <li> <i class="fa-duotone fa-comments"></i> About</li>
           <li> <i class="fa-sharp fa-solid fa-right-to-bracket"></i>  <Link to ='/Singin' > Singin </Link>  </li>
           <li> <Link to ='/Singup' > Singup </Link> </li>
           <li><i class="fa-solid fa-compress"></i>   <Link to ='/Footer'> Conact Us </Link>     </li>
          </ul>


          </div>)}
         <div className='back'>

     <h1>Golden Dress</h1>
        <p>Welcome to <span>YA</span> Store, Enjoy with a Different journey,
    More Discounts,
    Beautiful clothes. </p>

    <h4><i class="fa.brands fa.google"></i></h4>
   <div >
    <a  style= {{ opacity:showScroll? 1:0 , transition:"1s"  }}       href='#up'>
    <button  className='scroll'  >up</button>
    </a>
    </div>
   </div>
</div>
    );
        }

export default Navbar;