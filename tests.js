// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit test for sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function (){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string \"Hello, Jane!\"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Jane!" when the string \"Jane"\ is passed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed the string \"Pat\" is passed', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return "Hello, World!" if nothing is passed', function (){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed true', function (){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, world!" when passed false', function (){
        expect(sayHello(false)).toBe("Hello World!");
    });
});
// Next, add expect(sayHello(true)).toBe("Hello, World!") to the tests.js file. Refresh to see the failing red test.
// Add just enough code to code.js to green that latest test. if (input === true) then return "Hello, World!"
// Now, add expect(sayHello(false)).toBe("Hello, World!") to the tests.js file. Refresh to see the failing test.
// Add just enough code to code.js to green this test.
// Once all the tests are green, identify refactor opportunities and refactor your solution.
// Are there any other edge cases you want to write a test for? You have a green light to add more of your own tests to "drive" the implementation.
// Some edge cases to consider. What if:
// the input is null?
// the input is an empty string like ""?
// the input is a number like 2.3?
// the input is a number inside a string like "5"?
// the input is another data type like an array, object, or function?

///changes