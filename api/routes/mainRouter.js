const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/users", (req,res)=>{
    res.status(200).send("Todo ok")
});

mainRouter.get("/users/:id", (req,res)=>{
    console.log("PARAMS", req.params);
    const {id} = req.params;
    res.status(200).send(`Usuario con id: ${id}`)
});
mainRouter.post("/users", (req,res)=>{
    res.status(201).send("Usuario creado correctamente")
})


module.exports = mainRouter;