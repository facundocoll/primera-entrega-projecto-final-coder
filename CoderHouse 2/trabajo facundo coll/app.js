const productos = [
    {producto: "Lavandina", precio: 200},
    {producto: "Detergente", precio: 70},
    {producto: "Desengrasante", precio: 120},
    {producto: "Escoba", precio: 150},
    {producto: "Desodorante", precio: 80},
]

let carrito = []

let usuario = prompt("Ingrese su nombre")

let eleccion = prompt(`Buenos dias ${usuario}, desea comprar en la quimica si o no?`)

while(eleccion != "si" && eleccion != "no") {
alert("por favor ingrese si o no")
eleccion = prompt("desea comprar algo si o no")
}

if (eleccion == "si") {
    alert("a continuacion vera la lista de productos")
    let listadeproductos = productos.map(
        (producto) => producto.producto + " $" + producto.precio
        );
    alert(listadeproductos.join(" // "))
}
else if (eleccion == "no") {
    alert("gracias, vuelva prontos...")
}

while(eleccion != "no"){
let producto = prompt(`${usuario} agrega un producto a tu carrito!`)
let precio = 0

if (producto == "lavandina" || producto == "detergente" || producto == "desengrasante" || producto == "escoba" 
|| producto == "desodorante") {

    switch(producto) {
        
        case "lavandina":
            precio = 200
            break

        case "detergente":
            precio = 70
            break
        
        case "desengrasante":
            precio = 120
            break
        
        case "escoba":
            precio = 150
            break
        
        case "desodorante":
            precio = 80
            break              
        default:
            break        
    }
    let cantidad = parseInt(prompt("cuantas unidades desea llevar?"))
    
    carrito.push({producto, cantidad, precio})

}else {
        alert("no tenemos ese producto")
    }
    
    eleccion = prompt(`${usuario} desea seguir comprando?`)

    while (eleccion === "no")
    carrito.forEach((carritofinal) => {
        alert(`gracias por la compra ${usuario}
        su carrito es el siguiente:

        producto: ${carritofinal.producto}
        unidades: ${carritofinal.cantidad}
        total a pagar por producto:${carritofinal.cantidad * carritofinal.precio}`)
    })
}

