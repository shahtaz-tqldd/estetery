import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routes';

function App() {
  return (
    <div className='bg-[#eee]'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
