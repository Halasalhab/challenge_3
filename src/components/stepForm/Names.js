import React from 'react';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
export const Names = ({ formData, setForm, navigation }) => {
    const { name, email, password } = formData;
    return (
        <Container maxWidth="xs">
            <h3>Name</h3>
            <TextField
                label="First Name"
                name="firstName"
                value={name}
                onChange={setForm}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
            />
            <TextField
                label="Email"
                name="email"
                value={email}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
            />
            <TextField
                label="Password"
                name="password"
                value={password}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
            />
            <Button 
            variant="contained" 
            fullWidth color="praimary" 
            style={{ marginTop: '1rem' }}
            onClick={()=>navigation.next()}
             >Next</Button>
        </Container>
    )
}