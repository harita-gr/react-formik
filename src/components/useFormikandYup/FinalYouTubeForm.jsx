//Reducing Boilerplates

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function FinalYouTubeForm() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data: ", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().trim().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FinalYouTubeForm;
