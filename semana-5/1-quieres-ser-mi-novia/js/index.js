// alert('Hola mundo');
// let rodrigo = 26;
// console.log(rodrigo);
// let edad = 16;
// console.log('¿Es mayor de edad?');
// console.log((edad > 17)? 'Eres mayor de edad' : 'Eres menor de edad');

// const PI =3.141516;
// console.log(PI);
// const DAYS_WEEK = 7;
// console.log(DAYS_WEEK);

// let nombre = 'Rodrigo';
// let apellido = 'Aranda';
// console.log(nombre+' '+apellido); opcion 1
// console.log(`Nombre y Apellido: ${nombre},${apellido}`); opcion 2 y la mas utilizada

// const edad = 26;
// if (edad < 18) {
//     console.log(`Usted es menor de edad`);
// } else {
//     console.log(`Usted es mayor de edad`);
// }

// const numero1 = 8;
// const numero2 = 8;

// if(numero1>numero2){
//     console.log(`El numero1: ${numero1} es mayor`);
// } else if(numero2>numero1){
//     console.log(`El numero2: ${numero2} es mayor`)
// } else {
//     console.log(`El numero1: ${numero1} es igual al numero2: ${numero2}`);
// }

// const tabla = 2;
// console.log(`INICIO`);
// for (let i = 1; i <= 12; i++){
//     console.log(`${tabla} x ${i} = ${tabla * i}`);
// }
// console.log(`FIN`);

// let i = 1;
// do {
//     console.log(`${tabla} x ${i} = ${tabla * i}`);
//     i++;
// } while (i <= 12);

// while (i<=12) {
//     console.log(`${tabla} x ${i} = ${tabla * i}`);
//     i++;
// }

// const estofados = ['Cuy', 'Conejo', 'Gato', 'Camello'];

// for (let i in estofados) {
//     console.log(`Animal ${+i + 1}: ${estofados[i]}`);
// };

// for (let elemento of estofados) {
    //     console.log(`Estofados: ${elemento}`);
    // };
    
    // const persona = new Object(); no es la mejor opcion para crear objectos
    // persona.nombre = 'Rodrigo';
    // console.log(persona);

    // const perro1 ={                      la mejor opcion de crear objetos y la mas utilizada
//     nombre: 'Odin',
//     raza: 'Chusterman',
//     color: 'Crema y blanco',
//     fechaNacimiento: '23/01/2017',
//     edad: 5,
//     vacunado: true,
//     tamaño: 'Grande',
//     dueño: 'Rodrigo',
//     ladrar: function () {
//         return 'Guau Guau';
//     }
// };

// console.log(perro1);
// console.log(perro1.nombre);
// console.log(perro1['edad']);
// console.log(perro1.ladrar());

// CLASE
// function Perro(nombre, edad, raza, color, fechaNacimiento) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.raza = raza;
//     this.color = color;
//     this.fechaNacimiento = fechaNacimiento;
//     this.ladrar = function(){
//         return 'GUAU GUAU';
//     }
// }

// const perro1 = new Perro('Odin', 5, 'Chusterman', 'Crema y blanco', '23/01/2017')
// console.log(perro1);
// const perro2 = new Perro('Panda', 7, 'Chusterman', 'Blanco y marron', '23/01/2017')
// console.log(perro2);
// const perro3 = new Perro('Pardo', 1, 'Chusterman', 'Negro', '23/01/2017')
// console.log(perro3);

// Definiendo Clases

// class Perro {
//     constructor(nombre, edad, raza, color, fechaNacimiento){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.raza = raza;
//         this.color = color;
//         this.fechaNacimiento = fechaNacimiento;
//     }
    
//     ladrar(){
//         return 'GUAU GUAU';
//     }
// }

// const perro1 = new Perro('Odin', 5, 'Chusterman', 'Crema y blanco', '23/01/2017')
// console.log(perro1);
// const perro2 = new Perro('Panda', 7, 'Chusterman', 'Blanco y marron', '23/01/2017')
// console.log(perro2);
// const perro3 = new Perro('Pardo', 1, 'Chusterman', 'Negro', '23/01/2017')
// console.log(perro3);

// ARRAY

// const nombres = ['Rodrigo', 'Estefany', 'Mathias', 'Antonio', 'Regina']
// console.log(nombres);
// console.log(nombres[4]);

// const rodrigo = ['Rodrigo Aranda', 26, '18/02/1996', 'Computacion e informatica', true]
// console.log(rodrigo);

// const comidas =['Aji de Gallina', 'Tallarines Verdes', 'Arroz a la Cubana', 'chafufa'];
// console.log(comidas);
// console.log(comidas.push('Ceviche'));
// console.log(comidas);
// console.log(comidas.unshift('Pure de Papas'));
// console.log(comidas);
// console.log(comidas.pop());
// console.log(comidas);
// console.log(comidas.shift());
// console.log(comidas);
// console.log(comidas.unshift('Pollo a la brasa'));
// console.log(comidas);