import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react'
import getData from '../utlils/getData';

export default function BasicPopover({name}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //state
  const [loaded, setLoaded] = useState(false);
  const [obj, setObj] = useState();
//useEffect
  useEffect(() => {
    getData("course/")
    .then( (json) =>{
      setObj(json);
      setLoaded(true);
    })
  },[]);

    if (!loaded) {
    return(<h3>Loading Minors...</h3>)
    }

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {name}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
      >
        <Typography sx={{ p: 2 }} component="div">
            {obj.map((p,index) =>
                <div className="MinorInfo" key={index}>
                    {p.courseID === name &&
                        <Typography component="div">
                            <h3 key={p.title}>
                                {p.title}
                            </h3>
                            <h2 key={p.courseID}>
                                {p.courseID}
                            </h2>
                            <p key={p.description}>
                                {p.description}
                            </p>
                        </Typography>
                    }
                </div>
            )}
        </Typography>
      </Popover>
    </div>
  );
}