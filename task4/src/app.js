const express = require("express");
const hbs = require("hbs");
const path = require("path");

const PORT = 3000;

const app = express();

app.set("view engine", "hbs");

const publicDir = path.join(__dirname, "../public");
app.use(express.static(publicDir));
const viewsDir = path.join(__dirname, "../frontend/views");
app.set("views", viewsDir);
const partialsDir = path.join(__dirname, "../frontend/partials");
hbs.registerPartials(partialsDir);

const  Customers = [];

app.get("/addCustomer", (req, res) => {
    if (req.query.title && req.query.body) {
        Customer = {
            title: req.query.title,
            body: req.query.body,
        };
        Customers.push( Customer);
        res.redirect("/allCustomers");
    }
    res.render("addCustomer");
});
app.get("/allCustomers", (req, res) => {
    res.render("allCustomers", { 
        pageName: "All Customers",
        Customers:  Customers,
    });
});
app.get("/allCustomers/:id", (req, res) => {
    const id = req.params.id; 
    console.log(id);
    Customers.splice(id, 1);
    res.redirect("/allCustomers");
});
app.listen(PORT);