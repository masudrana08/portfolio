import './App.css';
import Home from './Components/Home/Home';
import { createContext } from 'react';

export const MyContext=createContext()

function App() {
  return (
    <MyContext.Provider>
      <Home></Home>
    </MyContext.Provider>
  );
}

export default App;
