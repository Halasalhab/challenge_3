import React from 'react';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
export const Address = ({ formData, setForm, navigation }) => {
    const { city, state, zipCode } = formData;
    return (
        <div>
            <Container maxWidth="xs">
                <h3>Address</h3>
                <TextField
                    label="City"
                    name="city"
                    value={city}
                    onChange={setForm}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                />
                <TextField
                    label="State"
                    name="state"
                    value={state}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                />
                <TextField
                    label="Zip Code"
                    name="zipCode"
                    value={zipCode}
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