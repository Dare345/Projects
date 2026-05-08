import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Fragment } from 'react';
import Popover from './Popover'
import './minorInfo.css'

const MinorInfo = (props) =>{
    //Displays all information of the minors provided by the api
    return(
            <div className="under">
                <Accordion className="accor" key={props.name}>
                    <AccordionSummary className="sum" key="index"
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    >
                    <div className="minors">
                        <Typography key={props.title}>
                            {props.title}
                        </Typography>
                    </div>
                </AccordionSummary>
                    <AccordionDetails>
                    <Typography key={props.name} component="div">
                        <Typography>
                            Description:{props.description}<br/>
                            Courses:<br/>
                        </Typography>
                        {props.courses.map((course) =>
                            <Fragment key={course}>
                                    <Typography component="span">
                                        <Popover name={course}/>
                                    </Typography>
                            </Fragment>
                        )}
                        {props.note &&
                        <Fragment>
                            <Typography variant="subtitle2">
                                *{props.note}
                            </Typography>
                        </Fragment>
                        }
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
}

export default MinorInfo;