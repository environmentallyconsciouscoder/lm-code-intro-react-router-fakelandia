import { Outlet } from 'react-router-dom';
import NavBar from '../features/nav_bar/nav_bar';
import { routes } from '../router/routes';

const MainLayout: React.FC = () => {
  return (
    <div>
      <NavBar heading="Fakelandia App" routes={routes} />
      <Outlet />
    </div>
  );
};

export default MainLayout;