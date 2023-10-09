import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import RootRouter from './src/routes';

const app = express();

app.use(express.json());
app.use(bodyParser());
app.use(cors());

app.use(RootRouter);

app.listen(3000, () => {
	console.log('App listening on port 3000!');
});
