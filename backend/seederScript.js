//to connect to our database
require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data Import");
        process.exit(1);
    }
};

importData();