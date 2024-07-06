
import { useState } from 'react';
import './Singup.css';
function Singup (){

  const [firstName,setName] = useState("");
  const [lastName,setLastName]= useState("");
  const [emile,setEmile] = useState("");
  const [password,setPassword] = useState("");
  const [passwordR,setPasswordR] = useState("");
const [accept, setAccept] = useState (false);

function Submit(e) {
   e.preventDefault();
  setAccept (true);
  
}
    return(

< div className='singup'>
 <div className="form">

       <form onSubmit={Submit}>
        
<label for="firstname"> First Name</label>
<input
id="name"
type="text"
placeholder="first Name"
value={firstName}
onChange={(e) =>setName (e.target.value)}

/>
{ firstName==='' && accept && (<h4> firstName is required</h4>)}
<br></br>
   <label for="lastName"> last Name</label>
<input
id="lastName"
type="text"
placeholder="Last Name"
value={lastName}
onChange={(e) =>setLastName (e.target.value)}

/>
<br></br>

<label for="emile"> Emile      </label>
<input
id="emile"
typ="emile"
type="text"
placeholder="hdgt@gmile.comm"
required 

value={emile}
onChange={(e) =>setEmile (e.target.value)}

/>
<br></br>

   <label for="password"> Password</label>
<input
id="password"
type="text"
placeholder="Password"
value={password}
onChange={(e) =>setPassword (e.target.value)}
/>
 {password < 8  &&  accept  && (<h4> Password must be more than 8 char</h4>)}
<br></br>

<label for="repeat">Repeat Password</label>
<input
id="repeat"
type="text"
placeholder="Repeat Password"


value={passwordR}
onChange={(e) =>setPasswordR(e.target.value)}
/> 

{passwordR !== password && accept && (<h4> Password dose not match</h4>)}
<br></br>
<button className='but2'>Regster</button>
<br></br>
<button className='but2'>Delete</button>





</form>
  </div>



</div>


    )
}
export default Singup ;
