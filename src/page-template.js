const generateMarkdown = (teamArray) => {
    console.log(teamArray);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <title>My Team</title>
  </head>
  <body>
        <header class="p-3 bg-danger text-white text-center">
            <h1>My Team</h1>
        </header>
        <main class="container">
            <div class="shadow col-md-3 card">
                <div class="card-body p-3 mb-2 bg-primary text-white">
                    <h5 class="card-title ">${teamArray[0].name}</h5>
                    <h5 class="card-text">Manager</h5>
                </div>
                <ul class="list-group  p-3  bg-light text-dark">
                    <li class="list-group-item">ID: ${teamArray[0].id}</li>
                    <a class="list-group-item" href = "mailto: ${teamArray[0].email}">Email: ${teamArray[0].email}</a>
                    <li class="list-group-item">Office number: ${teamArray[0].officeNumber}</li>
                </ul>
            </div>

            <div class="shadow col-md-3 card">
                <div class="card-body p-3 mb-2 bg-primary text-white">
                    <h5 class="card-title ">${teamArray[1].name}</h5>
                    <h5 class="card-text">Engineer</h5>
                </div>
                <ul class="list-group  p-3  bg-light text-dark">
                    <li class="list-group-item">ID: ${teamArray[1].id}</li>
                    <a class="list-group-item" href = "mailto: ${teamArray[1].email}">Email: ${teamArray[1].email}</a>
                    <a class="list-group-item" href = "https://www.github.com/${teamArray[1].github}" >GitHub: ${teamArray[1].github}</a>
                </ul>
            </div>

            <div class="shadow col-md-3 card">
                <div class="card-body p-3 mb-2 bg-primary text-white">
                    <h5 class="card-title ">${teamArray[2].name}</h5>
                    <h5 class="card-text">Intern</h5>
                </div>
                <ul class="list-group  p-3  bg-light text-dark">
                    <li class="list-group-item">ID: ${teamArray[2].id}</li>
                    <a class="list-group-item" href = "mailto: ${teamArray[2].email}">Email: ${teamArray[2].email}</a>
                    <li class="list-group-item">School: ${teamArray[2].school}</li>
                </ul>
            </div>
        </main>
  </body>
  </html>
`;
}

module.exports = generateMarkdown;