import { useState, useCallback, Image } from 'react';
import {
    Box,
    Container,
    Stack,
    Card,
    Button,
    CardActions,
    CardContent,
    Divider,
    TextField,
    Typography,
    Unstable_Grid2 as Grid,
} from '@mui/material/';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    borderRadius: "14px",
    boxShadow: 24,
    p: 4,
};

export default function ModalFicha(props) {
    const [values, setValues] = useState({
        firstName: props.data.paciente.nome,
        lastName: "",
        email: "",
        phone: "",
        cpf: "",
        Adress: "",
        DataNasc: "",
    });

    const handleChange = useCallback(
        (event) => {
            const { name, value } = event.target;
            setValues((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        },
        [values]
    );

    const handleSubmit = () => {
        // cadastrar(values);
    };


    return (
        <div>
            <Modal
                open={props.isOpen}
                onClose={props.isClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                    <Box
                        style={style}
                        component="main"
                        sx={{
                            flexGrow: 1,
                            py: 8
                        }}
                    >
                        <Container sx={style}>
                            <Stack spacing={3}>
                                <div>
                                    <Typography variant="h4">
                                        Ficha do Paciente
                                    </Typography>
                                </div>
                                <div>
                                    <Grid
                                        container
                                        spacing={3}
                                    >
                                        <Grid
                                            xs={12}
                                            md={6}
                                            lg={4}
                                        >
                                            <Card sx={{ width: '15rem' }}>
                                                <img src='https://cdn-icons-png.flaticon.com/256/4825/4825096.png' width={150}>
                                                </img>
                                            </Card>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            md={6}
                                            lg={8}
                                        >
                                            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                                                <Card>
                                                    <CardContent sx={{ pt: 0 }}>
                                                        <Box sx={{ mt: '2%' }}>
                                                            <Grid container spacing={3}>
                                                                <Grid xs={12} md={6}>
                                                                    <TextField
                                                                        fullWidth
                                                                        label="Nome"
                                                                        name="firstName"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={values.firstName}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12} md={6}>
                                                                    <TextField
                                                                        fullWidth
                                                                        label="Sobrenome"
                                                                        name="lastName"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={values.lastName}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12} md={6}>
                                                                    <TextField
                                                                        fullWidth
                                                                        label="Email do paciente"
                                                                        name="email"
                                                                        onChange={handleChange}
                                                                        value={values.email}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12} md={6}>
                                                                    <TextField
                                                                        fullWidth
                                                                        label="Número de telefone"
                                                                        name="phone"
                                                                        required
                                                                        onChange={handleChange}
                                                                        value={values.phone}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12} md={6}>
                                                                    <TextField
                                                                        fullWidth
                                                                        label="Endereço"
                                                                        name="Adress"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={values.Adress}
                                                                    />
                                                                </Grid>
                                                                <Grid xs={12} md={6}>
                                                                    <TextField
                                                                        fullWidth
                                                                        label="Digite o CPF do paciente"
                                                                        name="cpf"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={values.cpf}
                                                                    ></TextField>
                                                                </Grid>
                                                                <Grid xs={12} md={6}>
                                                                    <Typography>Data de Nascimento</Typography>
                                                                    <TextField
                                                                        fullWidth
                                                                        name="DataNasc"
                                                                        onChange={handleChange}
                                                                        type="Date"
                                                                        required
                                                                        value={values.DataNasc}
                                                                    ></TextField>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </CardContent>
                                                    <Divider />
                                                    <CardActions sx={{ justifyContent: "flex-end" }}>
                                                        <Button onClick={handleSubmit} variant="contained">
                                                            Cadastrar Paciente
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                            </form>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Stack>
                        </Container>
                    </Box>
            </Modal>
        </div>
    );
}