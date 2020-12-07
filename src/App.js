import Header from "./components/Header";
import Footer from "./components/Footer";
import TextLecture from "./components/TextLecture";
import "./App.css";
import "./css/lesson.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <TextLecture />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
