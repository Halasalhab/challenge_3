import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button';
export const Review =({ formData, setForm, navigation })=>{
    const {  name,
    email,
    password,
    city,
    state,
    zipCode,
    phoneNum,
    ceditCardNum,
    expiryDate,
    cvv,
    bzc}=formData;
    return (
        <div>
            <Container maxWidth="sm">
                <h3>Review</h3>
                <RenderAccordion summary="Names" details={[
                    {'Name':name},
                    {'Email':email},
                    {'Password':password}
                ]}/>
                 <RenderAccordion summary="Address" details={[
                    {'City':city},
                    {'state':state},
                    {'zipCode':zipCode}
                ]}/>
                 <RenderAccordion summary="Contact" details={[
                    {'phoneNum':phoneNum},
                    {'ceditCardNum':ceditCardNum},
                    {'Expiry Date':expiryDate},
                    {'CVV':cvv},
                    {'Billing ZIP Code':bzc}
                ]}/>
                <Button>
                    submit
                </Button>
            </Container>
        </div>
    );
};
export const RenderAccordion=({summary,details})=>(
    <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        >{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                { details.map((data,index)=>{
                    const objKey=Object.keys(data)[0];
                    const objValue=data[Object.keys(data)[0]];
                    return <ListItemText key={index}>{`${objKey}:${objValue}`}</ListItemText>
                })}
                <IconButton>
                <EditIcon/></IconButton>
            </div>
        </AccordionDetail>
    </Accordion>
)