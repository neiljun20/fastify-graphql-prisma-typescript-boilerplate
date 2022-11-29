import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import Mercurius from "mercurius";

export default class Server{

	private server = Fastify();

	public constructor (){

	}

	public build = () => {

		const schema = `
		  type Query {
		    add(x: Int, y: Int): Int
		    test(name: String): String
		  }
		`

		const resolvers = {
		  Query: {
		    add: async (_:any, {x, y}:any) => x + y,
		    test: async (_:any, {name}:any) => name
		  }
		}

		this.server.register(Mercurius, {
		  schema,
		  resolvers,
		  graphiql:true
		});

		return this.server;
	}

}