const express = require('express');
const dotenv = require('dotenv');
const expQL = require('express-graphql'); 
const schema = require('./schema/schema.js')
const colors = require('colors');
const connectDB = require('./config/database');
const cors = require('cors');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

connectDB();

app.use('/graphql',expQL.graphqlHTTP({
    schema,
    graphiql : process.env.NODE_ENV === 'development',  

}));

app.listen(PORT,() => {
    console.log(`Server Started at PORT=${PORT}`);
});
