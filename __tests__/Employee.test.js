const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Bob', 25, 'bob@yahoo.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining('@'));
  expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  expect(employee.getRole()).toEqual('Employee');
});