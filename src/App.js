import { Global, css } from "@emotion/react";
import './App.css';
import ButtonGenerals from './components/Button';
import Card from "./components/Card";
import All from "./pages/All";
import Body from "./pages/All/Body";
import Footer from "./pages/All/Footer";
import Header from "./pages/All/Header";
import Cart from "./pages/Cart";

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
     {/*<All/>*/}
     <Cart/>
    </div>
  );
}

export default App;
