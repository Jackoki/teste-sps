const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Inicializa o servidor na porta do arquivo .env
app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:3000");
});

//Foi criado e importado a biblioteca do SWAGGER para documentar as rotas do backend, para isso acesse "localhost:3000/api-docs"
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

