import {useState, useEffect} from 'react'
import { TabPane, Tab } from 'semantic-ui-react'
import getData from '../utlils/getData'
import PeopleGroup from './peopleGroups'
import './people.css'

const PeopleTabs = () => {
  //state
    const [loaded, setLoaded] = useState(false);
    const [peopleObj, setPeopleObj] = useState();
  //useEffect
    useEffect(() => {
      getData('people/')
      .then( (json) =>{
        setPeopleObj(json);
        setLoaded(true);
      })
    },[]);

const panes = [
  { menuItem: 'Faculty', render: () => <TabPane>
    {/* put out the people group - but what does it need? */}
    <PeopleGroup title="Faculty" obj={peopleObj.faculty}></PeopleGroup>
    </TabPane> },
  { menuItem: 'Staff', render: () => <TabPane>
    <PeopleGroup title="Staff" obj={peopleObj.staff}></PeopleGroup>
    </TabPane> }
]

if (!loaded)
  return(<h3>Loading People...</h3>)

  return (
    <>
    <h3>{peopleObj.title}</h3>
    <h3>{peopleObj.subTitle}</h3>
    <Tab panes={panes}/>
    </>
  )
}


export default PeopleTabs
