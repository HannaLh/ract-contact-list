import React, { useEffect } from "react";

import {
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    ButtonGroup,
    Box,
    Typography,
    styled
} from '@mui/material';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, deleteUser } from "../store/actions/usersActions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
    border: 0,
    },
}));

export default function Users() {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.dataUsers);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const createUser = () => {
        navigate('/create');
    }

    const handleDelete = id => {
        if (window.confirm('Do you want to remove?')) {
            dispatch(deleteUser(id));
        }
    }

    return (
        <div>
                <Paper>
                    <Box style={{margin: 30}} display="flex" >
                        <Box flexGrow={1} margin="30">
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                USERS
                            </Typography>
                        </Box>
                        <Box>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={createUser}>
                                    CREATE NEW USER
                            </Button>
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 1000 }} style={{marginTop: 10}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>ID</StyledTableCell>
                                    <StyledTableCell align="center">Email</StyledTableCell>
                                    <StyledTableCell align="center">Name</StyledTableCell>
                                    <StyledTableCell align="center">User Name</StyledTableCell>
                                    <StyledTableCell align="center">Website</StyledTableCell>
                                    <StyledTableCell align="center">Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users && users.map((user) => (
                                    <StyledTableRow key={user.ID}>
                                        <StyledTableCell component="th" scope="row">
                                            {user.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{user.email}</StyledTableCell>
                                        <StyledTableCell align="center">{user.name}</StyledTableCell>
                                        <StyledTableCell align="center">{user.username}</StyledTableCell>
                                        <StyledTableCell align="center">{user.website}</StyledTableCell>
                                        <StyledTableCell align="center">
                                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                <Button onClick={() => navigate(`/update/user/${user.id}`)}>Edit</Button>
                                                <Button onClick={() => handleDelete(user.id)}>Del</Button>
                                            </ButtonGroup>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
        </div>
    );
}