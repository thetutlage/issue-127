'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Routes helps you in defining http endpoints/urls which will be used
| by outside world to interact with your application. Adonis has a
| lean and rich router to support various options out of the box.
|
*/
const Route = use('Route')

Route.get('/', 'HomeController.index')
Route.post('/user', function  * (request, response) {
  const session = yield request.session.all()
  const body = yield request.all()
  response.ok({body, session})
})
