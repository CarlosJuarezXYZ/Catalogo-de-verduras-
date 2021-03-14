import { Global, css } from "@emotion/react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ButtonGenerals from './components/Button';
import Card from "./components/Card";
import All from "./pages/All";
import Body from "./pages/All/Body";
import Footer from "./pages/All/Footer";
import Header from "./pages/All/Header";
import Cart from "./pages/Cart";
import Succes from "./pages/Succes";


function App() {
  return (
    <div className="App">
       <Global 
        styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');

        *{
          font-family: Source Code Pro;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          //background: #f2f2f2;
          display:flex;
          justify-content:center;
        }
        `}
      />
        <Router>
          <Switch>
            <Route path="/succes" component={Succes}/>
            <Route path="/cart" component={Cart}/>
            <Route path = "/" component={All}/>
          </Switch>
        </Router>        
    </div>
  );
}

export default App;
