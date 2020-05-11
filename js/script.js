var op = prompt("OP:");
var x=0,y=0;
function Suma(a,b){
    return (parseInt(a)+parseInt(b));
}
function Resta(a,b){
    return (parseInt(a)-parseInt(b));
}
function Multipicacion(a,b){
    return (parseInt(a)*parseInt(b));
}
function Division(a,b){
    if(b==0){
        return 0;
    }
    return (parseInt(a)/parseInt(b));
}
function Cubica(a){
    return Math.pow(parseInt(a),1/3);
}
function Factorial(a){
    let i, s=1;
    for(i=1;i<a+1;i++){
        s*=i;
    }
    return s;
}
function Potencia(a){
    return a*a;
}
function datos2(){
    x = prompt("N1: ");
    y = prompt("N2: ");
}
function datos1(){
    x = Number(prompt("N: "));

}
switch(op){
    case 1: datos2();
            document.write("La suma es: ",suma());
        break;
    case 2:
        break;
    default:
        
}
