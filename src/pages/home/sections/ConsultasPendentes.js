import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const ConsultasPendentes = () => {
  

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
              Consultas Pendentes
            </Typography>
            <Typography variant="h2">
              20
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'orange',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <HourglassTopIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

