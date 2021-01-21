import React, { useEffect, useState } from "react";
import AppRouter from "components/Router.js";
import { authService } from "fbase.js";
import loader from "assets/loader.gif";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);

  // firebase가 프로그램을 초기화하길 기다리고, 로그인 되었을 때 isLoggedIn 값 변경
  useEffect(() => {
    // 컴포넌트가 mount되었을 때 실행됨

    // 사용자의 로그인 상태의 변화를 관찰하는 관찰자
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const loaderStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
  };
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        <img src={loader} alt="loader" style={loaderStyle} />
      )}
      {init ? (
        // <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
        <div></div>
      ) : null}
    </>
  );
}

export default App;
