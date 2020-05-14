/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/tasks', 'TasksController').apiOnly()
Route.post('/tasks/:id/complete', 'TasksController.complete')
Route.post('/tasks/:id/incomplete', 'TasksController.incomplete')

// Health checks
Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.get('/healthz', async ({ response }) => { // Used by K8s
  const isLive = await HealthCheck.isLive()

  return isLive
    ? response.status(200).send({})
    : response.status(400).send({})
})
