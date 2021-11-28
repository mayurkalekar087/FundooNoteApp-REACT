import React from "react";
import { Grid, Paper, TextField, Button,Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forgotPassword.scss";
import Title from "../../component/title/title";
import { useHistory,Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgot } from "../../services/api";

const Forgot = () => {
  const initialValues = {
    Email: "",
  };
  const history = useHistory();

  const onSubmits = (values, props) => {
    console.log(values);
    const data = {
        email: values.Email,
      };
      forgot(data)
        .then((res) => {
          // alert("Data submitted");
          setTimeout(() => {
            props.resetForm();
            history.push("#");
          }, 2000);
          toast.success("Email forgot password link sent succesfully ✔", {
            position: "top-center",
            autoClose: 2000,
          });
        })
        .catch((error) => {
          console.log(error);
        });
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

<Grid container spacing={0}>
                <Grid sm={6}>
                  <Typography className="buttonStyle11 ">
                    <Link className="textDecoration" to="/SignUp">
                      sign in instead ?
                    </Link>
                  </Typography>
                </Grid>
                <Grid container className="buttonStyle1" sm={6}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
      <ToastContainer />
    </Grid>
  );
};

export default Forgot;