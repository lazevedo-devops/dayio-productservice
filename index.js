const express = require('express');
const app = express();
const PORT = 8080;
const apiMetrics = require('prometheus-api-metrics');
app.use(apiMetrics())
app.use(express.text());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get('/product', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send(
        "Hello World Product Service!"
    );
});