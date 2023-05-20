import { format } from "date-fns";
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
import { useState } from "react";

export const PacienteSection = () => {
 

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
            {Data.map((paciente) => {
              return (
                <PacienteItem paciente={paciente} />
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};
