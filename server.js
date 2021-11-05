const express = require('express')
const { resolve } = require('path')

const app = express()

app.use('/',

    express.static(
        resolve(
            __dirname,
            './build'
        ))
)

const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
const server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});

