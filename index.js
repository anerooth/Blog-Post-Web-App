import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"))

const port = 3000;

const posts = new Map();

app.get("/",(req,res) =>{
    res.render("index.ejs");
})

app.get("/createPost",(req,res)=>{
    res.render("createPost.ejs");
})

app.get("/viewPosts",(req,res)=>{
    res.render("viewPosts.ejs",{curPosts:posts});
})

app.get("/deletePost",(req,res)=>{
    res.render("deletePost.ejs",{curPosts:posts});
})


app.post("/creatingPost",(req,res)=>{
    const postTitle = req.body.title;
    const postBody = req.body.content;

    posts.set(postTitle,postBody);

    res.redirect("/createPost");
})

app.post("/deletingPost",(req,res)=>{
    const postTitle = req.body.id;
    posts.delete(postTitle);

    res.redirect("/deletePost");
})

app.listen(port,()=>{
    console.log("server started on " + port);
    })