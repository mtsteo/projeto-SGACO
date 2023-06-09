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
import { set } from "date-fns";

export const ConsultaItem = (props) => {
    const [isOpen, setIsOpen] = useState(false)



    return (
        <TableRow hover key="1">
            <TableCell padding="checkbox">
                <Checkbox />
            </TableCell>
            <TableCell>
                <Stack alignItems="center" direction="row" spacing={2}>
                    <Typography variant="subtitle2">
                        {props.consultas.nomePaciente + ' ' + props.consultas.SobrenomePaciente}
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell>{props.consultas.NomeMedico}</TableCell>
            <TableCell>{props.consultas.Turno}</TableCell>
            <TableCell>{props.consultas.protocolo}</TableCell>
            <TableCell>
                <Typography sx={{
                    backgroundColor: props.consultas.Status == 1 ? 'green' :
                        props.consultas.Status == 2 ? "orange" : "red"
                    , color: 'white'
                }}
                >
                    {
                        props.consultas.Status == 1 ?
                            "REALIZADO" : props.consultas.Status == 2 ?
                                "PENDENTE" : "CANCELADO"
                    }

                </Typography>
            </TableCell>


            <TableCell>
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