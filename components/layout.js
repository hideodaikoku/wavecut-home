import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <Footer/>
    </div>
  );
};
export default Layout;
