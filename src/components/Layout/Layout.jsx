import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <nav className={css.navigation}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="movies">Movies</NavLink>
          </nav>
        </div>
      </header>
      <main className={css.main}>
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
