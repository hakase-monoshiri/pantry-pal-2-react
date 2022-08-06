import './App.css';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pantry Pal</h1>
      </header>

    <Routes>
      <Route path="/signup" element={< SignUp />} />
    </Routes>

    </div>
  )
}

export default App;
