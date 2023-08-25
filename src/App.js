import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar titlename="MyTextUtils" abouttext="About me" />
      <div className="container mt-3">
        <Textform heading = "Enter your text here :"/>
      </div>
    </>
  );
}

export default App;
