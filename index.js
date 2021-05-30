const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptUser = () => {
  console.log(`
  =================
  Add a Manager
  =================
  `);  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name of Manager? (Required)',
      validate: managerNameInput => {
        if (managerNameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: 'Mangers ID? (Required)',
      validate: managerIdInput => {
        if (managerIdInput) {
          return true;
        } else {
          console.log('Please enter your ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Managers Email? (Required)',
      validate: managerEmailInput => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'officeNumber',
      message: 'Managers office number? (Required)',
      validate: managersOfficeNuberInput => {
        if (managersOfficeNuberInput) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
      }
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Engineer
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of Engineer? (Required)',
        validate: engineerNameInput => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'number',
        name: 'id',
        message: 'Engineers ID? (Required)',
        validate: engineerIdInput => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log('Please enter your ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Engineers Email? (Required)',
        validate: engineerEmailInput => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Engineers github? (Required)',
        validate: engineerGithubInput => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log('Please enter your github!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message:  'Would you like to add another Engineer?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

const promptProject2 = portfolioData => {
  console.log(`
=================
Add a New Intern
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of Intern? (Required)',
        validate: internNameInput => {
          if (internNameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'number',
        name: 'id',
        message: 'Interns ID? (Required)',
        validate: internIdInput => {
          if (internIdInput) {
            return true;
          } else {
            console.log('Please enter your ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Interns Email? (Required)',
        validate: internEmailInput => {
          if (internEmailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'Interns school? (Required)',
        validate: internSchoolInput => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log('Please enter your school!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message:  'Would you like to add another Intern?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject2(portfolioData);
      } else {
        return portfolioData;
      }
    });
};
promptUser()
  .then(promptProject)
  .then(promptProject2)
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in the dist directory to see it!');
    });
  });
