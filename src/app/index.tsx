import { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from '~shared/routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.elements />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
