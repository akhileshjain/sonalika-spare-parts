import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from './component/Header/Header';
// import Login from './component/Login/Login';
// import OTP from './component/OTP/otp';
import RateList from './component/RateList/RateList';
import RateListView from './component/RateListView/RateListView';
import Checkout from './component/Checkout/Checkout';
import './App.css';
import Paginate from './component/Paginator/Paginator';

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          {/* <Route path="/" exact component={Login}/> */}
          {/* <Route path="/otp" exact component={OTP}/> */}
          
          <Route path='/' exact component={RateList}/>
          <Route path='/checkout' exact component={Checkout}/>
        </div>
      </BrowserRouter>


  );
}

export default App;
