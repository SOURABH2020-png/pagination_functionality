import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import authLayout from './routes';

export default function App() {

  const routes = [...authLayout]

  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({ name, path, component: C }, key) => {
            return (
              <Route key={key} name={name} path={path} element={<C />} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}