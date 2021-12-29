const app = require("express")();
const http = require("http");

const server = http.createServer(app);

app.get('/', (req, res) => {

    return res.status(200).send("oka");
})

app.get('/test', (req, res) => {

    console.log('session secret is ', process.env.SESSION_SECRET);
    console.log('DB_NAME is ', process.env.DB_NAME);

    return res.status(200).send("Success");
})

server.listen(8054, function() {

    console.log(`Server listening on http://localhost:8054`);
})