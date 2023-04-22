import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const baseURL = 'http://localhost:3000/users/';

export default function UserUpdate() {

    const { id } = useParams();

    useEffect(() => {
        fetch(`${baseURL}` + id).then((res) => {
            return res.json();
        }).then((resp) => {
            setName(resp.email);
            setEmail(resp.email);
            setUsername(resp.username);
            setWebsite(resp.website);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [id]);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [website, setWebsite] = useState('');

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const userData={email,name,username,website};
        

        fetch(`${baseURL}` +id,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userData)
        }).then((res)=>{
            alert('Saved successfully.')
            navigate('/');
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    return (
        <Container maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="website"
                                label="Website"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Update
                    </Button>
                </form>
            </div>
        </Container>
    );
}