import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Link, Route, Routes } from "react-router-dom";
import CommonHeader from "./common/template/header/header";
import HomePage from "./pages/public/index/index"
import Homepage from "./pages/public/index/index";




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
            <Routes>
                <Route path="/" element={ <HomePage /> } />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
