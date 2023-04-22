import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function UserCreate() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [website, setWebsite] = useState('');
    // const[active,activechange]=useState(true);
    // const[validation,valchange]=useState(false);

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
      const userData={email,name,username,website};
      
  
      fetch("http://localhost:3000/users/",{
        method:"POST",
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

                  <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                            Create
                        </Button>
                        <Button 
                            variant="outlined" 
                            color="error"
                            href="/"
                        >
                            Cancel
                        </Button>
                  </Grid>
              </Grid>
              </form>
          </div>
      </Container>
    );
}