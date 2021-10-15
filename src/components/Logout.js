import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props)=> {
  const { history } = props;
  useEffect(()=> {
      axiosWithAuth()
          .post('/api/logout')
          .then(res => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("username");
            history.push('/login');
          }).catch((err) => console.log(err.message));
  }, [history]);

    return(<div></div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
// ## Logout Authentication

// > _Add in the http requests needed to logout of the application._

// - [ ] In `Logout.js`, execute a http request to logout on mount. When the request is complete, the user's security token should be removed and the browser should redirect to the login page.
// - **[POST]** \* to `http://localhost:5000/api/logout`: returns the expired authentication information of the user.