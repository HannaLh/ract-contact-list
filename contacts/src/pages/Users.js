import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const baseURL = 'https://jsonplaceholder.typicode.com/users';

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        UsersGet()
    }, [])

    const UsersGet = () => {
        fetch(`${baseURL}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result)
                }
            )
    }

    const UpdateUser = id => {
        window.location = '/update/'+id
    }

    const UserDelete = id => {
        const data = {
            'id': id
        }
        fetch('https://www.mecallapi.com/api/users/', {
                method: 'DELETE',
                headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(
            (result) => {
                alert('It was deleted');
                if (result.statusCode === 200){
                    setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
                }
            }
        )
    }

    return (
        <div>
                <Paper>
                    <Box display="flex">
                        <Box flexGrow={1} margin="30">
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                USERS
                            </Typography>
                        </Box>
                        <Box>
                            <Link to="/create">
                                <Button variant="contained" color="primary">
                                    CREATE
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">ID</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Username</TableCell>
                                    <TableCell align="left">Website</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.ID}>
                                        <TableCell align="right">{user.id}</TableCell>
                                        <TableCell align="left">{user.email}</TableCell>
                                        <TableCell align="left">{user.name}</TableCell>
                                        <TableCell align="left">{user.username}</TableCell>
                                        <TableCell align="left">{user.website}</TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                <Button onClick={() => UpdateUser(user.id)}>Edit</Button>
                                                <Button onClick={() => UserDelete(user.id)}>Del</Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
        </div>
    );
}