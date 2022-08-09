function estudiante()
{
    var capitalFinal;
    const i = 0.15;
    const iM = 0.10;
    const iEdad = 0.12;
    const fecha = new Date();
    var j;
    var coutaMensual;
    var total = 0;
    var cuotaTotal = 0;
    var div = document.getElementById('resultados');

    alert("Su usario es estudiante se le puede prestar un monto máximo de 2000");
    var cI = prompt('Ingrese la cantidad a prestar');
    if( isNaN(cI) ){
        alert("Solo se permiten numeros")
        return false ;
    }

    if((cI > 2000))
    {
        alert("Recuerde que su maximo es de 2000, no puede sobrepasar esta cantidad");
        return false;
    }else{
        if(cI == ""){
            alert("No puede dejar este campo vacio");
            return false;
        }
    }
    
    var genero = prompt('Indique si es hombre o mujer: Masculino(1) Femenino(2)')
    if(genero != 1 && genero !=2){
        alert("Ingrese una opcion valida");
        return false;
    }

    if(genero == 1)
    {
        alert("Usted es hombre no aplica para el tiempo del préstamo no excede los 2 años con una reducción de la tasa un 5%")
    }

    if(genero == 2)
    {
        alert("Usted es mujer aplica para los 2 años con reducción de la tasa un 5%");
    }

    var n = prompt('Los préstamos sólo se pueden realizar por 6 meses, 12 meses y 18 meses');

    if( isNaN(n) ){
        alert("Solo se permiten numeros")
        return false ;
    }

    if(n != 6 && n != 12 && n != 18)
    {
        alert('Los préstamos sólo se pueden realizar por 6 meses, 12 meses y 18 meses');
        return false;
    }else{
        capitalFinal = (cI * (1 + i)^n);
    }

    total = capitalFinal;
    coutaMensual = capitalFinal / n;
    cuotaTotal = coutaMensual
    var html = "<ul>\n\t<li>\n";
    html += "\t\t\tTabla Estudiante " + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tEl monto final es de: $ " + total + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tEl prestamo se hizo en la fecha de:  " + fecha + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tCuota mensual a pagar: $ " + cuotaTotal + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tProxima Fecha a pagar sera el siguiente de cada mes hasta que finalice su prestamo " + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tQue tenga un muy hermoso dia lleno de exitos :) " + "\n";
    html += "\t</li>\n";

    div.innerHTML = html;
}

function cliente()
{
    var capitalFinal;
    const i = 0.15;
    const fecha = new Date();
    var j;
    var coutaMensual;
    var total = 0;
    var cuotaTotal = 0;
    var div = document.getElementById('resultados1');

    alert("Su usuario es un cliente")
    var edad = prompt('Ingrese su edad');
    if( isNaN(edad) ){
        alert("Solo se permiten numeros")
        return false ;
    }

    if(edad <24 || edad >34) 
    {
        alert("Usted no aplica a la reducción de la tasa de interes del 5%");   
    }else{
        alert("Usted plica a la reducción de la tasa de interes del 5%");
    }

    var cI = prompt('Ingrese la cantidad a prestar');
    if( isNaN(cI) ){
        alert("Solo se permiten numeros")
        return false ;
    }

    if(cI == ""){
        alert("No puede dejar este campo vacio");
        return false;
        }
    
    
    var genero = prompt('Indique si es hombre o mujer: Masculino(1) Femenino(2)')
    if(genero != 1 && genero !=2){
        alert("Ingrese una opcion valida");
        return false;
    }

    if(genero == 1)
    {
        alert("Usted es hombre no aplica para el tiempo del préstamo no excede los 2 años con una reducción de la tasa un 5%")
    }

    if(genero == 2)
    {
        alert("Usted es mujer aplica para los 2 años con reducción de la tasa un 5%");
    }

    var n = prompt('Los préstamos sólo se pueden realizar por 6 meses, 12 meses y 18 meses');

    if( isNaN(n) ){
        alert("Solo se permiten numeros")
        return false ;
    }

    if(n != 6 && n != 12 && n != 18)
    {
        alert('Los préstamos sólo se pueden realizar por 6 meses, 12 meses y 18 meses');
        return false;
    }else{
        capitalFinal = (cI * (1 + i)^n);
    }

    total = capitalFinal;
    coutaMensual = capitalFinal / n;
    cuotaTotal = coutaMensual
    var html = "<ul>\n\t<li>\n";
    html += "\t\t\tTabla Cliente " + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tEl monto final es de: $ " + total + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tEl prestamo se hizo en la fecha de:  " + fecha + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tCuota mensual a pagar: $ " + cuotaTotal + "\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t\tProxima fecha a pagar sera este mismo dia de cada mes hasta que finalice su prestamo"  + "\n";
    html += "\t</li>\n";

    
    html += "\t<li>\n";
    html += "\t\t\tQue tenga un muy hermoso dia lleno de exitos :) " + "\n";
    html += "\t</li>\n";
    div.innerHTML = html;
}
