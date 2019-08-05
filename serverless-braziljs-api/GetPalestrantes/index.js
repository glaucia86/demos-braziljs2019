// @ts-nocheck
/**
 * Arquivo: GetPalestrantes/index.js
 * Data: 03/08/2019
 * Descrição: arquivo responsável por selecionar todos 'Palestras' via azure functions
 * Author: Glaucia Lemos
 * Snippet: serverless-read
 */

const conn = require("../shared/utils");
const handleError = require("../shared/error");

module.exports = function (context) {
    conn.connect().then(client => {
        query(client);
    }).catch(err => handleError(500, err, context));

    const query = client => {
    const db = client.db("crud-demo-braziljs");

    db.collection("palestrante").find().toArray().then(res => {
        context.log("Retornado todos(as) Palestrantes com Sucesso!");
        res.forEach(palestrante => delete palestrante._id);

        context.res = {
            //status: 200,
            body: res
        };
            context.done();
        }).catch(err => handleError(500, err.stack, context));
    };
};






