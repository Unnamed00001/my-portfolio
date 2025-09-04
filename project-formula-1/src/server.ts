import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true});

server.register(cors, {origin: "*"})
const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Ferrari", base: "Maranello, Italy" },
    { id: 3, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" }
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 3, name: "Lando Norris", team: "McLaren" },
    { id: 4, name: "Charles Leclerc", team: "Ferrari" }
];

server.get("/teams", async(request, response) =>{
    response.type("application/json").code(200)

    return {teams};
});

server.get("/drivers", async(request, response)=> {
    response.type("application/json").code(200)

    return {drivers};
});
interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, Response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find( d =>d.id === id);

    if(!driver){
        Response.type("application/json").code(404);
        return { message: "Driver Not Found"}
    }else{
        Response.type("application/json").code(200);
        return {driver};
    }
})

const PORT = process.env.PORT ? parseInt(process.env.PORT): 3333
server.listen({port: PORT}, ()=>{
    console.log("Server init")
});



