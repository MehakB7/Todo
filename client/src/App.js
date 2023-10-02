import "./styles.css";
import { Header } from "./view/Header";
import { Section } from "./view/Section";
import { Footer } from "./view/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/srore";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Section />
        <Footer />
      </div>
    </Provider>
  );
}
