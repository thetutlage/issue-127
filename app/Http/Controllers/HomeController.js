'use strict'

class HomeController {

  * index (request, response) {
    const view = yield response.view('index')
    yield request.session.put('name', 'virk')
    response.send(view)
  }

}

module.exports = HomeController
