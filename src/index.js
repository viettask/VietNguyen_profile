import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './Info';
import About from './About';
import Footer from './Footer';

//import reportWebVitals from './reportWebVitals';
const page=(
  <div className="profile_form">
    <Info />
    <About />
    <Footer />
  </div>
)



ReactDOM.render(
page,
  document.getElementById('root')
);


//reportWebVitals();
