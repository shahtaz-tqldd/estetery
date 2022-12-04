import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-[#eee]'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
