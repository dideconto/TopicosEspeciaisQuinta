import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://topicos:topicos@clustertopicosavancados.upcyk.mongodb.net/QuintaNoite?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada com o banco de dados");
  })
  .catch((erro) => {
    console.log(`Erro ao conectar no banco de dados: ${erro}`);
  });

export { mongoose };
