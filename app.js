const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Handle specific routes in Node.js
app.get('/node', (req, res) => {
    res.send('This is handled by Node.js');
});

// Proxy all other requests to the Apache server
app.use('/', createProxyMiddleware({
    target: 'http://wphrmdash.test',
    changeOrigin: true,
}));

// Start the Node.js server
app.listen(3000, () => {
    console.log('Node.js server listening on port 3000');
});
