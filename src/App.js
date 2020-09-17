import React from "react";
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";

import Navbar from "./shared/Navbar";
import NotFound from "./pages/not-found";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Feed from "./pages/feed";
import Explore from "./pages/explore";
import ProfilePage from "./pages/profile";
import EditProfile from "./pages/edit-profile";
import { AuthContext } from "./auth";
import PostModal from "./components/PostModal";
import PostPage from "./pages/post-page";

function App() {
  const { authState } = React.useContext(AuthContext);
  console.log(authState);

  const history = useHistory();
  const location = useLocation();

  const previousLocation = React.useRef(location);
  const modal = location.state?.modal;

  React.useEffect(() => {
    if (history.action !== "POP" && !modal) {
      previousLocation.current = location;
    }
  }, [location, modal, history.action]);

  const isModalOpen = modal && previousLocation.current !== location;

  if (authState.status === "out") {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/login" component={Login} />
      </Switch>
    );
  }

  return (
    <>
      <Navbar />
      <Switch location={isModalOpen ? previousLocation.current : location}>
        <Route exact path="/" component={Feed} />
        <Route path="/explore" component={Explore} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/:username" component={ProfilePage} />
        <Route exact path="/p/:postId" component={PostPage} />
        <Route exact path="/accounts/edit" component={EditProfile} />
        <Route path="*" component={NotFound} />
      </Switch>
      {isModalOpen && <Route exact path="/p/:id" component={PostModal} />}
    </>
  );
}

export default App;
