// setInterval(function(){
//     console.log('Este es un setInterval')
// },3000)
// setTimeout(function () { 
//     console.log('Ejecutando un SetTimeout') 
// }, 3000)

// console.log('Despues del setTimeout')
// console.log('Hola como estan')
// console.log('Este es un dia lindo')

setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 5000);


























// console.log('Estoy después del Settimeout')

// setInterval(()=>{
//     console.log('Ejecutando setInterval')
// },1000)

// console.log('Codigo Sincrono');
//     console.log('Inicio');

//     function dos() {
//         console.log('Dos');
//     }

//     function uno() {
//         console.log('Uno');
//         dos();
//         console.log('Tres');
//     }

//     uno();
//     console.log('Fin');


// console.log('Codigo Asincrono');
// console.log('Inicio');

// function dos() {
//     setTimeout(function () {
//         console.log('Dos');
//     }, 1000)
// }

// function uno() {
//     setTimeout(function () {
//         console.log('Uno');
//     }, 0)
//     dos();
//     console.log('Tres');
// }

// uno();
// console.log('Fin')
