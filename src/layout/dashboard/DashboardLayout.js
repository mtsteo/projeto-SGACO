import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar'
import { Box, Button, Unstable_Grid2 as Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';





export default function DashboardLayout() {


    return (
        <div style={{ display: "flex" }}>

            <Sidebar style={{ height: '100vh', position:'fixed' }}
                rootStyles={{
                    [`.ps-sidebar-container`]: {
                        background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
                        color: 'white'
                    },
                }}
            >
                <Menu unselectable=''>
                    <div style={{ marginTop: "10%" }}>
                        <h2>Olá, {'Mateus'} </h2>
                    </div>
                    <MenuItem component={<Link to={'/inicio'}></Link>}>Inicio</MenuItem>
                    <MenuItem component={<Link to={'/cadastro'}></Link>}> Cadastro </MenuItem>
                    <MenuItem component={<Link to={'/consultasAgendadas'}></Link>}>Consultas Agendadas</MenuItem>
                    <MenuItem component={<Link to={'/lancarVagas'}></Link>}>Lançar Vagas</MenuItem>
                    <MenuItem component={<Link to={'/relatorios'}></Link>}>Relatórios</MenuItem>
                </Menu>
            </Sidebar>
            <Box sx={{marginLeft:'250px'}}>
                <Outlet />
            </Box>
        </div>

    );
}