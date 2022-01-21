import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Prompt from './Prompt';
import Prospectus from './Prospectus';
import Description from './Description';

export default function SimpleAccordion() {
    return (
        <div>
            <Description />

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>
                        Index Constituents at Inception
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Prospectus />
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>
                        Prompt
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Prompt />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
