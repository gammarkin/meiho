import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import router from './routes';

import errorHandler from './middlewares/ErrorHandler';

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(cors());

app.use('/', router.prompt);
app.use('/header', router.header);
app.use('/herobanner', router.herobanner);
app.use('/textfolder', router.textfolder);
app.use('/footer', router.footer);
app.use('/subtextfolder', router.subtextfolder);
app.use('/buttonbuy', router.buttonbuy);
app.use('/components', router.components);
app.use('/styles', router.styles);
app.use('/brandprofile', router.brandprofile);
app.use('/login', router.login);
app.use('/products', router.productlist);
app.use('/klaviyo', router.klaviyo);

export default app;