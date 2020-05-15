import grpc from 'grpc'
import TasksServer from './TasksServer'
import { ITaskServiceServer, TaskServiceService } from './proto/tasks/tasks_grpc_pb'

const server = new grpc.Server()
server.addService<ITaskServiceServer>(TaskServiceService, new TasksServer())
console.log(`Listening on ${process.env.GRPC_PORT}`)
server.bind(`localhost:${process.env.GRPC_PORT}`, grpc.ServerCredentials.createInsecure())

export default server
