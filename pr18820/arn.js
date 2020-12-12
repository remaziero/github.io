const mqtt = require ('mqtt');
const config = require('./configGeral-s');

options = {
    subscription = "METRO_DF/ARN"
}



//conexão mqtt backend

var mqttClient = mqtt.connect ('mqtt://' + options + ':' + config.mqtt.password + '@' + config.mqtt.hostname + ':' + config.mqtt.port)




var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var sentindo = 0;
/*
dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date
document.write("<h1> Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear() + ". </h1>")

*/


function MessageArrived(message) {
    console.log(message.destinationName + " : " + message.payloadString);
    var topico = message.destinationName;
    stopic = topico.split("/");



    if (stopic[1] === "a1") {
        if (message.payloadString == "1") {
            v_a1=message.payloadString;
            var n_a1=parseInt(v_a1, 10);
            console.log("o valor de a1 para o mongo= "+n_a1);
            //document.getElementById("a1").innerHTML = n_a1;
            //db.NomeColeção.insertOne(documento JSON)
            atualiza1();
            var a1 = document.getElementById("a1")
            var s = message.payloadString          //vai fazer a soma no front-end
            
            n[0] = +s;
            if (n[0]) {
                t[0] = t[0] + 1;
                console.log("a1_t[0]= " + t[0]);
            }
            n[0] = +s;
            if (n[0]) {
                p[0] = p[0] + 1;
                console.log("a1_p[0]= " + p[0]);
                
            }

        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
        
    }
    if (stopic[1] === "a2") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[1] = +s;
            if (n[1]) {
                t[1] = t[1] + 1;
                console.log("a2_t[1]= " + t[1]);
            }
            n[1] = +s;
            if (n[1]) {
                p[1] = p[1] + 1;
                console.log("a2_p[1]= " + p[1]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "a3") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[2] = +s;
            if (n[2]) {
                t[2] = t[2] + 1;
                console.log("a3_t[2]= " + t[2]);
            }
            n[2] = +s;
            if (n[2]) {
                p[2] = p[2] + 1;
                console.log("a3_p[2]= " + p[2]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "a4") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[3] = +s;
            if (n[3]) {
                t[3] = t[3] + 1;
                console.log("a4_t[3]= " + t[3]);
            }
            n[3] = +s;
            if (n[3]) {
                p[3] = p[3] + 1;
                console.log("a4_p[3]= " + p[3]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "a5") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[4] = +s;
            if (n[4]) {
                t[4] = t[4] + 1;
                console.log("a5_t[4]= " + t[4]);
            }
            n[4] = +s;
            if (n[4]) {
                p[4] = p[4] + 1;
                console.log("a5_p[4]= " + p[4]);
            }

        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "a6") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[5] = +s;
            if (n[5]) {
                t[5] = t[5] + 1;
                console.log("a6_t[5]= " + t[5]);
            }
            n[5] = +s;
            if (n[5]) {
                p[5] = p[5] + 1;
                console.log("a6_p[5]= " + p[5]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "a7") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[6] = +s;
            if (n[6]) {
                t[6] = t[6] + 1;
                console.log("a7_t[6]= " + t[6]);
            }
            n[6] = +s;
            if (n[6]) {
                p[6] = p[6] + 1;
                console.log("a7_p[6]= " + p[6]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "a8") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[7] = +s;
            if (n[7]) {
                t[7] = t[7] + 1;
                console.log(t[7]);
                console.log("a8_t[7]= " + t[7]);
            }
            n[1] = +s;
            if (n[7]) {
                p[7] = p[7] + 1;
                console.log("a8_p[7]= " + p[7]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "b1") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[8] = +s;
            if (n[8]) {
                t[8] = t[8] + 1;
                console.log(t[8]);
                console.log("b1_t[8]= " + t[8]);
            }
            n[8] = +s;
            if (n[8]) {
                p[8] = p[8] + 1;
                console.log("b1_p[8]= " + p[8]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "b2") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[9] = +s;
            if (n[9]) {
                t[9] = t[9] + 1;
                console.log("b2_t[9]= " + t[9]);
            }
            n[9] = +s;
            if (n[9]) {
                p[9] = p[9] + 1;
                console.log("b2_p[9]= " + p[9]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "b3") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[10] = +s;
            if (n[10]) {
                t[10] = t[10] + 1;
                console.log("b3_t[10]= " + t[10]);
            }
            n[10] = +s;
            if (n[10]) {
                p[10] = p[10] + 1;
                console.log("b3_p[10]= " + p[10]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "b4") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[11] = +s;
            if (n[11]) {
                t[11] = t[11] + 1;
                console.log("b4_t[11]= " + t[11]);
            }
            n[11] = +s;
            if (n[11]) {
                p[11] = p[11] + 1;
                console.log("b4_p[11]= " + p[11]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "b5") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[12] = +s;
            if (n[12]) {
                t[12] = t[12] + 1;
                console.log("b5_t[12]= " + t[12]);
            }
            n[12] = +s;
            if (n[12]) {
                p[12] = p[12] + 1;
                console.log("b5_p[12]= " + p[12]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "b6") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[13] = +s;
            if (n[13]) {
                t[13] = t[13] + 1;
                console.log(t[13]);
                console.log("b6_t[1]= " + t[13]);
            }
            n[13] = +s;
            if (n[13]) {
                p[13] = p[13] + 1;
                console.log("b6_p[13]= " + p[13]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "b7") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[14] = +s;
            if (n[14]) {
                t[14] = t[14] + 1;
                console.log("b7_t[14]= " + t[14]);
            }
            n[14] = +s;
            if (n[14]) {
                p[14] = p[14] + 1;
                console.log("b7_p[14]= " + p[14]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "b8") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[15] = +s;
            if (n[15]) {
                t[15] = t[15] + 1;
                console.log("b8_t[15]= " + t[15]);
            }
            n[15] = +s;
            if (n[15]) {
                p[15] = p[15] + 1;
                console.log("b8_p[15]= " + p[15]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "c1") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[16] = +s;
            if (n[16]) {
                t[16] = t[16] + 1;
                console.log("c1_t[16]= " + t[16]);
            }
            n[16] = +s;
            if (n[16]) {
                p[16] = p[16] + 1;
                console.log("c1_p[16]= " + p[16]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "c2") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[17] = +s;
            if (n[17]) {
                t[17] = t[17] + 1;
                console.log("c2_t[17]= " + t[17]);
            }
            n[17] = +s;
            if (n[17]) {
                p[17] = p[17] + 1;
                console.log("c2_p[17]= " + p[17]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "c3") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[18] = +s;
            if (n[18]) {
                t[18] = t[18] + 1;
                console.log("c3_t[18]= " + t[18]);
            }
            n[18] = +s;
            if (n[18]) {
                p[18] = p[18] + 1;
                console.log("c3_p[18]= " + p[18]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "c4") {
        if (message.payloadString == "1") {
            atualiza1();
            var s = message.payloadString;
            n[19] = +s;
            if (n[19]) {
                t[19] = t[19] + 1;
                console.log("c4_t[19]= " + t[19]);
            }
            n[19] = +s;
            if (n[19]) {
                p[19] = p[19] + 1;
                console.log("c4_p[19]= " + p[19]);
            }
        } else if (message.payloadString == "0") {
            atualiza0();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "c5") {
        if (message.payloadString == "1") {
            atualiza1();
            p[16] = 0;
            var element = document.getElementById("sum_Ec1");
            element.innerHTML = t[16];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[16] = 0;
            var element = document.getElementById("sum_Sc1");
            element.innerHTML = p[16];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "c6") {
        if (message.payloadString == "1") {
            atualiza1();
            p[17] = 0;
            var element = document.getElementById("sum_Ec2");
            element.innerHTML = t[17];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[17] = 0;
            var element = document.getElementById("sum_Sc2");
            element.innerHTML = p[17];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "c7") {
        if (message.payloadString == "1") {
            atualiza1();
            p[18] = 0;
            var element = document.getElementById("sum_Ec3");
            element.innerHTML = t[18];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[18] = 0;
            var element = document.getElementById("sum_Sc3");
            element.innerHTML = p[18];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "c8") {
        if (message.payloadString == "1") {
            atualiza1();
            p[19] = 0;
            var element = document.getElementById("sum_Ec4");
            element.innerHTML = t[19];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[19] = 0;
            var element = document.getElementById("sum_Sc4");
            element.innerHTML = p[19];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "d1") {
        if (message.payloadString == "1") {
            atualiza1();
            p[8] = 0;
            var element = document.getElementById("sum_Eb1");
            element.innerHTML = t[8];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[8] = 0;
            var element = document.getElementById("sum_Sb1");
            element.innerHTML = p[8];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "d2") {
        if (message.payloadString == "1") {
            atualiza1();
            p[9] = 0;
            var element = document.getElementById("sum_Eb2");
            element.innerHTML = t[9];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[9] = 0;
            var element = document.getElementById("sum_Sb2");
            element.innerHTML = p[9];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "d3") {
        if (message.payloadString == "1") {
            atualiza1();
            p[10] = 0;
            var element = document.getElementById("sum_Eb3");
            element.innerHTML = t[10];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[10] = 0;
            var element = document.getElementById("sum_Sb3");
            element.innerHTML = p[10];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "d4") {
        if (message.payloadString == "1") {
            atualiza1();
            p[11] = 0;
            var element = document.getElementById("sum_Eb4");
            element.innerHTML = t[11];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[11] = 0;
            var element = document.getElementById("sum_Sb4");
            element.innerHTML = p[11];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "d5") {
        if (message.payloadString == "1") {
            atualiza1();
            p[12] = 0;
            var element = document.getElementById("sum_Eb5");
            element.innerHTML = t[12];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[12] = 0;
            var element = document.getElementById("sum_Sb5");
            element.innerHTML = p[12];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "d6") {
        if (message.payloadString == "1") {
            atualiza1();
            p[13] = 0;
            var element = document.getElementById("sum_Eb6");
            element.innerHTML = t[13];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[13] = 0;
            var element = document.getElementById("sum_Sb6");
            element.innerHTML = p[13];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "d7") {
        if (message.payloadString == "1") {
            atualiza1();
            p[14] = 0;
            var element = document.getElementById("sum_Eb7");
            element.innerHTML = t[14];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[14] = 0;
            var element = document.getElementById("sum_Sb7");
            element.innerHTML = p[14];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "d8") {
        if (message.payloadString == "1") {
            atualiza1();
            p[15] = 0;
            var element = document.getElementById("sum_Eb8");
            element.innerHTML = t[15];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[15] = 0;
            var element = document.getElementById("sum_Sb8");
            element.innerHTML = p[15];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }

    if (stopic[1] === "e1") {
        if (message.payloadString == "1") {
            atualiza1();
            p[0] = 0;
            var element = document.getElementById("sum_Ea1");
            element.innerHTML = t[0];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[0] = 0;
            var element = document.getElementById("sum_Sa1");
            element.innerHTML = p[0];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "e2") {
        if (message.payloadString == "1") {
            atualiza1();
            p[1] = 0;
            var element = document.getElementById("sum_Ea2");
            element.innerHTML = t[1];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[1] = 0;
            var element = document.getElementById("sum_Sa2");
            element.innerHTML = p[1];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "e3") {
        if (message.payloadString == "1") {
            atualiza1();
            p[2] = 0;
            var element = document.getElementById("sum_Ea3");
            element.innerHTML = t[2];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[2] = 0;
            var element = document.getElementById("sum_Sa3");
            element.innerHTML = p[2];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "e4") {
        if (message.payloadString == "1") {
            atualiza1();
            p[3] = 0;
            var element = document.getElementById("sum_Ea4");
            element.innerHTML = t[3];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[3] = 0;
            var element = document.getElementById("sum_Sa4");
            element.innerHTML = p[3];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "e5") {
        if (message.payloadString == "1") {
            atualiza1();
            p[4] = 0;
            var element = document.getElementById("sum_Ea5");
            element.innerHTML = t[4];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[4] = 0;
            var element = document.getElementById("sum_Sa5");
            element.innerHTML = p[4];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "e6") {
        if (message.payloadString == "1") {
            atualiza1();
            p[5] = 0;
            var element = document.getElementById("sum_Ea6");
            element.innerHTML = t[5];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[5] = 0;
            var element = document.getElementById("sum_Sa6");
            element.innerHTML = p[5];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "e7") {
        if (message.payloadString == "1") {
            atualiza1();
            p[6] = 0;
            var element = document.getElementById("sum_Ea7");
            element.innerHTML = t[6];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[6] = 0;
            var element = document.getElementById("sum_Sa7");
            element.innerHTML = p[6];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }
    if (stopic[1] === "e8") {
        if (message.payloadString == "1") {
            atualiza1();
            p[7] = 0;
            var element = document.getElementById("sum_Ea8");
            element.innerHTML = t[7];
            somaE();
        } else if (message.payloadString == "0") {
            atualiza0();
            t[7] = 0;
            var element = document.getElementById("sum_Sa8");
            element.innerHTML = p[7];
            somaS();
        } else {
            displayClass = "unknown";
        }
        var topic = message.destinationName.split("/");
        if (topic.length == 3) {
            var ioname = topic[1];
            UpdateElement(ioname, displayClass);
        }
    }


}

/*PROGRAMA ORIGINAL 
49	function MessageArrived(message) {
50	        switch(message.payloadString){
51	                case "ON":
52	                        displayClass = "on";
53	                        break;
54	                case "OFF":
55	                        displayClass = "off";
56	                        break;
57	                default:
58	                        displayClass = "unknown";
	        }
Linha 50: O objeto de mensagem possui um atributo payloadString que contém o conteúdo da mensagem transmitida. 
Linhas 51-56: Quando o conteúdo da mensagem for 'ON', a variável displayClass será definida para 'on'. 
Se a carga útil for 'OFF', ela será definida como 'off'. 
Linhas 57-58: Quando receber um peyload diferente, a classe de exibição será definida como 'desconhecida' - "unknown". 
*/
/*
A parte inferior da função determina qual entrada ou saída deve ser atualizada: 
61	var topic = message.destinationName.split("/");
62	        if (topic.length == 3){
63	                var ioname = topic[1];
64	                UpdateElement(ioname, displayClass);
	        }
	}
Linha 61: Primeiro, o message.destinationName, ou seja, o tópico da mensagem, 
é dividido usando o método de string split () no caractere '/' em seus membros individuais 
e estes são armazenados na matriz de tópicos. 
Linha 63: Para mywebio/ioname/status o elemento do meio é o nome da entrada ou saída correspondente. 
Linha 64: O elemento DOM ioname é atribuído a UpdateElement () da classe CSS na função displayClass. 
*/

function atualiza1() {
    displayClass = "on";
    
    //p[0]=0;
    console.log("atualiza 1");
    console.log(stopic[1]);
    console.log(displayClass);

    if (stopic[1] === "a1") {
        console.log("Foi a1");

    }
    
}

function atualiza0() {
    displayClass = "off";
    //t[0]=0;
    console.log("atualiza 0 =");
    console.log(stopic[1]);
}

function getSum(total, num) {
    return total + num;
}

function somaE(item) {
    document.getElementById("sum_ET").innerHTML = t.reduce(getSum);
}

function somaS(item) {
    document.getElementById("sum_ST").innerHTML = p.reduce(getSum);
}