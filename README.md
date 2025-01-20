# 🌟 CAPX - Trading Platform 🌟

The **CapX** is a user-friendly trading platform designed for efficient stock management. Users can seamlessly perform CRUD operations—add, update, retrieve, and delete stocks. With an intuitive interface and streamlined functionality, CapX empowers traders to manage their portfolios effectively, stay updated, and make informed decisions. Perfect for beginners and experts alike, CapX simplifies trading and portfolio management.

---

<h2 style="text-align: center; background-color: #0099ff; color: white; padding: 10px; border-radius: 5px;">CLIENT</h2>

#### **🌐 Live Link**

[![Live Website](https://img.shields.io/badge/Live_Link-0099ff?style=for-the-badge&logo=googlecloud&logoColor=white)](https://capx-7oin.onrender.com)

### **Features**

- 🛠️ Perform **CRUD operations** for managing stocks seamlessly.
- 💱 Fetch custom **currency exchange rates** in real-time.
- 🔍 Monitor **server health status** and uptime with ease.
- 🎉 Welcome endpoint for seamless onboarding.
- 💡 Designed with a focus on **user experience** and performance.
- 📊 Interactive and visually appealing charts using **React ApexCharts**.
- 🛡️ Comprehensive API responses with **clear error handling**.
- 🌐 Real-time data updates with a **responsive and better UI**.

---

### 🧰 **Tech Stack**

- ⚡ **React Vite**: Lightning-fast development environment.
- 🛠️ **Redux Toolkit**: Simplified and efficient state management.
- 🌐 **Axios**: Easy HTTP requests and API integration.
- 🎨 **Tailwind CSS**: Utility-first styling for modern UI.
- ⏳ **React Spinners**: Elegant loading indicators.
- 🔧 **React Icons**: Extensive library of customizable icons.
- 📊 **React ApexCharts**: Interactive charts for data visualization.
- 🗺️ **React Router DOM**: Intuitive routing for a single-page application.
- 🖼️ **Lucide React**: Beautiful and lightweight icons.

---


<h2 style="text-align: center; background-color: #ff6600; color: white; padding: 10px; border-radius: 5px;">SERVER</h2>

#### **🌐 Deployed Link**

[![Deployed Link](https://img.shields.io/badge/Deployed_Link-0099ff?style=for-the-badge&logo=googlecloud&logoColor=white)](https://capx-server.onrender.com)

#### **🌐 Postman API Collection**

## [![Postman Collection](https://img.shields.io/badge/Postman_API_Collection-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/33969186/2sAYQZJXtg)

## **Features**

- Perform **CRUD operations** for managing stocks.
- Fetch custom currency exchange rates.
- Monitor **server health status** and uptime.
- Welcome endpoint for seamless onboarding.
- Designed with a focus on **user experience** and performance.
- Comprehensive API responses with **clear error handling**.

## **Tech Stack Used**

This project utilizes the following technologies and tools:

- ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) **Java**: Core language for building the backend.
- ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white) **Spring Boot**: Framework for creating RESTful APIs.
- ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) **MySQL**: Database for storing and managing stock data.
- ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) **Postman**: For API testing and documentation.
- ![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white) **Maven**: Dependency management and project build.
- ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) **Git**: Version control for project collaboration.

---

### **Database Schema Image**

<img width="500px;" height="450px" src="https://res.cloudinary.com/cloud-alpha/image/upload/v1737049661/Common/capx_schema_diagram_nhuioi.png"/>

---

### **API Endpoints**

#### **App**

| **Methods** | **Endpoint**      | **Description**                                                                              |
| ----------- | ----------------- | -------------------------------------------------------------------------------------------- |
| GET         | `/api/v1/health`  | Checks the server's health status, providing uptime, current date, time, and status details. |
| GET         | `/api/v1/welcome` | Provides a welcome message for users accessing the CAPX Trading Platform backend API.        |

---

#### **Stocks**

| **Methods** | **Endpoint**             | **Description**                                                                           |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| POST        | `/api/v1/stocks`         | Adds new stocks to the portfolio, ensuring accurate tracking and management.              |
| GET         | `/api/v1/stocks`         | Retrieves information about all stocks, including prices, performance, and market trends. |
| PUT         | `/api/v1/stocks/:id`     | Updates details of a specific stock using its ID to keep records accurate.                |
| DELETE      | `/api/v1/stocks/:id`     | Removes a specific stock from the portfolio using its ID.                                 |
| GET         | `/api/v1/stocks/summary` | Provides an overview of stock performance with metrics like price, volume, and trends.    |
| GET         | `/api/v1/stocks/:id`     | Retrieves detailed information about a stock using its unique stock ID.                   |

---

#### **Stocks Data**

| **Methods** | **Endpoint**                       | **Query Parameters**                                            | **Description**                                                             |
| ----------- | ---------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| GET         | `/api/v1/crypto/daily-stock-price` | `from` (e.g., BTC), `to` (e.g., USD), `date` (e.g., 2023-01-09) | Fetches daily stock price fluctuations for a specific trading day.          |
| GET         | `/api/v1/stocks/data`              | `symbol` (e.g., IBM), `interval` (e.g., 5min)                   | Retrieves real-time stock data for a symbol at specified intervals.         |
| GET         | `/api/v1/currency/rate`            | `curr` (e.g., KWD)                                              | Fetches the latest exchange rates for the specified currency.               |
| GET         | `/api/v1/currency/rate/custom`     | `from` (e.g., BTC), `to` (e.g., USD)                            | Retrieves custom exchange rates for specified currencies, e.g., BTC to USD. |

---

### 🛠️ **Setup Instructions**
To set up the project client side, follow these steps:
1. Clone the repository from GitHub: `git clone https://github.com/raushan-kumar7/capx.git`
2. Navigate to the project directory: `cd client`
3. Install dependencies using Maven: `npm install`
4. Open the app in your browser at `http://localhost:5173`.

---

To set up the project server side, follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/raushan-kumar7/capx.git`
2. Navigate to the project directory: `cd server`
3. Install dependencies using Maven: `mvn clean install`
4. Run the application: `mvn spring-boot:run`
5. Access the application at `http://localhost:8080`

---

## **🔮 Future Enhancements**

- 📈 Implement real-time stock updates with live market data integration.
- 🔐 Add robust user authentication and authorization system.
- 📊 Introduce comprehensive analytics and reporting features with interactive dashboards.
- 💱 Enhance currency conversion capabilities with multi-currency support and historical rates.

---

### 💬 **Feedback**

If you have any feedback or suggestions, feel free to open an issue or submit a pull request. Contributions are always welcome!

---

### 📄 **License**

This project is licensed under the MIT License.

---

### 🧑‍💻 **Author**

Developed with ❤️ by **[Raushan](https://github.com/raushan-kumar7)** | **[Portfolio](https://raushan-kumar.onrender.com)**.