import * as React from 'react';
import { useState, useEffect } from "react";
import getData from "../utils/getData";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./DegreesExpand.css"


export default function BoxBasic() {
    //state
      const [loaded, setLoaded] = useState(false);
      const [obj, setObj] = useState();
    //useEffect
      useEffect(() => {
        getData("degrees/undergraduate/degreeName=cit")
        .then( (json) =>{
          setObj(json);
          setLoaded(true);
        })
      },[]);

    if (!loaded) {
      return(<h3>Loading Degrees...</h3>)
    }

  return (
    <Box component="div" sx={{ p: 2, margin: 12.5, textAlign: 'center', maxWidth:1000}}>
      <h2>{obj.title}</h2>
      <p>
      The Computing & Information Technology (CIT) major at Rochester Institute of Technology 
      (RIT) is a comprehensive education that blends technical skills with 
      a strong understanding of business and management principles. The program covers a wide 
      range of subjects, including programming, networking, system administration, database management, 
      cybersecurity, and software development, preparing students for the rapidly changing IT landscape. 
      RIT emphasizes hands-on learning, offering opportunities for students to engage in cooperative 
      education (co-op) experiences, internships, and real-world projects, ensuring they gain practical 
      skills and industry connections. Students can also specialize in areas like network administration, 
      information security, or cloud computing, tailoring their education to specific career goals. With 
      access to cutting-edge facilities and a strong focus on experiential learning, the CIT program at RIT 
      prepares graduates for a variety of IT roles, such as system analysts, software developers, and IT managers, 
      and positions them well for success in the technology sector.
      </p>
      <div className="concentrations">
        <h2>Concentrations</h2>
          {obj.concentrations.map((cert,index) =>
          <Typography variant="h5" sx={{ marginBottom: 2, marginTop:2}} key={index}>
              {cert}
          </Typography>
          )}
      </div>
    </Box>
  );
}

