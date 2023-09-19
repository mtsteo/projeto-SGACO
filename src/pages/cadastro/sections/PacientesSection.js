import EditIcon from "@mui/icons-material/Edit";
import PacienteItem from "../../../components/pacienteItems";
import { Data } from "../../../components/Data";
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useEffect } from "react";

export const PacienteSection = () => {
  const [users, setUsers] = useState([]);
  const { getusers } = useContext(AuthContext);

  async function getAll() {
    const a = await getusers();
    setUsers(a)
  }


  useEffect(() => {
    getAll();
  }, []);

  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>NOME DO PACIENTE</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>CPF</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>DATA NASCIMENTO</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>EMAIL</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                OPÇÕES
                <EditIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((paciente) => {
              return <PacienteItem key ={paciente.CPF} paciente={paciente} />;
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};
