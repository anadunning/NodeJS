import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 3333"));

/**
 * GET = Buscas
 * POST = Criacao
 * PUT = Alteracao
 * DELETE = Deletar
 * PATCH = Alterar uma informacao especifica
 */

// app.get("/", (request, response) => {
//   // return response.send("Olá NLW 05");
//   return response.json({
//     message: "Olá NLW 05",
//   });
// });

// app.post("/", (request, response) => {
//   return response.json({
//     message: "Usuário salvo com sucesso!",
//   });
// });
