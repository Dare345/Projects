
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./degreeInfo.css";

// Main function that provides the information on degrees
const DegreeInfo = ({props}) =>{
    return(
        <Accordion>
            <AccordionSummary key="index"
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            sx={{backgroundColor:"rgb(58, 57, 57)"}}
            >
            <div className="degreeHead">
                    <div>
                    <Typography variant="h5">
                        Concentrations<br/>
                    </Typography>
                    </div>
            </div>
        </AccordionSummary>
            <>
            <AccordionDetails>
                    <div>
                    {props.concentrations.map((cert,index) =>
                    <Typography key={index}>
                        {cert}
                    </Typography>
                    )}
                    </div>
            </AccordionDetails>
            </>
        </Accordion>
    )
}

export default DegreeInfo;