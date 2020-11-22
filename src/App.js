import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import OTP from './component/OTP/otp';
import RateList from './component/RateList/RateList';
import Checkout from './component/Checkout/Checkout';
// import MyDocument from './component/PDF/PDF';
import './App.css';

const App = () => {
  alert(navigator)
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          {/* <MyDocument/>           */}
          <Route path="/" exact component={Login}/>
          <Route path="/otp" exact component={OTP}/>
          <Route path='/rateList' exact component={RateList}/>
          <Route path='/checkout' exact component={Checkout}/>
        </div>
      </BrowserRouter>


  );
}

export default App;
