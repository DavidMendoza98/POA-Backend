'use strict'
// const express = require('express');
//var multiparty = require('connect-multiparty');
//const path = multiparty({uploadDir:'./uploads/img'});
const medio = require('../controllers/medio_Verificacion.controller')


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
    app.post('/medio/registro_medio',medio.registro_medio);
    app.get('/obtener_archivo/:file',medio.obtener_archivo);
    app.get('/listar_medios',medio.listar_medios)
    app.put('/actualizar_medios/:id',medio.actualizar_medio);
    app.get('/obtener_medio/:id',medio.obtener_medio);
  };