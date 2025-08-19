import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Link, Route, Routes } from "react-router-dom";
import CommonHeader from "./common/template/header/header";




function App() {

    const styles = {
        rootContainer : {
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
        }
    }


  return (
    <BrowserRouter style={ styles.rootContainer }>
        <div style={ styles.rootContainer }>
            <CommonHeader />

        </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}


export default App;
