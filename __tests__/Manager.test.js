const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('Jake', 10, 'jake@yahoo.com', 1001);

  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.getRole()).toEqual('Manager');
});