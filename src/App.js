import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type, //we can choose both name equal
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Switch> */}
        {/* <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse below"
          mode={mode}
        />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;