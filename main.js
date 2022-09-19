class Suplemento{
    constructor(nombre,precio,peso,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.peso = peso;
        this.cantidad = cantidad
    }
}

const creatina = new Suplemento("Creatina",5000,"150g",10);
const proteina = new Suplemento("Proteína",2500,"1kg",5);
const preWorkout = new Suplemento("Pre-entreno",3500,"200g",0);
const massGainer = new Suplemento("Ganador de masa",2000,"1.2kg",3);

let nombre = prompt("Bienvenido, ingrese su nombre: ")

const inventarioDeProductos = [];
inventarioDeProductos.push(massGainer);
inventarioDeProductos.push(proteina);
inventarioDeProductos.push(preWorkout);
inventarioDeProductos.push(creatina);

const contenedorSuplementos = document.getElementById("contenedorSuplementos");

inventarioDeProductos.forEach(suplemento => {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                    <p>Viene en un pote de ${suplemento.peso}.</p>
                    <p>Tiene un precio de $${suplemento.precio} </p>
                    <p>Quedan ${suplemento.cantidad} unidades.</p>
                    <button class="btnCompra">Agregar al Carrito</button>`
    contenedorSuplementos.appendChild(contenedor);
})

const mensaje = document.getElementById("mensaje");
mensaje.innerText = `¡Bienvenido ${nombre}, espero que tengas buen día! `
