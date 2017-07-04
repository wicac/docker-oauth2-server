var express = require('express'),
    bodyParser = require('body-parser'),
	oauthServer = require('oauth2-server');
	
var app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.oauth = oauthServer({
	model: {},
	grants: ['password'],
	debug: true
});

app.all('oauth/token', app.oauth.grant());
app.get('/', app.oauth.authorise(), function (req, res) {
  res.send('Secret area');
});
 
app.use(app.oauth.errorHandler());
 
app.listen(3000);