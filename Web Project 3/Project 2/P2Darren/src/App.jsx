//loads
//import React from 'react'
//import Specific Component from React
import { useState, useEffect, useRef } from "react"
import About from "./components/about.jsx"
import PeopleTabs from './components/peopleTabs.jsx'
import NavMenu from './components/NavMenu.jsx'
import DegreesExpand from './components/DegreesExpand.jsx'
import MinorsView from './components/minorsView.jsx'
import EmploymentView from './components/EmploymentView.jsx'
//getData
import getData from "./utlils/getData.js"
import './App.css'


//App (component)
const App = ()=> {
  //state vars
  //const [get, set] = usedState(init);
  const [loadedAbout, setLoadedAbout] = useState(false);
  const [about, setAbout] = useState();


  //useEffect -
  //Base Syntax
  useEffect( () =>{
    //get the data
    getData('about/').
    then((json)=>{
      setAbout(json);
      setLoadedAbout(true);
    })
  }, [] );


  //before data....
  if (!loadedAbout) return (
    <>
    <h1>Welcome to the iSchool Website!</h1>
    <div>Loading...</div>
    </>
  );

  //with data
  return (
    <>
    <header>
      <div className="stick">
        {/* navigation menu */}
        <div className="logo">
          <h1>Welcome to the iSchool Website!</h1>
        </div>
        <NavMenu/>
      </div>
    </header>

    <div className="App">
      {/* Components*/}
      <div id="about">
        <About aboutData={about}/>
      </div>

      <div id="degrees">
        <DegreesExpand/>
      </div>

      <div id="minors">
        <MinorsView/>
      </div>

      <div id="employments">
        <EmploymentView/>
      </div>

      <div id="people">
        <PeopleTabs/>
      </div>

    <footer>
      <h3>Contact Us</h3>
      <a href="mailto:ischools@g.rit.edu">ischools@g.rit.edu</a><br/>
      <a href="tel:5854752411">(585) 475-2411</a>
    </footer>
    </div>
    </>
  )
}
export default App;
