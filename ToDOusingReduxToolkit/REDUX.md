# Steps to use Redux

1. Create Store in src folder create an app folder and add file store.js , import & export configureStore from @reduxjs/toolkit.

2. Create Reducers in src folder create a feature folder than create a todo folder inside the feature folder create file with any name just add Slice in last (REDUX NAMING CONVENTION).
 - import necessary packages like {createSlice, nanoid} from @reduxjs/toolkit.
 - create initial state using initialState keyword
 - Create a slice by calling the createSlice() function and passing an object with three properties:
 1. name (name of your reducer).
 2. initial state.
 3. reducers which is another property in the createSlice() function that takes an object where each key represents an action type and its value.
  - property (i.e addTodo) consist two thing property and action
 