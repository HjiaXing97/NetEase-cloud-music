import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "src/router";
import AppHeader from "src/components/AppHeader";
import AppFooter from "src/components/AppFooter";

const App = () => {
  return (
    <div className='App'>
      <AppHeader />
      <Suspense fallback='请稍等'>{useRoutes(routes)}</Suspense>
      <AppFooter />
    </div>
  );
};

export default App;
