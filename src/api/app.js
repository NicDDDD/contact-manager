const restify  = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const server = restify.createServer();
const MongoClient = require('mongodb').MongoClient;

const settings = require('./settings')
const url = `mongodb://${settings.host}:${settings.port}/${settings.database}`;
const connection = MongoClient.connect(url);
console.log(settings.database)
server.listen(3000, () => console.info(settings.database));

const cors = corsMiddleware({
	origins: ['http://localhost:4200']
});

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser({ mapParams: false }));
	
server.get('/api/contacts', (req, res) => {
  connection.then(response => {
  	const contactsCollection = response.db(settings.database).collection(settings.collection);
    return contactsCollection.find({}).toArray();
  }).then(response => {
    res.json(response);
  }).catch(error => console.error(error));
});

server.listen(3000, () => console.info("Magic on port 3000"));