import { Global, css } from "@emotion/react";
import './App.css';
import ButtonGenerals from './components/Button';
import Card from "./components/Card";
import Body from "./pages/All/Body";
import Header from "./pages/All/Header";

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
        }
        `}
      />
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
