import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';

export default function UserUpdate() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [website, setWebsite] = useState('');

    const { id } = useParams();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/"+id)
        .then(res => res.json())
        .then(
            (result) => {
            setEmail(result.user.email)
            setName(result.user.name)
            setUsername(result.user.username)
            setWebsite(result.user.website)
            }
        )
    }, [id])

    const handleSubmit = event => {
        event.preventDefault();
        var data = {
        'id': id,
        'email': email,
        'name': name,
        'username': username,
        'website': website,
        }
        fetch('https://jsonplaceholder.typicode.com/users/update', {
        method: 'PUT',
        headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(
        (result) => {
            alert(result['message'])
            if (result['status'] === 'ok') {
            window.location.href = '/';
            }
        }
        )
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
                        autoFocus
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