import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = 'mongodb+srv://eva3_express:nreyes2024@cluster-express.txjrx.mongodb.net/?retryWrites=true&w=majority&appName=cluster-express'

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export default client