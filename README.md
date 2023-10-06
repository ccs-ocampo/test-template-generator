# Test Template Generator PoC

Welcome to our GitHub project! This initiative harnesses the power of the OpenAI API to craft a versatile template for automation test scripts. Whether you're a seasoned developer or just starting your automation journey, this project aims to simplify the process of creating test scripts.


## Features

#### OpenAI Integration
By seamlessly integrating the OpenAI API, this project enables the creation of automated test scripts with ease.

#### Cypress Configuration
Our project is thoughtfully configured to work seamlessly with Cypress, a widely adopted end-to-end testing framework. This ensures that you can quickly get started with automating tests for your web applications.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Refer to [OpenAI Authentication](https://platform.openai.com/docs/api-reference/authentication) to understand how to generate your APIKey.

`OPENAI_API_KEY`

## Run Locally

Clone the project

```bash
  git clone https://github.com/ccs-ocampo/test-template-generator.git 
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Run the basic test generator template

```bash
    npm run test:generator:basic
```

or the login test generator

```bash
    npm run test:generator:login
```





## Contributing

We value your input! If you have ideas for improvements, encounter issues, or want to contribute to this project, please don't hesitate to open an issue or submit a pull request. 

