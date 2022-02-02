import  { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');


  const [text, settext] = useState('Enable Dark Mode');

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 800);
  }
  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042734';
      settext('Disable Dark Mode');
      // showAlert("dark mode has been enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      settext('Enable Dark Mode');
      // showAlert("dark mode has been disabled", "success");


    }
  }
  return (
    <>

      {/* <Router> */}

        <Navbar title="TextUtils" about="About-TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="about/*" element={<About mode = {mode}/>} /> */}
            <TextForm showalert={showAlert} heading="Enter Text to Analyse" mode={mode} />
          {/* </Routes> */}
        </div>

      {/* </Router> */}





    </>
  );
}

export default App;
