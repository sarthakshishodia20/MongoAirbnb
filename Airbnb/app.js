
if(!process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
console.log(process.env.secret);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const listingRouter = require("./routes/listins"); // Ensure this file exports a valid router
const reviewRouter=require("./routes/review");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const userRouter = require("./routes/user"); // Ensure this file exports a valid router

// Session configuration
const sessionOptions = {
    secret: "mysecretCode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 17 * 24 * 60 * 60 * 1000,
        maxAge: 17 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};
app.use(session(sessionOptions));
app.use(flash());

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Database connection
const MongoURL = "mongodb://127.0.0.1:27017/WanderLust";
async function main() {
    try {
        await mongoose.connect(MongoURL);
        console.log("Connected to db");
    } catch (err) {
        console.log("Error in connection", err);
    }
}
main();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/", userRouter);

// 404 Route Handler
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("./listings/error.ejs", { err });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});