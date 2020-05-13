import Task from 'App/Models/Task'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TasksController {
  public index () {
    return Task.all()
  }

  public show ({ params }: HttpContextContract) {
    return Task.findOrFail(params.id)
  }

  public async store ({ request }: HttpContextContract) {
    const task = await Task.create(request.only(['name']))

    await task.refresh()

    return task
  }

  public async update ({ request, params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)

    task.fill(request.only(['name']))

    await task.save()

    return task
  }

  public async complete ({ params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)

    task.completed = true

    await task.save()

    return task
  }

  public async incomplete ({ params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)

    task.completed = false

    await task.save()

    return task
  }

  public async destroy ({ params }: HttpContextContract) {
    const task = await Task.findOrFail(params.id)

    task.delete()
  }
}
