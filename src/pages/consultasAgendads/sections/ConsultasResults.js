import { format } from "date-fns";
import EditIcon from "@mui/icons-material/Edit";
import { ConsultaItem } from "../../../components/ConsultaItem";
import { DataConsulta } from "../../../components/DataConsulta";
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

export const ConsultasResult = () => {
 

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
              <TableCell sx={{ fontWeight: 700 }}>MEDICO/ESPECIALISTA</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>TURNO</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>PROTOCOLO </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>STATUS </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                OPÇÕES
                <EditIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DataConsulta.map((consulta) => {
              return (
                <ConsultaItem consultas={consulta} />
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};
