import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const ConsultasCanceladas = () => {
  

  return (
    <Card sx={{height:'100%'}}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Consultas Canceladas
            </Typography>
            <Typography variant="h2">
              5
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <CancelIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

