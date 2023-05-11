import EventNoteIcon from '@mui/icons-material/EventNote';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const TotalConsultas = () => {
  

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
              Consultas Agendadas
            </Typography>
            <Typography variant="h2">
              35
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'blue',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <EventNoteIcon/>
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

