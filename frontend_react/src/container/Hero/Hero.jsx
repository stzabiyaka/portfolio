import { motion } from 'framer-motion';
import { images, siteConstants } from '../../constants';
import './Hero.scss';

const scaleVariants = {
  whileInView: { scale: [0, 1], opacity: [0, 1], transition: { duration: 1, ease: 'easeInOut' } },
};

const { icons } = images;

const { circles } = siteConstants;

const Hero = () => {
  return (
    <div id="home" className="hero__container app__flex">
      <motion.div
        className="hero__info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero__badge">
          <div className="hero__badge-cmp app__flex">
            <span className="hero__badge-wave">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Stanislav</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="tag-text p-text">Full stack JavaScript developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="hero__image"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="Stanislav Zabiyaka" />
        <motion.img
          className="overlay__circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="hero__circles"
      >
        {circles.map((circle, index) => (
          <div className="hero__circle-cmp app__flex" key={`circle-${index}`}>
            <svg className="hero__circle-image" alt={`circle-${index}`}>
              <use href={`${icons}#icon-${circle}`} />
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
