
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
