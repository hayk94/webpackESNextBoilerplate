import jquery from 'jquery'
import jsdom from 'jsdom'
import chai from 'chai'
import chaiJquery from 'chai-jquery'

// Set up testing environment to run like a browser in the command line
const { JSDOM } = jsdom
const { window } = new JSDOM('<!doctype html><html><body></body></html>')
const $ = jquery(window)

global.window = window
global.document = window.document
global.$ = $

chaiJquery(chai, chai.util, $)
