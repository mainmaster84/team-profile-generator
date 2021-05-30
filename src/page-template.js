generateMarkdown = () => {
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
  </body>
  </html>
`;
}

module.exports = generateMarkdown;