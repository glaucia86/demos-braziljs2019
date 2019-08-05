/**
 * Arquivo: shared/error.js
 * Data: 03/08/2019
 * Descrição: arquivo responsável por informar os erros relacionado a conexão com o CosmosDb
 * Author: Glaucia Lemos
 */


module.exports = {
    handleError: function(status, message, context) {
        context.res = { status: status, body: message };
        context.done();
    }
};