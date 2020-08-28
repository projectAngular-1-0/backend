import Server from "./class/Server"

//levantamos el server
const serverOne: Server = new Server();
serverOne.start(()=>{
    console.log(`Server run on port ${serverOne.port}`);
})