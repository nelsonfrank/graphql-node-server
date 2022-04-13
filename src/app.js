const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listen at port ${PORT}`));
