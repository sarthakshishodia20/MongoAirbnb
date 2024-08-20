const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing");
const { reviewSchema } = require("../schema");
const isLoggedIn = require("../middleware");
const reviewController=require("../controllers/review");

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(errMsg, 400);
    } else {
        next();
    }
};

// const createReview =;

router.post("/",validateReview, wrapAsync(reviewController.createReview));

router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));

module.exports=router;