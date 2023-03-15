import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Signin from './Components/Signin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Signin /> */}
      {/* <Footer /> */}
    </div >
  );
}

export default App;
