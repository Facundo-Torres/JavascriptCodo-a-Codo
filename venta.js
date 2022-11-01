
function btn_resumen(){
    var ticket = 200;
    var descE = 0.80;
    var descT = 0.50;
    var descJ = 0.15;
    
    let cantidad = parseInt(document.getElementById('cantidad').value);
    console.log('cantidad desaada' + cantidad);
    let pagar = ticket * cantidad;
    let totalDescE = pagar * descE;
    let totalDescT = pagar * descT;
    let totalDescJ = pagar * descJ;
    /*let total = pagar - totalDescuento;*/
    /*console.log('total' + total);*/
    var cat = document.getElementById('list').value;
  
 switch (cat){
    case 'Estudiante':
    total = pagar - totalDescE;
    document.getElementById('mostrar').value = "Total a pagar: $" + total;
    break;
    case 'Trainee':
    total = pagar - totalDescT;
    document.getElementById('mostrar').value = "Total a pagar: $" + total;
    break;
    case 'Junior':
    total = pagar - totalDescE;
    document.getElementById('mostrar').value = "Total a pagar: $" + total;
    break;
 }
}
