# java_rest_api
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)  [![forthebadge](https://forthebadge.com/images/badges/made-with-java.svg)](http://forthebadge.com)

Create a CRUD api using java backend and a page to consume it.
This api let the user store its clients or employees in different companies with its age.
Actions  available:
- Create
- Read
- Update
- Delete

This project has been created to discover java backend development process and as a Proof Of Concept (POC)

### Requirements

* Install JAVA JEE
* Install an IDE
* Had one browser available (Chrome, Firefox, Safari)

### Install

```
git clone https://github.com/CedricTellier/java_rest_api.git
```

### Database

This project use two tables that must be created on you local machine:
- clients
- employees

Both have the same simple structure:
- id --> AUTO INCREMENTAL LONG NOT NULL
- firstname --> varchar NOT NULL
- lastname --> varchar NOT NULL
- company --> varchar NOT NULL
- age --> int NOT NULL

Please note that application.properties or other database config file must be correctly completed

## Created with

* [Java JEE](https://www.oracle.com/java/technologies/java-ee-glance.html) - BackEnd Process
* [Spring boot framework](https://spring.io/projects/spring-boot) - Backend Framework
* [Skeleton css](http://getskeleton.com/) - Front Css used for the page rendering
* [Postgresql](https://www.postgresql.org/) - Database Management

## Contributing

Contribution will be kindly encourage and greatly appreciated

## Authors

* **Cédric Tellier** _alias_ [@CedricTellier](https://github.com/CedricTellier)

## Deployment

This project is not host for the moment but will be in the future

## License

This Project is under MIT license and can be used for any purpose by anyone. See file [LICENSE.md](LICENSE.md) for more informations
