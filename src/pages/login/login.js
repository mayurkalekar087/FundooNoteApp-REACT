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
  
  const Login = () => {
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
          <Grid className="tfStyle">
            <TextField label="Email" variant="outlined" fullWidth required />
          </Grid>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
          />
  
          <FormControlLabel
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