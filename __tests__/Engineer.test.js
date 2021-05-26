const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
  const engineer = new Engineer('Ron', 10, 'ron@yahoo.com', 'mainmaster84');

  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
  expect(engineer.getRole()).toEqual('Engineer');
});