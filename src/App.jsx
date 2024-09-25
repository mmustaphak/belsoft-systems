import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import MyWork from "./components/MyWork";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Services />
        <MyWork />
        <Footer />
      </Layout>
    </>
  )
}

