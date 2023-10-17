# Test Template Generator PoC

Welcome to our GitHub project! This initiative harnesses the power of the OpenAI API to craft a versatile template for automation test scripts. Whether you're a seasoned developer or just starting your automation journey, this project aims to simplify the process of creating test scripts.


## Features

#### OpenAI Integration
By seamlessly integrating the OpenAI API, this project enables the creation of automated test scripts with ease.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPENAI_API_KEY`
`TEST_FRAMEWORK`
`COMMON_FEATURE`

Refer to [OpenAI Authentication](https://platform.openai.com/docs/api-reference/authentication) to understand how to generate your APIKey.


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

Run the test generator template

Indicate the framework to use
 ```bash
    TEST_FRAMEWORK=Cypress
```

Indicate the framework to use
 ```bash
    TEST_FRAMEWORK=Cypress
```

Enter the feature to test
 ```bash
    TEST_FRAMEWORK=Login
```

```bash
    npm run test:generator:basic
```
Test templates will be placed in /tests




## Contributing

We value your input! If you have ideas for improvements, encounter issues, or want to contribute to this project, please don't hesitate to open an issue or submit a pull request. 

