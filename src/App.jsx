
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { lazy, Suspense } from 'react';

// import TasksPage from './pages/TasksPage';
// vamos a importar las paginas de manera perezosa lazyloading
const TasksPage = lazy(() => import("./pages/TasksPage"));

function App() {

  return (
    <>
      
      <Suspense fallback={<h2>Cargando...</h2>}>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tasks' element={<TasksPage />} />
        </Routes>

      </Suspense>
      
    
    
    
    
    </>
    


    
    
  );
}

export default App;
