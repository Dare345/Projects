import { useState, useEffect } from "react";
import getData from "../utlils/getData";
import GridV2 from "./minorGrid";


  const minorsView = () => {
    //state
      const [loaded, setLoaded] = useState(false);
      const [obj, setObj] = useState();
    //useEffect
      useEffect(() => {
        getData("minors/")
        .then( (json) =>{
          setObj(json);
          setLoaded(true);
        })
      },[]);
    
    if (!loaded) {
      return(<h3>Loading Minors...</h3>)
    }

    return (
      <div className="container">
        <h1>Minors</h1>
            <GridV2 obj={obj.UgMinors}/>
      </div>
    );
}
export default minorsView;