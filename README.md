# useEffect - run a function based on a second parameter (array)

- very commonly used for fetching data from an API
- first parameter is a function that you want to run
    -if you need to use async/await, Do Not make the anonymous function that you pass in to the useEffect asynchronous
    -instead, create an async/await function inside of the anonymous function and make sure you invoke the function
- second parameter is an array
    - if it is empty, the function will only run one time
    - the array can take in the name of state_variables and it will run the function anytime the state variable changes