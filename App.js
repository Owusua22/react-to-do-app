import React from 'react';
import Form from './Components/Form';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      
      
        
  
      <h1 style={{color:"#5b6f78", fontFamily:"Berlin Sans FB", textAlign:"center", textDecoration:"underline"}}>My Task List</h1>
      <img src="https://t4.ftcdn.net/jpg/02/71/41/71/240_F_271417172_6CdLRpgOtWWBBm8HcBkFoEF1urC9jurg.jpg" alt='img-responsive'/>

    <h3 className='get'>Hurray!!! Let's Get Started 😄 </h3>
     
  
      < Form/>
    </div>
  );
}

export default App;
