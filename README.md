# Simbio Experimental

Simbio Experimental is a Next.js project designed to experiment with various modern web development technologies and tools. This project includes features like Docker for development and production environments, integration with Nginx, and a focus on maintainable and scalable code practices.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Docker Setup](#docker-setup)
  - [Development](#development)
  - [Production](#production)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Donations](#donations)
- [License](#license)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v20.3.1 or higher)
- [pnpm](https://pnpm.io/) (recommended for package management)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abutahermuhammad/simbio-experimental.git
   cd simbio-experimental
   ```

2. Install the project dependencies:

   ```bash
   pnpm install
   ```

## Usage

To start the development server, use the following command:

```bash
pnpm dev
```

Your Next.js project should be accessible at `http://localhost:3000/` in your web browser.

## Docker Setup

### Development

To run the project using Docker in a development environment:

1. Build and start the Docker containers:

   ```bash
   docker-compose up --build
   ```

2. Access the development server at `http://localhost:3000/`.

### Production

To set up the project for production using Docker:

1. Build and start the production Docker containers:

   ```bash
   docker-compose -f docker-compose.prod.yaml up --build
   ```

2. Access the production server at `http://localhost`.

## Scripts

The project includes a set of useful scripts defined in `package.json`:

- `commit`: Commit your changes using conventional commit messages.
- `dev`: Start the development server.
- `build`: Build the project for production.
- `start`: Start the production server.
- `lint`: Run lint checks.
- `lint:check`: Check for linting errors.
- `lint:fix`: Automatically fix linting issues.
- `format:check`: Check for code formatting issues.
- `format:fix`: Automatically fix code formatting issues.
- `commitlint`: Use commitlint to check and format your commit messages.
- `test`: Run the test suite.

## Linting and Formatting

This project includes tools for linting and formatting to maintain code quality. Use the following commands to check and fix code issues:

- `pnpm lint`: Check for linting errors.
- `pnpm lint:fix`: Automatically fix linting issues.
- `pnpm format:check`: Check for code formatting issues.
- `pnpm format:fix`: Automatically fix code formatting issues.

## Deployment

For deploying the project to a production environment, follow the instructions provided in the [Docker Setup](#docker-setup) section under "Production".

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Echarts](https://echarts.apache.org/)
- [Formik](https://formik.org/)
- [Nginx](https://www.nginx.com/)

## Contributing

We welcome contributions to Simbio Experimental! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

Please make sure your code follows the project's coding standards and conventions.

## Contributors

- **[Your Name](https://github.com/yourusername)** - _Initial work_

See also the list of [contributors](https://github.com/yourusername/simbio-experimental/contributors) who participated in this project.

## Donations

If you find this project helpful and would like to support its development, consider making a donation:

- [Buy Me a Coffee](https://www.buymeacoffee.com/yourusername)
- [PayPal](https://www.paypal.me/yourusername)

## License

This project is licensed under the [MIT License](LICENSE).

```

Feel free to customize this `README.md` further with any specific details related to your project.
```
