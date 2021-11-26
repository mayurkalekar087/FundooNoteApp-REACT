import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Link,
  } from "@material-ui/core";
  import "./login.scss";
  import FormControlLabel from "@material-ui/core/FormControlLabel";
  import Checkbox from "@material-ui/core/Checkbox";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  
  const Login = () => {
    const validationSchema = Yup.object().shape({
      Email: Yup.string()
        .email("Please Enter valid Email !!")
        .required("Email is required !!"),
      password: Yup.string().required("Required"),
    });
    return (
      <Grid className="display-center">
        <Paper elevation={8} className="paperStyle">
          <Grid align="center">
            <h2>
              <span className="txtStyle">F</span>
              <span className="txtStyle2">u</span>
              <span className="txtStyle">n</span>
              <span className="txtStyle3">d</span>
              <span className="txtStyle">o</span>
              <span className="txtStyle2"> N</span>
              <span className="txtStyle3">o</span>
              <span className="txtStyle">t</span>
              <span className="txtStyle2">e</span>
            </h2>
            <h2>Sign In</h2>
          </Grid>
          <Formik
          initialValues={{ Email: "", Password: "" }}
          onSubmit={(value, props) => {
            console.log(value);
            console.log(props);
          }}
          validationSchema={validationSchema}
          >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="Email"
                name="Email"
                variant="outlined"
                fullWidth
                required
                className="tfStyle"
                helperText={<ErrorMessage name="Email" />}
              />

              <Field
                as={TextField}
                label="Password"
                name="Password"
                variant="outlined"
                type="password"
                fullWidth
                required
              />
              <Field
                as={FormControlLabel}
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className="buttonStyle"
                fullWidth
              >
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
          <Typography className="typoStyle">
            <Link href="#">Forgot password</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?
            <Link href="#">
              <span> Create account </span>
            </Link>
          </Typography>
        </Paper>
      </Grid>
    );
  };
  
  export default Login;