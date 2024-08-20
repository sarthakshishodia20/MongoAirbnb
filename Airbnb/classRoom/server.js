const express=require("express");
const app=express();
const users=require("./routes/user");
const posts=require("./routes/posts");
const cookieParser=require("cookie-parser");
const session=require("express-session");
const flash=require("connect-flash");
const path=require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions={
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
}
app.use(session(sessionOptions));
app.use(flash());


app.get("/register",(req,res)=>{
    let{name="anonymous"}=req.query;
    req.session.name=name;
    if(name=="anonymous"){
        req.flash("error","User not registered");
    }
    else{
        req.flash("success","User registerd successfully");
    }
    res.redirect("/hello");
})
app.get("/hello",(req,res)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    res.render("page",{name:req.session.name});
});


app.get("/reqCount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count=1;
    }
    res.send(`you request ${req.session.count} times`);
})
app.get("/test",(req,res)=>{
    res.send("Successfully tested");
})
// app.use(cookieParser("secretCode"));
// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("Hi I am root");
// })

// app.get("/getSignedCookies",(req,res)=>{
//     res.cookie("made-in","India",{signed:true});
//     res.send("SignedCookie Sent");
// })
// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("Verified");
// })


// app.get("/greet",(req,res)=>{
//     let{name="anonymous"}=req.cookies;
//     console.log(`Hi ${name}`);
//     res.send(`Hi ${name}`);
// })


// app.use("/users",users);
// app.use("/posts",posts);


app.get("/admin",(req,res)=>{
    res.send("Hi i am root admin");
})
// app.get("/getCookies",(req,res)=>{
//     res.cookie("namaste","India");
//     res.cookie("Hello","Abhinav");
//     res.send("Some cookies sent to You");
// })
app.listen(3000,()=>{
    console.log("Server is listening to 3000");
});




