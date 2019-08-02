/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings' da aplicação: MongoDb & CosmosDb
 * Data: 01/08/2019
 * Author: Glaucia Lemos
 */

module.exports = {
  local:
  {
    localUrl: 'mongodb://localhost:27017/crud-demo-braziljs',
  },

  /* cosmosdb:
  {
    name: 'crud-demo-braziljs',
    url: '<incluir-a-connection-string-cosmosDb>',
    port: 10255,
  }, */
};
