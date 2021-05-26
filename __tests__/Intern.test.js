const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
  const intern = new Intern('Dale', 10, 'dale@yahoo.com', 'UTA');

  expect(intern.school).toEqual(expect.any(String));
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
  expect(intern.getRole()).toEqual('Intern');
});