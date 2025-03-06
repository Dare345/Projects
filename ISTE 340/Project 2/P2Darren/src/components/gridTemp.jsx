import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import './gridTemp.css'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    backgroundColor:"gray",
    textAlign: 'center',
    borderRadius:30,
  }));
  
  
  export default function GridTemp({obj, style}) {
    {/*Creates the grid Items used for Employers and Careers*/}
    return (
        <Box sx={{ flexGrow: 1 }} className="container" >
        <Grid container spacing={3} className="grid">
            {obj.map((p, index) =>
            <Grid size={2} key={index}>
                <Item key={index} className={style}>
                    <h4>{p}</h4>
                </Item>
              </Grid>
            )}
        </Grid>
        </Box>
    );
  }