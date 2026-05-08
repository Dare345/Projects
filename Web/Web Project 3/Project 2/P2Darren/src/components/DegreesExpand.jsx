import { useState, useEffect } from "react";
import getData from "../utlils/getData";
import DegreeInfo from "./degreeInfo";
import './DegreesExpand.css'


  const DegreesExpand = () => {
    //state
      const [loaded, setLoaded] = useState(false);
      const [Obj, setObj] = useState();
    //useEffect
      useEffect(() => {
        getData("degrees/")
        .then( (json) =>{
          setObj(json);
          setLoaded(true);
        })
      },[]);
    
    if (!loaded) {
      return(<h3>Loading Degrees...</h3>)
    }

    return (
      <div className="container">
        <h1>Degrees</h1>
        {/* Uses a component called degreeInfo to make the different sections of degree*/}
        <DegreeInfo obj={Obj.undergraduate} title="Undergraduate Degrees"/>
        <DegreeInfo obj={Obj.graduate} title="Graduate Degrees"/>
      </div>
    );
}
export default DegreesExpand;