import * as Server from "./server";

const server = Server.init();

server.start((err: Error) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at : ${server.info.uri}`);
});
