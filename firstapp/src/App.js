
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Heading from'./heading';
import Cards from './cards';
function App(){
    return (
      <React.Fragment className="App">
       <header className="App-header">
        <Navbar />
        <Heading/>
        <Cards/>
        </header>
      </React.Fragment>
    );
    }
  export default App