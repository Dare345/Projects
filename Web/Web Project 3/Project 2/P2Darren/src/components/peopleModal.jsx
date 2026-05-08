import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import {Modal, Box, Button, Typography} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>{props.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h3" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h6" component="h2">
            {props.tagline}
          </Typography>
          <Typography variant="h6" component="h2">
            {props.title}
          </Typography>
            <img src={props.imagePath} alt="person" style={{maxWidth:300}}/>

        {props.website &&
            <Typography variant="h6" component="h2">
                Website:<a href={props.website} target="_blank">{props.website}</a>
            </Typography>
        }
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Username:{props.username}<br/>
            Office:{props.office}<br/>
            Phone:{props.phone}<br/>
            Email:{props.email}<br/>
            Area of Interests:{props.interestArea}<br/>
            {props.facebook &&
              <Typography>
              Facebook:{props.facebook}<br/>
              </Typography>
            }
            {props.twitter &&
              <Typography>
              Twitter:{props.twitter}<br/>
              </Typography>
            }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
