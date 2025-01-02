import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import swagger from './utils/swagger';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
swagger(app);

// SWAGGER API ENDPOINT FOR API DOCUMENTATION
app.get('/', (req, res) => {
    return res.redirect('/documentations');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
});

