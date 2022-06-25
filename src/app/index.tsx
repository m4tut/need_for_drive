// Components
import { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppSpin } from '~shared/ui/AppSpin';

// Config
import { ROUTES } from '~shared/routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppSpin color="#0ec261" />}>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={<route.elements />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
