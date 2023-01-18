require ("dotenv").config();
const userRouter = require("./api/users/user.router");

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3307;
bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var routes = require('./routes');
routes(app);


app.listen(port, () => {
    console.log("Conecté au port :" + process.env.DB_PORT)
});

console.log('Listening on PORT: ' + process.env.DB_PORT);

app.use("/api/users", userRouter);