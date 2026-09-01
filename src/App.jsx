import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Start from './components/Start';
import Submit from './components/Submit';
import { QuizProvider } from './context/QuizContext';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/start",
      element: <Start />
    },
    {
      path: "/start/submit",
      element: <Submit />
    }
  ]);

  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  )
}

export default App
