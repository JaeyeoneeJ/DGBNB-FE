import Layout from "../components/Layout.jsx";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};
export default HomePage;
