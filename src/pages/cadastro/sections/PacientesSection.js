import { format } from "date-fns";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import ModalFicha from "../../../components/ModalFicha";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const PacienteSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClose, setIsClose] = useState(false)

  const pacientes = [
    {
      nome: "MATEUS",
      sobrenome: "TEOTONHO EUFRASIO",
      cpf: "15804588745",
      email:'mateusteotonho@gmail.com',
      endereco: "TV. VIRGILHO AGUIAR",
      telefone: "91985478769",
      dataNasc: "03/02/1995",
    },
  ];

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
              <TableCell sx={{ fontWeight: 700 }}>TELEFONE</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                OPÇÕES
                <EditIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pacientes.map((paciente) => {
              return (
                <TableRow hover key="1">
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <Typography variant="subtitle2">
                        {paciente.nome}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{paciente.cpf}</TableCell>
                  <TableCell>{paciente.dataNasc}</TableCell>
                  <TableCell>{paciente.telefone}</TableCell>
                  <TableCell>
                    <ModalFicha isOpen={isOpen} isClose={()=>setIsOpen(false)} data={{paciente}}/>
                    <Button onClick={()=>setIsOpen(true)} endIcon={<VisibilityIcon />}> Ficha</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};
