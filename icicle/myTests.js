//write tests here
var saySomthing = describe('#saySomthing', function() {
  return it('Should say hello', function() {
    return expect(saySomthing('Hello')).toEqual('You said: Hello');
  });
});

var arrayTest = describe('#array', function() {
  return it('should be an array', function() {
    return expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]);
  });
});

let lines = [
  //test variable names goes here
  saySomthing,
  arrayTest
];

for (line of lines) {
  let para = document.createElement('P');
  para.innerHTML = line;
  document.body.appendChild(para);
}
