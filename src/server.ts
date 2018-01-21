import * as Hapi from "hapi"

export function init(): Hapi.Server {

  const server: Hapi.Server = new Hapi.Server();
  const connectionSettings = {
    port: 3000,
    host: 'localhost'
  };

  server.connection(connectionSettings);

  server.route({
    method: 'GET',
    path: '/getResult',
    handler: function (request: Hapi.Request, reply: Hapi.ReplyNoContinue) {
      reply(`Hello`);
    }
  })

  return server;
}
