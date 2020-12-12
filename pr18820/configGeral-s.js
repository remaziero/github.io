var config = {};

var config = {};

config.debug = process.env.DEBUG || false;

config.mqtt = {};
//BROKER SEM SENHA
///config.mqtt.namespace = process.env.MQTT_NAMESPACE || 'METRO_DF/#';
///config.mqtt.hostname = process.env.MQTT_HOSTNAME || '192.168.0.45';
//config.mqtt.port = process.env.MQTT_PORT || 1883;

//BROKER COM SENHA
config.mqtt.namespace = process.env.MQTT_NAMESPACE || 'METRO_DF/#';
config.mqtt.hostname = process.env.MQTT_HOSTNAME || '192.168.0.45';
config.mqtt.port = process.env.MQTT_PORT || 1955;
config.mqtt.user = process.env.MQTT_USER || 'Metrodf';
config.mqtt.password = process.env.MQTT_PASSWORD || 'camila';

/*
//BROKER COM TLS
config.mqtt.namespace = process.env.MQTT_NAMESPACE || 'METRO_DF/#';
config.mqtt.hostname = process.env.MQTT_HOSTNAME || '192.168.0.45';
config.mqtt.port = process.env.MQTT_PORT || 1955;
config.mqtt.user = process.env.MQTT_USER || 'Metrodf';
config.mqtt.password = process.env.MQTT_PASSWORD || 'camila';
config.mqtt.cafile = process.env.MQTT_CAFILE || 'mqtt-ca.pem';
*/
config.mongodb = {};
config.mongodb.hostname = process.env.MONGODB_HOSTNAME || 'localhost';
config.mongodb.port = process.env.MONGODB_PORT || 27017;
config.mongodb.database = process.env.MONGODB_DATABASE || 'mqtt';
config.mongodb.collection = process.env.MONGODB_COLLECTION || 'BLOQUEIOS';

module.exports = config;