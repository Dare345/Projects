
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


// Used to check the available certificates
const format = "graduate advanced certificates";

// Main function that provides the information on degrees
const DegreeInfo = ({obj, title}) =>{
    return(
        <div className="container">
            <div className="under">
            <h2>{title}</h2>
            {obj.map((p) =>
            <Accordion className="accor" key={p.degreeName}>
                <AccordionSummary className="sum" key="index"
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                >
                <div className="degreeHead">
                    {p.degreeName !== format && (
                        <div>
                        <Typography variant="h5">
                            {p.title}<br/>
                        </Typography>
                        <p>
                        {p.description}
                        </p>
                        </div>
                    )}

                    {p.degreeName === format && (
                        <div>
                            <Typography variant="h5">
                            Graduates Advanced Certificates<br/>
                            </Typography>
                            <p>
                            {p.description}
                            </p>
                        </div>
                    )}
                </div>
            </AccordionSummary>
                <>
                <AccordionDetails>
                    {p.degreeName !== format && (
                        <div>
                        <h1>Concentrations:</h1>
                        {p.concentrations.map((cert,index) =>
                        <Typography key={index}>
                            {cert}
                        </Typography>
                        )}
                        </div>
                    )}

                    {p.degreeName === format && (
                        <div>
                            <h1>Available Certificates::</h1>
                            {p.availableCertificates.map((conc,index) =>
                                <Typography key={index}>
                                    {conc}
                                </Typography>
                            )}
                        </div>
                    )}
                </AccordionDetails>
                </>
            </Accordion>
            )}
            </div>
        </div>
        )
}

export default DegreeInfo;