const restify  = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const server = restify.createServer();
const MongoClient = require('mongodb').MongoClient;

const settings = require('./settings')
const url = 'mongodb://' + settings.host + ':'+ (settings.port).toString()+'/'+settings.database;
const connection = MongoClient.connect(url);

const cors = corsMiddleware({
	origins: ['http://localhost:4200']
});

server.pre(cors.preflight);
server.use(cors.actual);

	
server.get('/api/contacts', (req, res) => {
	connection.then(response => {
		const contatcsCollection = response.collection(settings.collection);
		return contactsCollection.find({}).toArray();
	}).then(response => res.json(response))
	.catch(error => console.error(error));
});

server.listen(3000, () => console.info("Magic on port 3000"));