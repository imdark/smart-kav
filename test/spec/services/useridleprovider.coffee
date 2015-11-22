'use strict'

describe 'Service: Useridleprovider', () ->

  # load the service's module
  beforeEach module 'angularApp'

  # instantiate service
  Useridleprovider = {}
  beforeEach inject (_Useridleprovider_) ->
    Useridleprovider = _Useridleprovider_

  it 'should do something', () ->
    expect(!!Useridleprovider).toBe true
