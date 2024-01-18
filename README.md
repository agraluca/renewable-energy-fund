# Customer Management Web Application

Welcome to the Renewable Energy Fund project. This README provides essential information about the project, including requirements, scripts, libraries, and design patterns used.

## Table of Contents

- [Renewable Energy Fund Application](#renewable-energy-fund-application)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation And Usage](#installation-and-usage)
      - [Usage](#usage)
  - [Libraries Used](#libraries-used)
    - [React Native](#react-native)
    - [TypeScript](#typescript)
    - [Nativewind](#nativewind)
    - [React Hook Form](#react-hook-form)
    - [Zod Validation](#zod-validation)
      - [Why Zod?](#why-zod)
  - [Data Management Approaches](#data-management-approache)
    - [Custom Hooks](#custom-hooks-for-segregation-of-logic-and-for-permission)
      - [Why Custom Hooks are employed](#why-custom-hooks-are-employed)
  - [Semantic Commits Convention](#semantic-commits-convention)
    - [Semantic Commits](#semantic-commits)
  - [License](#license)
  - [Next Steps](#next-steps)

## Getting Started

To get your project up and running, follow these steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

### Installation And Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/agraluca/renewable-energy-fund
   ```

2. Change to the project directory:

   ```bash
   cd renewable-energy-fund
   ```

3. Install project dependencies:

   ```bash
    yarn install
   ```

4. Run the application:

   ```bash
   yarn start
   ```

5. After everything is started press "a" to open Android simulator or "i" to open IOS simulator (Both of them needs to setup).

#### Usage

For testing purposes, check out the TESTING.md file.

## Libraries Used

### React Native

React Native is a widely used mobile framework that allows developer to create seamless apps for both Android and IOS

### TypeScript

TypeScript allows developers to define types for variables, parameters, and return values. This helps catch errors during development, as the compiler can identify type-related issues before the code is even run.

With static typing, code becomes more self-documenting and easier to understand. This leads to improved maintainability and reduces the likelihood of bugs related to type inconsistencies.

React Native is a widely used mobile framework that allows developer to create seamless apps for both Android and IOS

### Nativewind

Rapid Development: Nativewind allows developers to rapidly build user interfaces by providing a set of pre-designed utility classes. This eliminates the need for writing custom JCSS for common styles, resulting in faster development cycles.

Highly Customizable: While providing a default set of utility classes, Nativewind is highly customizable. Developers can easily extend or modify the default configuration to match the specific design requirements of their projects. This flexibility ensures that Nativewind doesn't impose a rigid structure on the design.

### React Hook Form

React Hook Form is a library used for form handling in the application. It simplifies form management and validation with React hooks. React Hook Form has been chosen for the following reasons:

- **Simplicity and Performance**: React Hook Form provides a simple and efficient way to manage form state and validation without the need for complex abstractions or additional components. It leverages React's hook system to minimize re-renders, resulting in better performance.

- **Minimal Boilerplate**: Unlike some other form libraries, React Hook Form minimizes the amount of code you need to write to achieve form functionality. This reduces boilerplate code and makes the codebase cleaner and more maintainable.

- **Validation**: React Hook Form offers built-in validation support, allowing us to define validation rules easily. It supports both synchronous and asynchronous validation, making it versatile for various use cases.

### Zod Validation

The Zod library is utilized for input validation and schema management in the project. Zod provides a simple and type-safe way to define data validation schemas in TypeScript.

#### Why Zod?

Zod offers several advantages when it comes to data validation:

- **Type Safety:** Zod allows us to define validation schemas as TypeScript types, ensuring that the validation logic is type-safe and integrated seamlessly with the codebase.

- **Declarative Syntax:** Zod uses a declarative and intuitive syntax to define validation rules, making it easy to understand and maintain the validation logic.

- **Custom Error Messages:** Zod enables us to specify custom error messages for different validation failures, improving the clarity of error reporting to the users.

- **Rich Validation Features:** Zod supports a wide range of validation features, including required fields, data transformations, and complex data structures.

## Data Management Approache

I used zustand because of the easy implemantation and wide utilization by the community

### Custom Hooks for segregation of logic and for permission

#### Why Custom Hooks Are Employed

Custom hooks, a flexible and reusable pattern in React for encapsulating logic, are chosen for handling customer data for the following reasons:

1. **Modularity:** Custom hooks promote separation of concerns and encapsulation of logic related to customer data retrieval. This results in a more modular and maintainable codebase.

2. **Reusability:** The same logic for fetching and managing customer data can be easily reused in multiple components throughout the application by creating custom hooks.

3. **Simplified Components:** Custom hooks help maintain clean and focused components, as data-fetching logic is abstracted away from rendering and user interaction.

4. **Testing:** Custom hooks can be tested in isolation, simplifying the testing process for data-fetching and state management.

In summary, custom hooks is driven by the aim for a modular, maintainable, and efficient approach to data management. These choices contribute to a well-organized and scalable codebase, enhancing the development experience and user interaction in the application.

### Semantic Commits Convention

Semantic Commits is commit message conventions that aim to provide a structured and informative commit history. Let's discuss some advantages of using Semantic commits:

#### Semantic Commits

- **Semantic Meaning:** Semantic Commits use a predefined structure in commit messages, such as `<type>: <description>`. The `<type>` typically represents the category of the change (e.g., `feat` for a new feature or `fix` for a bug fix).

- **Widely Adopted:** Semantic Commits have gained popularity and are widely adopted in the software development community. Many tools and platforms support semantic commit messages.

- **Consistency:** The structured format of Semantic Commits promotes consistency in commit messages, making it easier to automate tasks like version bumping and release notes generation.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.

## Next Steps

1. **Connection with a backend:** Implement connection with a database to ensure that each time a user accesses the application, their data is up to date t. This step enhances user experience.

2. **Testing:** Implement testing to ensure the reliability and robustness of the application. Comprehensive test suites help catch and prevent potential issues early in the development process.

3. **CI/CD Pipeline:** Establish a Continuous Integration/Continuous Deployment (CI/CD) pipeline to automate the deployment and delivery of new application versions. CI/CD streamlines the release process, improving deployment speed and reliability.

These steps represent the ongoing commitment to building a secure, feature-rich, and user-friendly application.
