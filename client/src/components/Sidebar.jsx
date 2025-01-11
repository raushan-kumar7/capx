// // import React from "react";
// // import { FaHome, FaWallet, FaExchangeAlt, FaCog, FaTimes } from "react-icons/fa";
// // import { MdDashboardCustomize } from "react-icons/md";

// // const Sidebar = ({ closeSidebar }) => {
// //   return (
// //     <div className="h-full relative z-50">
// //       {/* Close Button for Mobile View */}
// //       <button
// //         onClick={closeSidebar}
// //         className="absolute top-2 right-2 text-white text-2xl focus:outline-none md:hidden"
// //       >
// //         <FaTimes />
// //       </button>

// //       {/* Sidebar Title */}
// //       <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
// //         Dashboard <MdDashboardCustomize />
// //       </h2>

// //       {/* Sidebar Menu */}
// //       <ul className="space-y-3">
// //         <li
// //           className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
// //           onClick={closeSidebar}
// //         >
// //           <FaHome className="mr-2" /> Dashboard
// //         </li>
// //         <li
// //           className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
// //           onClick={closeSidebar}
// //         >
// //           <FaWallet className="mr-2" /> Portfolio
// //         </li>
// //         <li
// //           className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
// //           onClick={closeSidebar}
// //         >
// //           <FaExchangeAlt className="mr-2" /> Transactions
// //         </li>
// //         <li
// //           className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
// //           onClick={closeSidebar}
// //         >
// //           <FaCog className="mr-2" /> Settings
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import React from "react";
// import { FaHome, FaWallet, FaExchangeAlt, FaCog, FaTimes } from "react-icons/fa";
// import { MdDashboardCustomize } from "react-icons/md";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Sidebar = ({ closeSidebar }) => {
//   return (
//     <div className="h-full relative z-50">
//       {/* Close Button for Mobile View */}
//       <button
//         onClick={closeSidebar}
//         className="absolute top-2 right-2 text-white text-2xl focus:outline-none md:hidden"
//       >
//         <FaTimes />
//       </button>

//       {/* Sidebar Title */}
//       <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center">
//         Dashboard <MdDashboardCustomize />
//       </h2>

//       {/* Sidebar Menu */}
//       <ul className="space-y-3">
//         <li
//           className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
//           onClick={closeSidebar}
//         >
//           <Link to="/dashboard" className="flex items-center">
//             <FaHome className="mr-2" /> Dashboard
//           </Link>
//         </li>
//         <li
//           className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
//           onClick={closeSidebar}
//         >
//           <Link to="/portfolio" className="flex items-center">
//             <FaWallet className="mr-2" /> Portfolio
//           </Link>
//         </li>
//         <li
//           className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
//           onClick={closeSidebar}
//         >
//           <FaExchangeAlt className="mr-2" /> Transactions
//         </li>
//         <li
//           className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer"
//           onClick={closeSidebar}
//         >
//           <FaCog className="mr-2" /> Settings
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { FaHome, FaWallet, FaExchangeAlt, FaCog, FaTimes } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="h-full relative z-50 bg-gray-950 text-white">
      {/* Close Button for Mobile View */}
      <button
        onClick={closeSidebar}
        className="absolute top-2 right-2 text-white text-2xl focus:outline-none md:hidden"
      >
        <FaTimes />
      </button>

      {/* Sidebar Title */}
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 justify-center border-b border-gray-700 pb-4">
        Dashboard <MdDashboardCustomize />
      </h2>

      {/* Sidebar Menu */}
      <ul className="space-y-4">
        <li
          className="hover:bg-gray-800 p-3 rounded transition duration-200"
          onClick={closeSidebar}
        >
          <Link to="/dashboard" className="flex items-center">
            <FaHome className="mr-3" /> Dashboard
          </Link>
        </li>
        <li
          className="hover:bg-gray-800 p-3 rounded transition duration-200"
          onClick={closeSidebar}
        >
          <Link to="/portfolio" className="flex items-center">
            <FaWallet className="mr-3" /> Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;