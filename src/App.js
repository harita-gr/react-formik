import "./App.css";
import YouTubeForm from "./components/useFormikandYup/YouTubeForm";
import YouTubeFormUseFormik from "./components/useFormikandYup/YouTubeFormUseFormik";
import YouTubeFormUseFormikAndYup from "./components/useFormikandYup/YouTubeFormUseFormikAndYup";
import FinalYouTubeForm from "./components/useFormikandYup/FinalYouTubeForm";

import FormikComponents from "./components/formikComponents/FormikComponents";
import NestedObjects from "./components/formikComponents/NestedObjects";
import Array from "./components/formikComponents/Array";
import FieldArrayComponent from "./components/formikComponents/FieldArrayComponent";

function App() {
  return (
    <div className="App">
      {/* LEVEL 1 - useFormik Hook */}

      {/* 1. Simple Form */}
      {/* <YouTubeForm /> */}

      {/* 2. useFormik */}
      {/* <YouTubeFormUseFormik /> */}

      {/* 3. useFormik and schema validation using Yup */}
      {/* <YouTubeFormUseFormikAndYup /> */}

      {/* 4. Reducing Boilerplates */}
      {/* <FinalYouTubeForm /> */}

      {/* LEVEL 2 - Formik Component */}

      {/*1. Formik,Form,Field,ErrorMessage */}
      {/* <FormikComponents /> */}

      {/* LEVEL 3 - Managing State of Form field */}

      {/*1. Nested Objects  */}
      {/* <NestedObjects /> */}

      {/*2. Array */}
      {/* <Array /> */}

      {/*3. FieldArray component */}
      <FieldArrayComponent />
    </div>
  );
}

export default App;
