import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
      <div className='App'>
       <Navbar/>
       <div className="content">
        <Home/>
        <h1>App Component</h1>
       </div>
      </div>     
  )
}

export default App; //we always export our component function so we can use it in other apps 
