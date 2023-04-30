import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    Button,
    TextField,
    Grid,
    Typography,
    Container
} from '@mui/material';
import { addUser } from "../store/actions/usersActions";

export default function UserCreate() {
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        email: "",
        name: "",
        username: "",
        website: "",
    });

    const handleInputChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser(form));
        navigate("/");
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
                                name="email"
                                label="Email" 
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="website"
                                label="Website"
                                onChange={handleInputChange}
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