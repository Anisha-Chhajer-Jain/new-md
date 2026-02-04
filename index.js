console.log("haha");
const express = require("express");

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

const app = express();

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// app.get("/user/test",(one,two)=>{
//     console.log(one);
//     two.status(200).json(users);
// })
app.get("/user/test/:user_id/:third",(req,res)=>{
    console.log(req.params);
    res.status(200).json(users);
})

app.get("/user/:test",(req,res)=>{
    console.log(req.params);
    console.log("first code")
    res.status(200).json(users);
})

app.get("/user/three",(req,res)=>{
    console.log(req.params);
    console.log("second code")
    res.status(200).json(users);
})

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});