import React from 'react';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
export const Contact =({ formData, setForm, navigation })=>{
    const { phoneNum, ceditCardNum, expiryDate,cvv,bzc } = formData;
    return (
        <div>
                    <Container maxWidth="xs">
                <h3>Contact</h3>
                <TextField
                    label="phone Number"
                    name="phoneNum"
                    value={phoneNum}
                    onChange={setForm}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                />
                <TextField
                    label="Cedit Card Number"
                    name="ceditCardNum"
                    value={ceditCardNum}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                />
                <TextField
                    label="Expiry Date"
                    name="expiryDate"
                    value={expiryDate}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                />
                 <TextField
                    label="CVV"
                    name="cvv"
                    value={cvv}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                />
                 <TextField
                    label="Billing ZIP Code"
                    name="bzc"
                    value={bzc}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                />
                <Button
                    variant="contained"
                    fullWidth color="praimary"
                    style={{ marginTop: '1rem' }}
                    onClick={() => navigation.previous()}
                >Back</Button>
                <Button
                    variant="contained"
                    fullWidth color="secondary"
                    style={{ marginTop: '1rem' }}
                    onClick={() => navigation.next()}
                >Next</Button>
            </Container>
        </div>
    )
}