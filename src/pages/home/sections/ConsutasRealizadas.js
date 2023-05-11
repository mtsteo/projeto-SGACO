import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const ConsultasRealizadas = () => {
  

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
              Consultas Realizadas
            </Typography>
            <Typography variant="h2">
              15
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'green',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <AssignmentTurnedInIcon/> 
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

