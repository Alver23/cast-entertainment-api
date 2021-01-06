# Api Cas Entertainment

[![Coverage Status](https://coveralls.io/repos/github/Alver23/cast-entertainment/badge.svg?branch=master)](https://coveralls.io/github/Alver23/cast-entertainment?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/d0f97acf9c60b7f0795e/maintainability)](https://codeclimate.com/github/Alver23/cast-entertainment/maintainability)

Api Rest Para administrar eventos y registrar usuarios.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* Install [docker](https://www.docker.com/get-started)
* Install [git](https://git-scm.com/downloads)
* Install [nodejs](https://nodejs.org/es/download/)
* Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## Installing
To install cast entertainment api, follow these steps:

* Clone the source locally:
	```bash
	$ git clone https://github.com/Alver23/cast-entertainment-api.git
	$ cd cast-entertainment-api
	``` 

## Using with docker
To use cast entertainment api, follow these steps:

* Run the following command:
	```bash
	$ cd cast-entertainment-api
	$ ./docker-run.sh
	```

## Using with machine local
To use cast entertainment api, Note that the "Mysql" database container must be running,
then follow these steps:

* Enter the project folder:
	```bash
	$ cd cast-entertainment-api
	```
* Add the .env file:
	```bash
	$ touch .env
	```
* Installing dependencies:
	```bash
	$ npm i
	```
* Add environment variables:
	```bash
	$ npm run env:dev
	```
* Generate the application build:
	```bash
	$ npm run build
	```
* Run the migrations to create the tables: 
	```bash
	$ npm run db:migrate
	```
* If you do not have data in the application, run the migration of the seeders:
	```bash
	$ npm run db:seed
	```
* Initialize the application:
	```bash
	$ npm run start
	```

## Api documentation
* [Postman](https://documenter.getpostman.com/view/11861881/TVzLpzza)

## Contributing
To contribute to cast entertainment api, follow these steps:
1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors
* [@Alver23](https://github.com/Alver23) 📖

## Contact

If you want to contact me you can reach me at <viga.23@hotmail.com>.
