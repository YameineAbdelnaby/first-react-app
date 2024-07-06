import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Navbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Singup from './Singup';
import Singin from './Singin';
import ProductsList from './ProductsList';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
const root = ReactDOM.createRoot( document.getElementById("root"));

root.render(
<BrowserRouter>


<>
<Routes>

  <Route path ='/Singup' element={ <Singup />  } />
  <Route path ='/Singin' element={ <Singin />  } />
  <Route path ='/Footer' element={ <Footer />  } />

  </Routes>
  <div id='up' >
  <Navbar />
<ProductsList />
</div>
</>
</BrowserRouter> 
    )
