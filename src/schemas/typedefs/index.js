const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");

const languageType = new GraphQLObjectType({
  name: "Language",
  description: "Programming Languages",
  fields: {
    id: {
      type: GraphQLInt,
    },
    language: {
      type: GraphQLString,
    },
    loved: {
      type: GraphQLBoolean,
    },
  },
});

module.exports = { languageType };
