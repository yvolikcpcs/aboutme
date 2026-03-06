import ContactInfo from "@/components/ContactInfo";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Languages from "@/components/Languages";
import TechnicalSkills from "@/components/TechnikalSkills";

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <Header />
        <main>
          <ContactInfo />
          <TechnicalSkills />
          <Experience />
          <Education />
          <Languages />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;