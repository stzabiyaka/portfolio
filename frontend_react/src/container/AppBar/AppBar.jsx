import { images } from '../../constants';
import { Navbar } from '../../components';
import './AppBar.scss';

const AppBar = () => {
  return (
    <header className="appbar__container">
      <div className="logo">
        <img className="logo-image" src={images.logo} alt="Logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default AppBar;
