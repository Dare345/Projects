import {useState, useEffect} from 'react'
import "../components/people.css"
import getData from '../utlils/getData'
import './people.css'
//component
const People=()=> {
    //my vars
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(0);
    //get me some data
    useEffect(()=>{
        getData('people/')
            .then((json)=>{
                console.log("people return", json);
                setPeopleObj(json);
                setLoaded(true)
            });
    }, []);

    //first case (no data)
    if(!loaded) return (
            <>
                <h2>People Loading...</h2>
            </>
        );

    return(
        <>
            <h2>{peopleObj.title}</h2>
            <h3>{peopleObj.subTitle}</h3>
            {/* now, output each group! */}
            <h3>Faculty</h3>
            <div className="peopleList">
                {peopleObj.faculty.map((p) =>
                    <div className="peopleListItem" key={p.username}>
                        <h3>{p.name}</h3>
                        <img src={p.imagePath} alt="thisPerson"></img>
                    </div>
                )}
            </div>

            <h3>Staff</h3>
            <div className="peopleList">
                {peopleObj.faculty.map((p) =>
                    <div className="peopleListItem" key={p.username}>
                        <h3>{p.name}</h3>
                        <img src={p.imagePath} alt="thisPerson"></img>
                    </div>
                )}
            </div>
        </>
    )

}
export default People;