import * as Hapi from "hapi"

export async function init() {

  const server: any = new Hapi.Server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/getResult',
    handler: function (request: any) {
      return 'Hello';
    }
  })

  try {
    await server.start();
    console.log(`Server running at : ${server.info.uri}`);
  } catch (err) {
    console.log(`Server err : ${err}`);
  }
}
