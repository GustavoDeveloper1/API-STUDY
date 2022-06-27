const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));


//PEGANDO OS DADOS COM O GET 

app.get('/', (req, res) => {
    res.json({ message: 'primeira rota criada' })
    // res.send("ta rodando")
})


app.listen(3000,()=>{
    console.log("TA FUNCIONANDO!")
})



