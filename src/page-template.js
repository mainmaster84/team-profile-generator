const generateMarkdown = () => {
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
                <div class="card-body p-3 mb-2 bg-primarytime text-white">
                    <h5 class="card-title ">Manager Name</h5>
                    <h5 class="card-text">Manager</h5>
                </div>
                <ul class="list-group  p-3  bg-light text-dark">
                    <li class="list-group-item">ID: Manager ID</li>
                    <a class="list-group-item" href = "mailto: Manager Email">Email: Manager Email</a>
                    <li class="list-group-item">Office number: Manager Office Number</li>
                </ul>
            </div>

            <div class="shadow col-md-3 card">
                <div class="card-body p-3 mb-2 bg-primary text-white">
                    <h5 class="card-title ">Engineer Name</h5>
                    <h5 class="card-text">Engineer</h5>
                </div>
                <ul class="list-group  p-3  bg-light text-dark">
                    <li class="list-group-item">ID: Engineer ID</li>
                    <a class="list-group-item" href = "mailto: Engineer Email">Email: Engineer Email</a>
                    <a class="list-group-item" href = "https://www.github.com/" >GitHub: Engineer Github</a>
                </ul>
            </div>

            <div class="shadow col-md-3 card">
                <div class="card-body p-3 mb-2 bg-primary text-white">
                    <h5 class="card-title ">Intern Name</h5>
                    <h5 class="card-text">Intern</h5>
                </div>
                <ul class="list-group  p-3  bg-light text-dark">
                    <li class="list-group-item">ID: Inten ID</li>
                    <a class="list-group-item" href = "mailto: Intern Email">Email: Intern Email</a>
                    <li class="list-group-item">School: Intern School</li>
                </ul>
            </div>
        </main>
  </body>
  </html>
`;
}

module.exports = generateMarkdown;