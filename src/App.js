import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './Component/ProjectDetails/ProjectDetails';
import Home from './Component/Home/Home.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/projects:id' element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
