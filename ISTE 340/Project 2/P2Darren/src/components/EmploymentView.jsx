import { useState, useEffect } from "react";
import getData from "../utlils/getData";
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import GridTemp from  './gridTemp';
import { TabPane, Tab } from 'semantic-ui-react'
import Table from './InfoTable'
import './EmploymentView.css'

const employmentView = () => {
    //state
      const [loaded, setLoaded] = useState(false);
      const [obj, setObj] = useState();
    //useEffect
      useEffect(() => {
        getData("employment/")
        .then( (json) =>{
          setObj(json);
          setLoaded(true);
        })
      },[]);
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    backgroundColor:"orangered",
    textAlign: 'center',
    borderRadius:30,
  }));
    if (!loaded) {
      return(<h3>Loading Employment Information...</h3>)
    }
    const panes = [
        { menuItem: obj.coopTable.title, render: () => <TabPane>
            <Table obj={obj.coopTable}></Table>
          </TabPane> },
        { menuItem: obj.employmentTable.title, render: () => <TabPane>
            <Table obj={obj.employmentTable}></Table>
          </TabPane> }
      ]
    return (
        
      <div className="employ">
        <div className="intro">
            {/* Loop that creates Employment Info and CO-OP Info */}
            <h1>{obj.introduction.title}</h1>
            {obj.introduction.content.map((p, index) =>
                <Typography component="div" key={index}>
                    <h3>
                        {p.title}
                    </h3>
                    <p>
                        {p.description}
                    </p>
                </Typography>
            )}
        </div>
        {/* Main Loop that creates the statistics and list employers and careers */}
        <h2>{obj.degreeStatistics.title}</h2>
        <Box sx={{ flexGrow: 1 }} className="container" >
        <Grid container spacing={3} className="grid">
            {obj.degreeStatistics.statistics.map((p, index) =>
            <Grid size={3} key={index}>
                <div key={p.name}>
                        <Item key={index} className="stats">
                                <h3>
                                    {p.value}
                                </h3>
                                <p>
                                    {p.description}
                                </p>
                        </Item>
                </div>
              </Grid>
            )}
        </Grid>
        </Box>
        <h2>{obj.employers.title}</h2>
        <GridTemp obj={obj.employers.employerNames} style="employers"/>
        <h2>{obj.careers.title}</h2>
        <GridTemp obj={obj.careers.careerNames} style="careers"/>
        <Tab panes={panes}></Tab>
      </div>
    );
}
export default employmentView;