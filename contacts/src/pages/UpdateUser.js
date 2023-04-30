import { useState, useEffect  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    TextField,
    Grid,
    Typography,
    Container
} from '@mui/material';
import { getSingleUser, updateUser } from "../store/actions/usersActions";

export default function UserUpdate() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.dataUser);
    const {id} = useParams();

    const [form, setForm] = useState({
        email: "",
        name: "",
        username: "",
        website: "",
    });

    useEffect(() => {
        dispatch(getSingleUser(id));
    }, []);
    
    useEffect(() => {
        if (user) {
            setForm({...user});
        }
    }, [user])

    const handleInputChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateUser(form, id));
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
                                value={form.emal}
                                label="Email"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                value={form.name}
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
                                value={form.username}
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
                                value={form.website}
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
                                Update
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