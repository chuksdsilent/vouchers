const express = require("express")
const serverStatic = require('server-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');
const path = require("path");

const app = express();

app.use(enforce.HTTPS({trustProtoHeader: true}))
app.use('/', serverStatic(path.join(__dirname + '/dist')));
app.use(history());

app.listen(process.env.PORT || 5000);