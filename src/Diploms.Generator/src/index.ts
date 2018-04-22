import { Server } from './server';
class Startup {
    public static Main(): void {
        console.log("Diploms generation service");
        const server = new Server();
        server.useDefaultConfig().run();
    }
}
Startup.Main();
