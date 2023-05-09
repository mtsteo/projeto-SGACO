import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Stack, TextField, Card, Typography, Unstable_Grid2 as Grid } from '@mui/material';



export const LoginPage = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Deve ser um email válido')
        .max(255)
        .required('É necessário um email!'),
      password: Yup
        .string()
        .max(255)
        .required('É necessário uma senha!')
    }),
    onSubmit :( )=>{
      navigate('/home')
    }


  });

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        height: '100vh'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
          </Box>

          <Box
            sx={{
              backgroundColor: 'background.paper',
              flex: '1 1 auto',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                maxWidth: 400,
                px: 3,
                py: '100px',
                width: '100%',

              }}
            >
              <Card elevation={'5'} sx={{ padding: '5%' }}>
                <Stack
                  spacing={1}
                  sx={{ mb: 3, alignItems: 'center' }}
                >
                  <Typography variant="h4">
                    Login
                  </Typography>
                </Stack>
                <form
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <Stack spacing={2}>
                    <TextField
                      error={!!(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="Email"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                    />
                    <TextField
                      error={!!(formik.touched.password && formik.errors.password)}
                      fullWidth
                      helperText={formik.touched.password && formik.errors.password}
                      label="Senha"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.password}
                    />
                  </Stack>
                  {formik.errors.submit && (
                    <Typography
                      color="error"
                      sx={{ mt: 3 }}
                      variant="body2"
                    >
                      {formik.errors.submit}
                    </Typography>
                  )}
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                  >
                    Entrar
                  </Button>
                </form>
              </Card>
            </Box>
          </Box>

        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1
              }}
              variant="h1"
            >
              Bem Vindo ao{' '}
              <Box
                component="a"
                sx={{ color: '#15B79E' }}
                target="_blank"
              >
                SGACO
              </Box>
            </Typography>
            <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="h6"
              
            >
              Sistema de Gerenciamento e Agendamento de Consultas Online
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};