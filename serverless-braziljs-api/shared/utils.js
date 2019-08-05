/**
 * Arquivo: shared/utils.js
 * Data: 03/08/2019
 * Descrição: arquivo pelas variáveis de ambiente relacionado ao CosmosDb
 * Author: Glaucia Lemos
 */

const MongoClient = require('mongodb').MongoClient;

let client = null;

module.exports = {
    connect: function() {
        const auth = {
            user: process.env.CosmosDBUser,
            password: process.env.CosmosDBPassword
        };

        return new Promise((resolve, reject) => {
            if (client == null) {
                MongoClient.connect(process.env.CosmosDbUrl, { auth: auth }).then(_client => {
                    client = _client;
                    resolve(_client);
                }).catch(err => {
                    reject(err.status);
                });
            } else {
                resolve(client);
            }
        });
    }
};