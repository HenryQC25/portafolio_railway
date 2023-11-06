const express = require('express')
const hbs=require('hbs') //agregamos hbs
require('dotenv').config();//agregamos configuracion dotenv
const app = express()
const port = process.env.PORT //configuramos el puerto

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine','hbs')

//uso de parciales "codigo que se repite en ,as de un lugar o paginas web"
//agregamos partials
hbs.registerPartials(__dirname +'/views/partials')

//contenido estatico donde esta template
app.use(express.static('public'))


app.get('/',(req,res)=>{
   res.render('index',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})

app.get('/bio',(req,res)=>{
  res.render('bio',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})


//app get para habilitar rutas
app.get('/contacto',(req,res)=>{
    res.render('contacto',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})

app.get('/habilidades',(req,res)=>{
    res.render('habilidades',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})

app.get('/proyectos',(req,res)=>{
    res.render('proyectos',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyectos/proyecto1',(req,res)=>{
    res.render('proyecto1',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto2',(req,res)=>{
    res.render('proyecto2',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto3',(req,res)=>{
    res.render('proyecto3',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto4',(req,res)=>{
    res.render('proyecto4',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto5',(req,res)=>{
    res.render('proyecto5',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto6',(req,res)=>{
    res.render('proyecto6',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto7',(req,res)=>{
    res.render('proyecto7',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto8',(req,res)=>{
    res.render('proyecto8',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto9',(req,res)=>{
    res.render('proyecto9',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})
app.get('/proyecto10',(req,res)=>{
    res.render('proyecto10',{
    nombre: 'Henry Quenun',
    titulo: 'Portafolio'
   });
})


app.get('/*', (req, res) => {
  res.render('404')
});

app.listen(port,()=>{
    console.log(`ejemplo listen ${port}`);
})