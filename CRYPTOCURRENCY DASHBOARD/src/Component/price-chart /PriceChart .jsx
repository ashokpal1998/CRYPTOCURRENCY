
import React from "react";
import { Line } from "react-chartjs-2";
import BaseCurrencyOptions from "./BaseCurrencyOptions";
import Dashbord from "./Dashbord";
import SearchBar from "./SearchBar";

const PriceChart  = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Auguat','Setember','Octbuer','Navmber','Deccember'],
        datasets: [
          {label: 'Sales',
                data: [10, 20, 30, 40, 50, 60, 70, 80],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',},]
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  
  return (
    <>
      <div className="price-chart">
        <BaseCurrencyOptions />
        <SearchBar />
      </div>
      <Dashbord />
      <Line data={data} options={options} />
    </>
  );
}
export default PriceChart; 