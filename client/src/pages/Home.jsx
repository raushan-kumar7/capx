import React from "react";
import ChartCard from "../components/ChatCard";
import Card from "../components/Card";
import StockData from "../components/Stock/StockData";
import DailyStockGraph from "../components/Stock/DailyStockGraph";

const Home = () => {
  const barChartOptions = {
    chart: { background: "transparent", toolbar: { show: false } },
    colors: ["#1abc9c", "#f39c12", "#3498db"],
    xaxis: {
      categories: [
        "Oct 2019",
        "Nov 2019",
        "Dec 2019",
        "Jan 2020",
        "Feb 2020",
        "Mar 2020",
      ],
    },
    plotOptions: { bar: { columnWidth: "50%" } },
  };

  const barChartSeries = [
    { name: "Income", data: [1500, 2000, 3000, 4000, 4500, 5000] },
    { name: "Expense", data: [1200, 1800, 2800, 3500, 4200, 4700] },
  ];

  const pieChartOptions = {
    labels: ["BTC", "USD", "BNB", "ETN", "Others"],
    colors: ["#f39c12", "#1abc9c", "#3498db", "#9b59b6", "#95a5a6"],
    legend: { position: "bottom" },
  };

  const pieChartSeries = [3.33, 9.98, 31.9, 0, 10.89];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 md:col-span-2 lg:col-span-4">
        <div className="ml-32 flex justify-between gap-12">
          <Card
            title="USD"
            value="$3,124"
            subtext="$34.56"
            trend={3.1}
            icon="💵"
          />
          <Card
            title="EUR"
            value="€4,038"
            subtext="$81.59"
            trend={-5.9}
            icon="💶"
          />
          <Card
            title="BTC"
            value="6,023.94"
            subtext="$5,376.56"
            trend={2.8}
            icon="₿"
          />
          <Card
            title="ETH"
            value="4,432.08"
            subtext="$184.56"
            trend={4.2}
            icon="Ξ"
          />
        </div>
      </div>

      {/* Stock Data */}
      <div className="w-full mt-6 md:col-span-2 lg:col-span-4">
        <StockData />
      </div>

      {/* Charts */}
      <div className="md:col-span-2 lg:col-span-2">
        <DailyStockGraph/>
      </div>
      <div className="md:col-span-2 lg:col-span-2">
        <ChartCard
          title="Balance Details"
          chartOptions={pieChartOptions}
          chartSeries={pieChartSeries}
          type="donut"
        />
      </div>
    </div>
  );
};

export default Home;
