import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout.js'
import Login from './Login.js'
import { auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment.js'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise= loadStripe('pk_test_51JS40xSExeFNhbF0xxoOXlBbldmoAZsSUDM2CSW4X8ymxLUkGLPBftrg99DO3Zh84GQl252hQ4etDRpz0xNCdIQ300TPzJ7elI');

function App() {
  
  const [{}, dispatch] = useStateValue();

useEffect(()=> {
  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);


  return (
    <Router>
      <div className="app">
      <Switch>


      <Route path="/orders">
            <Header />
            <Orders />
          </Route>
      <Route path='/checkout'>
      <Header />
      <Checkout />
      </Route>

      <Route path='/login'>
      <Login />
      </Route>

      <Route path='/payment'>
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      
      </Route>
      
      <Route path='/'>
      <Header />
      <Home/>
      </Route>

      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
