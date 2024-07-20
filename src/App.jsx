import styles from "./App.module.css";

import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Stay } from "./components/Stay/Stay";
import { Dining } from "./components/Dining/Dining";
import { Footer } from "./components/Footer/Footer";
import { Events } from "./components/Events/Events";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <Stay />
      <Dining />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
