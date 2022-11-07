import { useState } from 'react';
import { siteConstants } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { navLinks } = siteConstants;
  return (
    <nav className="navbar__container">
      <ul className="navbar__list">
        {navLinks.map(item => (
          <li className="app__flex p-text navbar__list-item" key={`link-${item}`}>
            <a className="navbar__link" href={`${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__menu-container">
        <HiMenuAlt4 className="navbar__menu-icon" onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            className="navbar__links-container"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX className="navbar__menu-icon--close" onClick={() => setToggle(false)} />
            <ul className="navbar__menu-list">
              {navLinks.map(item => (
                <li className="navbar__menu-item" key={item}>
                  <a
                    className="navbar__menu-link"
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
