import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function UserCreate() {
  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      'email': email,
      'name': name,
      'username': username,
      'website': website,
    }
    fetch('https://jsonplaceholder.typicode.com/users/create', {
      method: 'POST',
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

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
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
                    onChange={(e) => setWebsite(e.target.value)}
                />
                </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Create
            </Button>
            <Button
                type="cancel"
                fullWidth
                variant="contained"
                color="primary"
            >
                Cancel
            </Button>
            </Grid>
            </form>
        </div>
    </Container>
  );
}