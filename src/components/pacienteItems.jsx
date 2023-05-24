import React, { useState } from "react";
import ModalFicha from "./ModalFicha";
import VisibilityIcon from "@mui/icons-material/Visibility";
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



export default function PacienteItem(props) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <TableRow hover key="1">
            <TableCell padding="checkbox">
                <Checkbox />
            </TableCell>
            <TableCell>
                <Stack alignItems="center" direction="row" spacing={2}>
                    <Typography variant="subtitle2">
                        {props.paciente.nome}
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell>{props.paciente.cpf}</TableCell>
            <TableCell>{props.paciente.dataNasc}</TableCell>
            <TableCell>{props.paciente.dataNasc}</TableCell>

            <TableCell>
                <ModalFicha
                    isOpen={isOpen}
                    isClose={() => setIsOpen(false)}
                    data={props}
                />
                <Button
                    onClick={() => setIsOpen(true)}
                    endIcon={<VisibilityIcon />}
                >
                    {" "}
                    Ficha
                </Button>
            </TableCell>
        </TableRow>

    )

}