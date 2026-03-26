import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import FacialRecognition from "@/components/FacialRecognition";
import FaceRecognitionDemo from "@/components/FaceRecognitionDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      {/* <FacialRecognition /> */}
      <FaceRecognitionDemo />
      <Footer />
    </>
  );
}
