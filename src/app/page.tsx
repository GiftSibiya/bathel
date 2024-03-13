// Imports
import Image from "next/image";

// Components
import Header from "../app/components/Header";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import Services from "../app/components/Services";
import About from "../app/components/About";
import Contact from "../app/components/Contact";

export default function Home() {
  return (
    <main className="">
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* -- */}
      {/* Header */}
      <div
        className="
      "
      >
        <Header />
      </div>
      {/* -- */}

      {/* About Us */}
      <div
        className="
      "
      >
        <About />
      </div>
      {/* -- */}
      {/* Services */}
      <div
        className="
      "
      >
        <Services />
      </div>
      {/* -- */}
      {/* Contact */}
      <div
        className="
      "
      >
        <Contact />
      </div>
      {/* -- */}
      {/* Footer */}
      <div
        className="
      "
      >
        <Footer />
      </div>
      {/* -- */}
    </main>
  );
}
