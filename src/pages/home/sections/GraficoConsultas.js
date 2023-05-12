import Chart from "react-apexcharts";
import { Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";

export const GraficoConsultas = () => {
  const series = [
    {
      name: "Quantidade de consultas",
      //Dados que virão do backend
      data: ["10", "20", "30", "40", "50", "40", "30", "20", "10", "5","25",'35'],
    },
  ];
  const options = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20px",
      },
    },
    stroke: {
      colors: ["transparent"],
      show: false,
      width: 2,
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      labels: {
        offsetY: 4,
        style: {
          colors: "blue",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? value : `${value}`),
        offsetX: -10,
        style: {
          colors: "blue",
        },
      },
    },
  };

  return (
    <Card sx={{ height: "100%" }}>
      <Typography
        color="text.secondary"
        variant="overline"
        sx={{ margin: "5%" }}
      >
        Atendimentos mensais
      </Typography>
      <CardContent>
        <Chart
          height={350}
          options={options}
          series={series}
          type="bar"
          width="100%"
        />
      </CardContent>
      <Divider />
    </Card>
  );
};
