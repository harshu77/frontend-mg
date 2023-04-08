import { Redirect, Route } from "react-router-dom";
import SignIn from "../../components/Authetication/SignIn";

const RoutesAuth = () => {
  return (
    <>
      {" "}
      <Route path="/signup" component={SignIn} exact />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
    </>
  );
};

export default RoutesAuth;
