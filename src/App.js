
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState} from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode ] = useState('light'); //check whether dark mode is enabled or not 

  const [alert ,setAlert] = useState(null);

  const showAlert = (message ,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1500 );
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled " , " success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils - Dark Mode is enabled now !!!!';
      // },2000)

    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled " , " success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
<BrowserRouter>
      <Navbar title="Text Analyzer" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

      {/* <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3"> */}

        <Routes>
          <Route exact path="/about" element={<About  mode={mode} />}></Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter , Character counter" mode={mode} />}>
          {/* <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter , Character counter" mode={mode} /> */}
          </Route>
        </Routes>

      </div>
     </BrowserRouter> 
    </>

  );
}

export default App;
