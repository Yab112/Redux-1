# React Application with createSlice

This documentation outlines the setup and configuration of a React application using traditional Redux methods with TypeScript and Tailwind CSS.

## 1. Set Up the Project

1. **Create a React App:**

    ```bash
    npx create vite@lattest typescript
    ```

2. **Install Dependencies:**

    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

3. **Install Tailwind CSS:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

    Update `tailwind.config.js` and `src/index.css` as described in the Tailwind CSS documentation.

## 2. Set Up Redux

1. **Create a Redux Slice:**

    Create a file called `counterSlice.ts` and add the following code:

    ```typescript
    import { createSlice } from '@reduxjs/toolkit';

    const counterSlice = createSlice({
        name: 'counter',
        initialState: { value: 0 },
        reducers: {
            increment: state => { state.value += 1; },
            decrement: state => { state.value -= 1; },
            incrementByAmount: (state, action) => { state.value += action.payload; }
        }
    });

    export const { increment, decrement, incrementByAmount } = counterSlice.actions;
    export default counterSlice.reducer;
    ```

2. **Configure the Store:**

    Create a file called `store.ts` and add the following code:

    ```typescript
    import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from './features/counter/counterSlice';

    export const store = configureStore({
        reducer: {
            counter: counterReducer
        }
    });

    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;
    ```

## 3. Create React Components

1. **Counter Component:**

    Create a file called `Counter.tsx` and add the following code:

    ```typescript
    import React from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { RootState, AppDispatch } from './app/store';
    import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

    const Counter = () => {
        const count = useSelector((state: RootState) => state.counter.value);
        const dispatch = useDispatch<AppDispatch>();

        return (
            <div>
                <h1>{count}</h1>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            </div>
        );
    };

    export default Counter;
    ```

## 4. Integrate Redux with React

1. **Update App Component:**

    Modify `App.tsx` to include the Redux Provider:

    ```typescript
    import React from 'react';
    import { Provider } from 'react-redux';
    import { store } from './app/store';
    import Counter from './features/counter/Counter';

    const App = () => {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    };

    export default App;
    ```

