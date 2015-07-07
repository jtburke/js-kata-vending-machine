# Vending Machine
Implement a magical vending machine.

# Rules
**No** static calls to methods  
**No** real implementations in unit Remtests **other than the class you’re testing**  
**Do not** change files with ```// DO NOT MODIFY``` on first line  
**Do not** change signature of:  
- MagicVendingMachine.insert(...)  
- MagicVendingMachine.requestProduct(...)  
- MagicVendingMachine.requestChange(...)  

# End goal
Get all tests in ```test/acceptance/acceptance-test.js``` to pass.

Change ```it.skip(...``` to ```it(...``` to un-ignore a test. http://mochajs.org/#inclusive-tests

However feel free to take it as far as you like.

# Additional Challenges
* [Primitive Obsession](https://sourcemaking.com/refactoring/primitive-obsession) - No strings, numbers, booleans, nulls or undefined (or arrays of these) in or returned from public interfaces 
* [ES6](http://es6-features.org/) - Use the most ES6 features.

# Setup/Running Tests
Install dependencies
```
npm install
```

Run tests
```
npm test
```

The test framework is [mocha](http://mochajs.org/) and the assertion library is [chai](http://chaijs.com/), 
[sinon](http://sinonjs.org/) and [sinon-chai](http://sinonjs.org/) have also been included for you. There is a 
helper.js file that includes mocha, chai, sinon and sinon-chai and sets up chai with the should style of assertions
to save you having to do it in each test file.

There should be some runnable configs for mocha in intellij. The project was created using IntelliJ 14 so it may or may 
not work for you. If you'd like to create your own mocha configs:

### All tests
Extra Mocha Options: ```"test/**/*-test.js" --compilers js:babel/register --require "test/helpers/helper.js"```

### Unit tests
Extra Mocha Options: ```"test/unit/**/*-test.js" --compilers js:babel/register --require "test/helpers/helper.js"```

### Acceptance tests
Extra Mocha Options: ```"test/acceptance/**/*-test.js" --compilers js:babel/register --require "test/helpers/helper.js"```


### There's some nice cheat sheets here:

http://ricostacruz.com/cheatsheets/chai.html  
http://ricostacruz.com/cheatsheets/sinon-chai.html
