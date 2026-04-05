import { LanguageProvider } from './context/LanguageContext';
import Header   from './components/layout/Header/Header';
import Footer   from './components/layout/Footer/Footer';
import Hero      from './components/sections/Hero/Hero';
import Strip     from './components/sections/Strip/Strip';
import About     from './components/sections/About/About';
import Products  from './components/sections/Products/Products';
import Features  from './components/sections/Features/Features';
import Nutrition from './components/sections/Nutrition/Nutrition';
import Contact   from './components/sections/Contact/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Strip />
        <About />
        <Products />
        <Features />
        <Nutrition />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

