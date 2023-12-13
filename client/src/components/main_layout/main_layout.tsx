import { Outlet } from 'react-router-dom';
import NavBar from '../features/nav_bar/nav_bar';
import { routes } from '../router/routes';
import Footer from '../features/footer/footer';

const MainLayout: React.FC = () => {
  return (
    <div style={{ height: '100%'}}>
      <div style={{ height: '10%', display: "flex", backgroundColor: "lightgreen"}}>
        <NavBar heading="Fakelandia App" routes={routes} />
      </div>
      <div style={{ height: '70%'}}>
        <Outlet />
      </div>
      <div style={{ height: '20%', backgroundColor: "lightgreen"}}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;