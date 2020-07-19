const expressGraphQL = require('express-graphql');
const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull
} = require('graphql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors)
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));
