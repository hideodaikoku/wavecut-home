import Header from "./header";
import Navbar from './navbar';
import styles from "../styles/layout.module.scss";

const Layout = ({ children, siteTitle, home }) => {
  return (
    <div className={styles.container}>
      <Header/>
        {children}
      <Navbar/>
    </div>
  );
};
export default Layout;
