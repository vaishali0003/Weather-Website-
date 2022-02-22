const express=require('express');
const exphbs=require('express-handlebars');
const port=process.env.PORT || 5001;

const path=require('path');
const app=express();


app.set('view engine','handlebars');
app.engine('handlebars',exphbs.engine());


app.use(express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('*',(req,res)=>{
    res.render('404error');
})
app.listen(port,()=>{
    console.log('listening...');
})

