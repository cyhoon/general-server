import Server from './server';

(() => {
  try {
    const server = new Server();
    server.run();
  } catch (error) {
    console.log("error: ", error);
  }
})();
