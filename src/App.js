import './App.css';
import React,{useEffect} from "react";
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from './Login';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {

  const[{user},dispatch]=useStateValue();



  useEffect(() => {
   const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        });
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    })
    return()=>{
      unsubscribe();
    };
  }, []);

  console.log('useris',user);



  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/checkout">
          <Header/>
          <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          
          <Route path="/">
          <Header/>
              <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
