import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Minors from './minorInfo';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
  
  export default function BasicGrid({obj}) {
    // Makes use of component grid to organize the minors
    return (
      <Box sx={{ flexGrow: 1 }} className="container" >
        <Grid container spacing={3}>
            {obj.map((p, index) =>
            <Grid size={4} key={index}>
                <div key={p.name}>
                        <Item>
                              <Minors {...p}/>
                        </Item>
                </div>
              </Grid>
            )}
        </Grid>
      </Box>
    );
  }