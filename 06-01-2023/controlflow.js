var env="prod";
var performance=100;
if(env=="dev"){
    performance+=performance*0.1;
}
else if(env=="prod"){
    performance+=performance*0.5;
}
else if(env=="stage"){
    performance+=performance*0.3;
}
else if(env=="test"){
    performance+=performance*0.2;
}
console.log(performance);