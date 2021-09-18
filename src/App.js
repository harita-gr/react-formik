import "./App.css";
import YouTubeForm from "./components/YouTubeForm";
import YouTubeFormUseFormik from "./components/YouTubeFormUseFormik";

function App() {
  return (
    <div className="App">
      {/* 1. Simple Form */}
      {/* <YouTubeForm /> */}

      {/* 2. useFormik */}
      <YouTubeFormUseFormik />

    </div>
  );
}

export default App;
