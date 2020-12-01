const express = require('express');

const basePath = '/api';
const fakeServer = express();
fakeServer.use(express.json());

export { fakeServer, basePath };
