import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

// Configure New 🎱
dotenv.config();

// Database Config
connectDB();

// Rest Object 😄
const app = express();

// Middlewares 💯
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes :accept:
app.use("/api/v1/auth/", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api ☠️
app.get("/", (req, res) => {
  res.send("<h1>Application</h1>");
});

// Port 👍
const PORT = process.env.PORT || 8080;

// Run Listen
app.listen(PORT, () => {
  console.log(
    `Server Running On ${process.env.DEV_MODE} Mode On Port ${PORT}`.bgCyan
      .white
  );
});
