/**
 *
 * This NodeJS application listens to MQTT messages and records them to MongoDB
 *
 * @author  Dennis de Greef <github@link0.net>
 * @license MIT
 * @Referência_1 https://github.com/de  nnisdegreef/mqtt-mongo-recorder
 * @Referência_2 https://www.thethingsnetwork.org/labs/story/save-your-data-using-nodejs-mqtt-mongodb
 * @atualização_e_alteração Eng. Renato Maziero Pedrosa
 */
const objectId = require('mongodb').objectId;
const mongoClient = require('mongodb').MongoClient;
const mqtt = require('mqtt');
const config = require('./configGeral-s');

const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

/***************************não me lembro********************************** */
//const { mongodb } = require('./configGeral-s');
//const { Console } = require('console');
//port = 3010;
/***************************************************************** */

/*
//BROKER COM TLS
var fs = require('fs');

var client = mqtt.connect(config.mqtt.hostname, {
    ca: [fs.readFileSync(config.mqtt.cafile)],
    username: config.mqtt.user,
    password: config.mqtt.password,
    port: config.mqtt.port
});
*/


//********************************tratativas para conexão ao mqtt*************************************************/
//BROKER SEM SENHA
//const mqttUri = 'mqtt://' + config.mqtt.hostname + ':' + config.mqtt.port;
//BROKER COM SENHA
var mqttUri = 'mqtt://' + config.mqtt.user + ':' + config.mqtt.password + '@' + config.mqtt.hostname + ':' + config.mqtt.port;

const client = mqtt.connect(mqttUri);


client.on('connect', function() {

    client.subscribe(config.mqtt.namespace, function(err) {
        if (!err) {
            client.publish('METRO_DF/SERVIDOR', 'PUBLICAÇÃO SERVIDOR MQTT ATIVADO COM MONGODB- serverGeral-s.js');
            console.log('***********METRO_DF/SERVIDOR', 'SERVIDOR MQTT ATIVADO - serverGeral-s.js***********')
            console.log("- Logado na rede e conectado ao MQTT da máquina: "+config.mqtt.hostname);
            console.log('comando de conexão: mongod --dbpath ./data >>>> importante estar no diretório correto do projeto')
        }
    });
});

//**************************tratativas para conexão ao banco de dados nosql - MongoDB*********************************************/

var mongoUri = 'mongodb://' + config.mongodb.hostname + ':' + config.mongodb.port + '/' + config.mongodb.database;

    mongoClient.connect(mongoUri, {useUnifiedTopology:true}, function(error, database) {
        if (error != null) {
            throw error;
        }
            global.connection = database.db('mqtt');
            global.collection = connection.collection(config.mongodb.collection);
            console.log('***********METRO_DF/SERVIDOR', 'SERVIDOR MONGODB ATIVADO - serverGeral-s.js***********');
            console.log('- Conectado ao MongoDB instalado no endereço:'+config.mongodb.hostname+' usando port: '+config.mongodb.port)
            console.log("- Banco de dados em uso: "+config.mongodb.database);
            console.log("- Coleção utilizada: "+config.mongodb.collection);
            console.log('comando de conexão ao broker com usuario e senha: projeto/conf.d$ mosquitto -v -c mosquitto.conf >>>> importante o diretório')

        collection.createIndex({
        "topic": 1
        });
    
        client.on('message', function(topic, message) {   
            var messageObject = {
                topic: topic,
                message: message.toString()  
            };
    //instante relacionado à gravação no banco de dados da mensagem publicada e sua confirmação no console
            collection.insertOne(messageObject, function(error, result) {
                if (error != null) {
                    console.log("ERROR: " + error);
                }  

                tp = messageObject.topic.split("/");
                ms = messageObject.message.split(",");
                bl = ms[0].split("\"");
                console.log('********************************************')
                console.log('Mensagem json completa publicada e gravada: '+messageObject.topic + "/" + messageObject.message);
                console.log('Tópico publicado e gravado: '+messageObject.topic);
                console.log('Mensagem publicada e gravada: '+ messageObject.message);
                console.log('Estação: '+tp[1]);
                console.log('bloqueio: '+bl[1]); //aqui está o bloqueio
                console.log('Total de entradas: '+ms[9]); //total de usuários que entraram na estação até o momento desta mensgaem pelo conjunto de bloqueios no modo entrada
                console.log('Total de saídas: '+ms[10]); //total de usuários que saíram da estação até o momento desta mensagem pelo conjunto de bloqueios no modo saída
                console.log('********************************************')
                
                switch (tp[1]){
                    case "ARN": prenncherTable(tp[1], bl[1], ms[1], ms[9], ms[10]);  //estação/bloqueio/modo/total entrada/total saida
                    case "GAL": prenncherTable(tp[1], bl[1], ms[1], ms[9], ms[10]);
                    case "CTL": prenncherTable(tp[1], bl[1], ms[1], ms[9], ms[10]);
                }
                              
            });
        });



        

        
    //até aqui neste código está garantido a conexão entre o mqtt e o mongo
    //daqui para frente são feitas as tratativas para trazer dados do mongo ao front-end
    //será usado a variável global.connection declarada acima para isto
    // o arquivo de rotas index.js passa a fazer parte das rotinas daqui para frente
    // o arquivo index.js por sua vez renderiza através dos ejs nas views. 
    //iniciando do index.ejs e os xxx.ejs, onde xxx signfica o prefixo das estações
    //tratativas para conexão do mongodb com o front end
    });


// FUNÇÕES EXPORTADAS PARA MANIPULAÇÃO DO BANCO DE DADOS NO ARQUIVO  index.js COM RENDERIZAÇÃO NOS EJS

function consultarDocumentos(){
    
    return global.connection.collection('BLOQUEIOS')
                            .find({})
                            .toArray();
    //return global.collection.find({}).toArray()
    //return collection.db.getCollection('BLOQUEIOS').toArray()

    //collection.countDocuments({"topic" : "METRO_DF/GAL"});
    //collection.insertOne({"mensagem":"Servidor gravando na atualização de página"});
    
};

function contarDocumentos(){
    return global.connection.collection('BLOQUEIOS')
    .countDocuments();
}

function inserirDocumentos(){
    return global.connection.collection('BLOQUEIOS')
                            .insertOne(docs) 
}


function atualizarDocumentos(id, docs){
    const objectId = new ObjectId(id)
    return global.connection.collection('BLOQUEIOS')
                            .updateOne({_id: ObjectId}, {$set: docs})
    
}

function deletarDocumentos(id){
    const objectId = new ObjectId(id)
    return global.connection.collection('BLOQUEIOS')
                            .deleteOne({_id, objectId})
}

function prenncherTable(x, y, z){
    if(z==true){
        displayClass = "on";
        //document.getElementById(y+x).innerHTML=1;
    }
    else {
        displayClass = "off";
        //document.getElementById(y+x).innerHTML=1;
    }

};


module.exports = {consultarDocumentos, 
                  contarDocumentos, 
                  inserirDocumentos, 
                  atualizarDocumentos, 
                  deletarDocumentos
                } 


















    /*rascunhos para tratativas no momento da gravação 

function trataConex(){
    //tratamento da mensagem recebida no banco de dados proveniente do mqtt

    console.log(messageObject.topic + "/" + messageObject.message);

    console.log(messageObject.topic);
   
    console.log(tp[0]);
    console.log(tp[1]); //aqui está a estação
    

    console.log(messageObject.message);
    
    console.log(ms[0]); //dados brutos do bloqueio e flag acionador
    console.log(ms[1]); //false = modo entrada e true = modo saída do blqueio
    console.log(ms[2]); //total de usuários que entraram neste bloqueio no modo selecionado até o envio dessa mensagem
    console.log(ms[3]); //dia
    console.log(ms[4]); //mes
    console.log(ms[5]); //ano
    console.log(ms[6]); //hora
    console.log(ms[7]); //minuto
    console.log(ms[8]); //segundo
    console.log(ms[9]); //total de usuários que entraram na estação até o momento desta mensgaem pelo conjunto de bloqueios no modo entrada
    console.log(ms[10]); //total de usuários que saíram da estação até o momento desta mensagem pelo conjunto de bloqueios no modo saída
    console.log(ms[11]); //tipo de bilhete - funcionalidade futura
    console.log(ms[12]); //flag fim do pacote

    //tratamento de depuração da identificação do bloqueio e do flag acionador 
    
    console.log(bl[0]);
    console.log(bl[1]); //aqui está o bloqueio
    console.log(bl[2]); //aqui está o flag :[1

    if (bl[2] === ":[1") {
        bl[2] = 1;
        console.log(bl[2]);
        console.log("flag ok");
    }
}
*/
