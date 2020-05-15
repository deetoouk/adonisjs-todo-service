import grpc from 'grpc'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import {
  TaskCreateRequest,
  Task,
  TaskFetchRequest,
  TaskUpdateRequest,
} from './proto/tasks/tasks_pb'
import { ITaskServiceServer } from './proto/tasks/tasks_grpc_pb'
import TaskModel from 'App/Models/Task'

class TasksServer implements ITaskServiceServer {
  public async create (
    call: grpc.ServerUnaryCall<TaskCreateRequest>,
    callback: grpc.sendUnaryData<Task>
  ): Promise<void> {
    const task = await TaskModel.create({
      name: call.request.getName(),
    })

    callback(null, this.getTaskResponse(task))
  }

  public async update (
    call: grpc.ServerUnaryCall<TaskUpdateRequest>,
    callback: grpc.sendUnaryData<Task>
  ): Promise<void> {
    try {
      const task = await this.getTaskById(call.request.getId())

      task.name = call.request.getName()

      task.save()

      callback(null, this.getTaskResponse(task))
    } catch (e) {
      callback(e, null)
      return
    }
  }

  public async complete (
    call: grpc.ServerUnaryCall<TaskFetchRequest>,
    callback: grpc.sendUnaryData<Task>
  ): Promise<void> {
    try {
      const task = await this.getTaskById(call.request.getId())

      task.completed = true
      task.save()

      callback(null, this.getTaskResponse(task))
    } catch (e) {
      callback(e, null)
      return
    }
  }

  public async incomplete (
    call: grpc.ServerUnaryCall<TaskFetchRequest>,
    callback: grpc.sendUnaryData<Task>
  ): Promise<void> {
    try {
      const task = await this.getTaskById(call.request.getId())

      task.completed = false
      task.save()

      callback(null, this.getTaskResponse(task))
    } catch (e) {
      callback(e, null)
      return
    }
  }

  public async delete (
    call: grpc.ServerUnaryCall<TaskFetchRequest>,
    callback: grpc.sendUnaryData<Empty>
  ): Promise<void> {
    try {
      const task = await this.getTaskById(call.request.getId())

      task.delete()

      callback(null, null)
    } catch (e) {
      callback(e, null)
      return
    }
  }

  public async get (
    call: grpc.ServerUnaryCall<TaskFetchRequest>,
    callback: grpc.sendUnaryData<Task>
  ): Promise<void> {
    try {
      const task = await this.getTaskById(call.request.getId())

      callback(null, this.getTaskResponse(task))
    } catch (e) {
      callback(e, null)
      return
    }
  }

  private error (status: grpc.status, message: string): grpc.ServiceError {
    return {
      message,
      name: message,
      details: message,
      code: status,
    }
  }

  private async getTaskById (taskId: string): Promise<TaskModel> {
    const id = +taskId

    if (isNaN(id)) {
      throw this.error(grpc.status.INVALID_ARGUMENT, 'ID is not a number')
    }

    const task = await TaskModel.find(id)

    if (!task) {
      throw this.error(grpc.status.NOT_FOUND, 'Not found')
    }

    return task
  }

  private getTaskResponse (task: TaskModel): Task {
    const reply = new Task()

    reply.setId(task.id.toString())
    reply.setName(task.name)
    reply.setCompleted(task.completed)
    reply.setUpdatedAt(task.updatedAt.toISO())
    reply.setCreatedAt(task.createdAt.toISO())

    return reply
  }
}

export default TasksServer
