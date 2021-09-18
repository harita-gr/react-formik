import "./App.css";
import YouTubeForm from "./components/useFormikandYup/YouTubeForm";
import YouTubeFormUseFormik from "./components/useFormikandYup/YouTubeFormUseFormik";
import YouTubeFormUseFormikAndYup from "./components/useFormikandYup/YouTubeFormUseFormikAndYup";
import FinalYouTubeForm from "./components/useFormikandYup/FinalYouTubeForm";

function App() {
  return (
    <div className="App">
      {/* 1. Simple Form */}
      {/* <YouTubeForm /> */}

      {/* 2. useFormik */}
      {/* <YouTubeFormUseFormik /> */}

      {/* 3. useFormik and schema validation using Yup */}
      {/* <YouTubeFormUseFormikAndYup /> */}

      {/* 4. Reducing Boilerplates */}
      <FinalYouTubeForm />
      
    </div>
  );
}

export default App;
