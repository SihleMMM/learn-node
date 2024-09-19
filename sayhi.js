//CommonJS, every file is module (by default)
//modules - Encapsulated Code (only share minimum)
const names = require('./1names')
const names = require('./3modules')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


