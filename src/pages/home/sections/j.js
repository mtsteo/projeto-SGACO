const options = {
  chart: {
    background: "transparent",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['red'],
  dataLabels: {
    enabled: false,
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
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      columnWidth: "40px",
    },
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      offsetY: 5,
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
  yaxis: {
    labels: {
      formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
      offsetX: -10,
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
};
