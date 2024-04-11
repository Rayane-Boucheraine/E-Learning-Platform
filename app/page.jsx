import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Programs from "@/components/Home/Programs";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <main className="bg-[#E8EFF6]">
      <Header />
      <Hero />
      <Programs />
      <Footer />
    </main>
  );
}
