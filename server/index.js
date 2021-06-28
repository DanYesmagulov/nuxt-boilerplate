/**
 * Frontend server as serverMiddleware using express.js
 * @module 'API'
 */
const express = require('express');
const mock = require('./api/mock');

/**
 * Register express app
 */
const app = express();

/**
 * Register content type - json
 */
app.use(express.json({type: 'application/json'}));

/**
 * Register endpoints in app
 */
app.use('/mock', mock);

/**
 * @exports entrypoint
 * Entrypoint for serverMiddleware of nuxt
 */
export default [{path: '/api/', handler: app}];
