import {
  Hero,
  Footer,
  Nav,
  Services,
  Strategy,
  Team,
  Projects,
  Testimonials,
  FAQs,
} from "./components";

import "./App.css";
import { defineCustomElements } from "latamcomponents";
defineCustomElements();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      item: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function App() {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <Services />
        <Strategy />
        <Team />
        <Projects />
        <Testimonials />
        <FAQs />
      </main>

      <Footer />
    </>
  );
}

export default App;
