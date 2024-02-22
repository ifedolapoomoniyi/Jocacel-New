const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/api/team");
const propertyRoutes = require("./routes/api/properties");
const connectDB = require("./config/db");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cors middleware
const corsOptions = {
	origin: true,
	optionsSuccessStatus: 200,
	credentials: true,
};

app.use(cors(corsOptions));

app.use("/", routes);
app.use("/api/team", routes);

app.use("/api/properties", propertyRoutes);

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
