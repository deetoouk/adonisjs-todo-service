import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import chalk, { Chalk } from 'chalk'

export default class LoggerMiddleware {
  public async handle ({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    var start = process.hrtime()

    await next()

    var end = process.hrtime(start)

    const { statusCode } = response.response

    let style: Chalk

    if (statusCode >= 500) {
      style = chalk.red
    } else if (statusCode >= 400) {
      style = chalk.yellow
    } else if (statusCode >= 300) {
      style = chalk.blue
    } else if (statusCode >= 200) {
      style = chalk.green
    } else {
      style = chalk.magenta
    }

    console.log(
      style(statusCode),
      '|',
      `${end[0]}s`,
      `${(end[1] / 1000000).toFixed(5)}ms`,
      '|',
      chalk.cyan(`${request.method()} ${request.url(true)}`),
    )
  }
}
