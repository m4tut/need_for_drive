// Store
import { useStore } from 'effector-react';
import { $storeLang } from '~processes/lang/model/store';

// Components
import { Fragment, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { AppSpin } from '~shared/ui/AppSpin';

// Config
import { ROUTES } from '~shared/routes';
import messages from '~processes/lang/config/messages';

function App() {
  const locale = useStore($storeLang);

  return (
    <BrowserRouter>
      <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]}>
        <Suspense fallback={<AppSpin color="#0ec261" />}>
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.path} path={route.path} element={<route.elements />} />
            ))}
          </Routes>
        </Suspense>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
