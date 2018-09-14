# React Quiz

In this activity, we will begin by installing a few helpful packages and then explore the React documentation to answer questions.

## Instructions

### Part 1

* Begin installing both the Create React App and Yarn packages globally by running the following command in your terminal:

`npm install -g create-react-app yarn`

### Part 2

* While those are installing, work with your group to answer each of the following questions using the [ReactJS Documentation](https://facebook.github.io/react/):

1. In the previous section we just installed two packages, Create React App and Yarn. What are they for?

* Yarn is a new package manager for Javascript, help developers manage dependencies.  The create-app-react is a global command line utility that you use to create new projects

2. What are some benefits of using ReactJS?

* Benefits: react update and render the right components when your data changes

3. What is a React component? Hint: Check the "Components and Props" section of the React documentation.
*  The different sections of an application , split UI that works independently from

4. What is the significance of the `ReactDOM.render` method? Hint: Check the "ReactDOM" section of the documentation.

* -  To render react element into a root DOM node.
      - Once you created react element,you can't change it's child

5. What is JSX? Why does Facebook recommend using it? Hint: Check the "Introducing JSX" section of the documentation.

* A JS syntax extension that works with React to describe what the UI should look like. It produces React elements. Combines different tech parts into components.
* HTML you can use in javascript, better than jquery

6. What does Facebook recommend as the “best way to start building a new React single page application”? Hint: Check the "Installation" section of the React documentation.

* A regular HTML page with script tags.

7. What is Babel? And what role does it play in converting JSX into vanilla JavaScript? Hint: Check the "Introducing JSX" section of the documentation.

* Babel compiles JSX down to React.createElement() calls. This prevents injection from happening

8. What is the significance of { } curly braces in JSX? Hint: Check the "Introducing JSX" section of the documentation.

* Seems to be the method for declaring a variable and using it with JSX. Reminds me of handlebars

9. What is a component prop? Hint: Check the "Components and Props" section of the React documentation.

    *Prop is short for propery, it is a plain JavaScript object. props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
