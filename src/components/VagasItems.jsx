import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
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



export default function VagasItems(props) {
    const [isOpen, setIsOpen] = useState(false)
    console.log(props.del)
    console.log(props.Vagas)

    return (
        <TableRow hover key="1">
            <TableCell padding="checkbox">
                <Checkbox />
            </TableCell>
            <TableCell>
                <Stack alignItems="center" direction="row" spacing={2}>
                    <Typography variant="subtitle2">
                        {props.Vagas.especialista}
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell>{props.Vagas.data}</TableCell>
            <TableCell>{props.Vagas.turno}</TableCell>
            <TableCell>{props.Vagas.vagas}</TableCell>

            <TableCell>
                {/* <ModalFicha
                    isOpen={isOpen}
                    isClose={() => setIsOpen(false)}
                    data={props}
                /> */}
                <Button
                    onClick={() => props.del(props.id)}
                    endIcon={<DeleteForeverIcon fontSize="large" />}
                >
                    {" "}
                    Excluir
                </Button>
            </TableCell>
        </TableRow>

    )

}