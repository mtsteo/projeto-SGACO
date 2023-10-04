import * as React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Button, Unstable_Grid2 as Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Home from "../../pages/home/Home";

export default function DashboardLayout() {
  const { user } = React.useContext(AuthContext);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        style={{ height: "100vh", position: "fixed" }}
        rootStyles={{
          [`.ps-sidebar-container`]: {
            background:
              "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: "#eee",
                  fontWeight:"500",
                  backgroundColor: active ? "#fff" : undefined,
                  "&:hover": {
                     backgroundColor: "#335B8C !important",
                     color: "white !important",
                     borderRadius: "8px !important",
                     fontWeight: "bold !important"
                   },
                };
              }
            },
          }}
        >
          <div style={{ margin: "10%" }}>
            <h2>Olá, Mateus</h2>
          </div>
          <MenuItem component={<Link to={"/inicio"}></Link>}>Inicio</MenuItem>
          <MenuItem component={<Link to={"/cadastro"}></Link>}>
            Cadastro
          </MenuItem>
          <MenuItem component={<Link to={"/consultasAgendadas"}></Link>}>
            Consultas Agendadas
          </MenuItem>
          <MenuItem component={<Link to={"/lancarVagas"}></Link>}>
            Lançar Vagas
          </MenuItem>
          <MenuItem component={<Link to={"/relatorios"}></Link>}>
            Relatórios
          </MenuItem>
          <MenuItem >
            sair
          </MenuItem>
          
        </Menu>
      </Sidebar>
      <Box sx={{ marginLeft: "250px" }}>
        <Outlet />
        <Home/>
      </Box>
    </div>
  );
}
