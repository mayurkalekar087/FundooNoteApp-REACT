import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forgotPassword.scss";
import Title from "../../component/title/title";

const Forgot = () => {
  const initialValues = {
    Email: "",
  };

  const onSubmits = (values, props) => {
    console.log(values);
    console.log(props);
  };

  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .email("Please Enter valid Email !!")
      .required("Email is required !!"),
  });

  return (
    <Grid className="display-center">
      <Paper elevation={8} className="paperStyleFP">
        <Grid align="center">
          <Title />
          <h3 className="fontDesign">Find your email</h3>
          <h4 className="fontDesign">Enter your recovery email</h4>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmits}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="Email"
                name="Email"
                variant="outlined"
                fullWidth
                className="tfStyle"
                helperText={<ErrorMessage name="Email" />}
              />

              <Grid container className="buttonStyle1" sm={12}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Next
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Forgot;