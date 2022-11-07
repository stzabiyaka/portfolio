import './App.scss';

import { About, AppBar, Hero, Footer, Skills, Testimonials, Work } from '../../container';

const App = () => {
  return (
    <div className="app">
      <AppBar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
