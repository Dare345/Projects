//load my stuff
//import from react
import { useState } from 'react'

//Load my comp
import Welcome from './components/functionalComp'
import InlineComp from './components/otherComp'
import Title from './components/Title'

import './App.css'


//my application
function App() {
  //writing my (App) private vars
  //state
  //const [getter,setter] = useState(init);
  //flag for if it is loaded yet?
  const [loaded, setLoaded] = useState(false);
  //obj to hold my returned data
  const [myObj, setMyObj] = useState();

  //write my (App) methods
  //let's go faux the data...
  const getData = () =>{
    //usually we would go out and load data!
    //today we are faking it to see useEffect and useState working
    setMyObj({
      title:"React is fun!",
      description:"Lots and Lots of words, something more meaningful than this, yadda, yadda...."
    });
    setLoaded(true);
  }
  if(!loaded) return(
  <>
    Loading...
    <button onClick={getData}>click me</button>
  </>)
  
  return (
    <>
      <Title obj = {myObj}/>
      <InlineComp name="fred" age="55"/>
      <Welcome name="dan" job="talk"></Welcome>

    </>
  )
}

export default App
