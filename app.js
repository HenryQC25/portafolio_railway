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

app.get('*', (req, res) => {
  res.render('404')
});

app.listen(port,()=>{
    console.log(`ejemplo listen ${port}`);
})