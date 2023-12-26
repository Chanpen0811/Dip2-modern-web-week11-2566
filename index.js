const express = require('express')
const app = express()

//http://localhost:3000/
app.get('/',(req,res)=>{
    res.send('Home Page')
})

//http://localhost:3000/about
app.get('/about',function (req,res) {
    res.send('About Page8')   
})

const port = 3000
app.listen(3000,function(){
    console.log(`Server running at http://localhost:${port}`);
});