import { Document } from "mongoose"

export interface ITodo extends Document {
    name: string
    description: string
    status: boolean
}

/**
 * Todo interface that extends the Document type provided by mongoose
 * Will be used to interact with MongoDb
 */