import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import * as React from "react";
import { BsArrowDownShort} from "react-icons/bs";

const ReactAccordionUi = () => {
    return (
        <div className='max-w-[1024px] mx-auto border-0 mt-20'>
            <Accordion  style={{ boxShadow:"none"}} defaultExpanded>
                <AccordionSummary
                    expandIcon={<BsArrowDownShort />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Accordion Actions
                </AccordionSummary>
                <AccordionDetails>
                    <div>hello</div>
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