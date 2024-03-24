import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { GlobalStyle } from '../../styles/GlobalStyles';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </>
  );
};

export default SharedLayout;
