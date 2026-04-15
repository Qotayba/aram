import { LanguageProvider } from './context/LanguageContext';
import Header         from './components/layout/Header/Header';
import Footer         from './components/layout/Footer/Footer';
import Strip          from './components/sections/Strip/Strip';
import Hero           from './components/sections/Hero/Hero';
import OurStory       from './components/sections/OurStory/OurStory';
import Quality        from './components/sections/Quality/Quality';
import TahiniBenefits from './components/sections/TahiniBenefits/TahiniBenefits';
import NewProducts    from './components/sections/NewProducts/NewProducts';
import Export         from './components/sections/Export/Export';
import PrivateLabel   from './components/sections/PrivateLabel/PrivateLabel';
import FAQ            from './components/sections/FAQ/FAQ';
import ContactUs      from './components/sections/ContactUs/ContactUs';

export default function App() {
  return (
    <LanguageProvider>
      <Strip />
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Quality />
        <TahiniBenefits />
        <NewProducts />
        <Export />
        <PrivateLabel />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

