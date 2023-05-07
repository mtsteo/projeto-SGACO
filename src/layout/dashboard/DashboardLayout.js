import * as React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, Unstable_Grid2 as Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';





export default function DashboardLayout() {


    return (
        <div style={{display:"flex"}}>

            <Sidebar style={{ height: '100vh' }}
                rootStyles={{
                    [`.ps-sidebar-container`]: {
                      background:'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
                      color:'white'
                    },
                  }}
            >
                <Menu>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </Menu>
            </Sidebar>
            <Box>
                <Outlet/>
            </Box>
        </div>

    );
}