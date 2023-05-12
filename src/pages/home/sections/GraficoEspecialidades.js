import Chart from "react-apexcharts";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

export const GraficoEspecialidades = () => {
  const series = [44, 55, 41, 17];

  const options = {
    labels: ["Dentista", "Cardiologista", "Otorrino", "Gastro"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position:'bottom'
    },
   
  };

  return (
    <Card sx={{height:"100%"}} >
      <Typography
        color="text.secondary"
        variant="overline"
        sx={{ margin: "5%" }}
      >
        Distribuição por Especialidades
      </Typography>
      <CardContent>
        <Chart
          
          options={options}
          series={series}
          type="donut"
          
        />
      </CardContent>
    </Card>
  );
};
