// import React from "react";

// const Card = ({ title, value, subtext, icon, trend }) => {
//   const trendColor = trend > 0 ? "text-green-500" : "text-red-500";

//   return (
//     <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 flex items-center">
//       <div className="text-3xl">{icon}</div>
//       <div className="ml-4">
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-2xl font-bold">{value}</p>
//         <p className="text-sm">
//           {subtext} <span className={`${trendColor} font-bold`}>{trend}%</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from "react";

const Card = ({ title, value, subtext, icon, trend }) => {
  const trendColor = trend > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-gray-800 w-[200px] text-white rounded-lg shadow-md p-4 flex items-center">
      <div className="text-3xl">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm">
          {subtext} <span className={`${trendColor} font-bold`}>{trend}%</span>
        </p>
      </div>
    </div>
  );
};

export default Card;