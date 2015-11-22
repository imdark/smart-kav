'use strict'

describe 'Directive: phase', () ->

  # load the directive's module
  beforeEach module 'angularApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<phase></phase>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the phase directive'
