//Definimos el objeto con las propiedades
var ca={
    teclas:document.querySelectorAll("#calcular ul li"),
    operacion:document.querySelector("#operaciones"),
    accion:null,
    digito:null,
    resultado: false,
    cantisignos:0,
    cantidecimal:false
}
//Vamos a crear un objeto con los metodos de la calculadora
var me={

inicio:function()
{
for(var i=0;i<ca.teclas.length;i++)
{
    ca.teclas[i].addEventListener("click",me.oprimirtecla);

}
},
oprimirtecla:function(teclas)
{
ca.accion = teclas.target.getAttribute("class");
ca.digito= teclas.target.innerHTML;
me.calculadora(ca.accion,ca.digito);
},

calculadora:function(accion,digito)
{
switch(accion)
{
    
    case"numero":
    ca.cantisignos=0;
    if(ca.operacion.innerHTML=="0")
    {
ca.operacion.innerHTML=digito;
    }else {
        if (ca.resultado)
        {
            ca.resultado=false;
            ca.resultado.innerHTML=digito;
        }else{
            ca.operacion.innerHTML +=digito;
        }
    }
    break;
}

}



}
me.inicio()