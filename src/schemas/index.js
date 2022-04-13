const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const { languageType } = require("./typedefs");

const seedData = [
  { id: 1, language: "python", loved: true },
  { id: 2, language: "Javascript", loved: true },
  { id: 3, language: "Scala", loved: true },
];

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "This is the rootquery",
  fields: {
    languages: {
      type: GraphQLList(languageType),
      resolve: () => seedData,
    },
    language: {
      type: languageType,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (_, args) =>
        seedData.find((language) => language.id === args.id),
    },
  },
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
  description: "This is the rootMutation",
  fields: {
    language: {
      type: languageType,
      args: {
        language: { type: GraphQLString },
        loved: { type: GraphQLBoolean },
      },
      resolve: (_, { language, loved }) => {
        const newLanguage = {
          id: seedData.length + 1,
          language,
          loved,
        };
        seedData.push(newLanguage);
        return newLanguage;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
