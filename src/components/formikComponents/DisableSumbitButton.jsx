import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "../TextError";

export default function DisableSumbitButton() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    phNumbers: [""],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data: ", values);
    onSubmitProps.setSubmitting(false);
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
      validateOnMount
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
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
            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            {/* <div className="form-control">
                          <label htmlFor="primaryPh">Primary Phone Number</label>
                          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                        </div>
                        <div className="form-control">
                          <label htmlFor="secondaryPh">Secondary Phone Number</label>
                          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                        </div> */}
            <div className="form-control">
              <label>List of Phone Numbers</label>
              <FieldArray name="phNumbers">
                {/* This fn will automatically get some props. Calling it as fieldArrayProps*/}
                {(fieldArrayProps) => {
                  // Let us see what does it contain
                  console.log("Field Array props", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  // to display phone numbers
                  return (
                    <div>
                      {phNumbers.map((phNo, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {/* remove button only if more than 1 ph no is there */}
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              {" "}
                              -{" "}
                            </button>
                          )}
                          <button type="button" onClick={() => push(index)}>
                            {" "}
                            +{" "}
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button type="submit" disabled={!(formik.dirty && formik.isValid && (!formik.isSubmitting))}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
