import express from 'express'
import cors from 'cors'
import {connectDB} from './database/dbconfg.js'
import userRoute from './routes/UserRoute.js'
import productRoute from './routes/ProductRoute.js'

const app = express();
const port = 8000;

app.use(express.json()); 
app.use(cors())

app.use(cors({
    origin: '*' 
}));

app.use('/user', userRoute);
app.use('/product', productRoute);

connectDB()
    .then((res)=> console.log('res',res))
    .catch((error)=>console.log("error",error))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
