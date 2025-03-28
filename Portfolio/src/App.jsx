import { useState, useEffect, useRef } from 'react'
import getData from './utils/getData'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PacmanLoader from 'react-spinners/PacmanLoader'
import Navbar from './components/Navbar'
import Darren from './assets/imgs/Darren_Yang.jpg'
import Degree from './components/DegreesExpand'



const App = () =>{
  //State vars that obtains data for the courses I've taken
  const [loadedAbout, setLoadedAbout] = useState(false);
  const [about, setAbout] = useState();


  useEffect( () =>{
    //get the data from the Ischool API
    getData('about/').
    then((json)=>{
      setAbout(json);
      setLoadedAbout(true);
    })
  }, [] );

  if (!loadedAbout) return (
    <PacmanLoader id="load"
    color="#0091ff"
    size={50}
    />
  );

  return(
    <>
      <header>
        {/* Navigation bar to direct user to different section of the webpage */}
        <Navbar nav={{name: 'Darren Yang', intro:"#intro", 
        sum:"#sum", classes:"#classes", courses:"#courses"
         }}/>
      </header>

        <div id="intro">
          <div className="box">
            <img src={Darren} alt="Darren" ></img>
            <h2>Welcome to my Portfolio Website!</h2>
          </div>
          <p>Hello, my name is Darren Yang, currently a Junior 
            undergraduate at Rochester Institute of Technology. I'm currently
            majoring in a bachelor's degree for Computing & Information Technology.

            <br/>
            <br/>

            Through this portfolio, I hope to showcase not only my technical skills but also my 
            commitment to continuous learning and problem-solving. I believe that technology is at the 
            heart of progress, and I’m excited to be a part of this ever-evolving field. Explore my work, 
            projects, and experiences here to see how I leverage IT to create impactful solutions.
            </p>
        </div>

        <div id="degree">
            <Degree></Degree>
        </div>
      

      <footer>

      </footer>
    </>
  )
}


export default App
