import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../TextError";

function FormikComponents() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data: ", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().trim().required("Required"),
    comments: Yup.string().trim().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikComponents;
