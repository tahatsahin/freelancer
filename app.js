import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';
import pageRoute from './routes/pageRoute.js';

// express initialize
const app = express();

// connect db
const DB_USER = process.env.dbuser;
const DB_PWD = process.env.pwd;
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PWD}@cluster0.eupg0no.mongodb.net/?retryWrites=true&w=majority`;
mongoose
	.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('db connected');
	})
	.catch((err) => {
		console.log(err);
	});

// set ejs as template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.use('/', pageRoute.router);

// listen
const PORT = 8080;
app.listen(PORT, () => {
	console.log(`server started at port ${PORT}`);
});
