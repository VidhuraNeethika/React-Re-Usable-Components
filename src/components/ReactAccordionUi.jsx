import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import * as React from "react";
import { BsArrowDownShort} from "react-icons/bs";

const ReactAccordionUi = () => {
    return (
        <div className='border-0'>
            <h2 className='mb-5 font-bold'>Accordion UI with material UI Components</h2>
            <Accordion  style={{ boxShadow:"none"}} defaultExpanded>
                <AccordionSummary
                    expandIcon={<BsArrowDownShort />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Accordion Actions
                </AccordionSummary>

                <AccordionDetails>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </AccordionDetails>

                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>

            </Accordion>
        </div>
    );
}

export default ReactAccordionUi;