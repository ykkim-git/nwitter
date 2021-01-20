# Nwitter

## clone twitter with React and Firebase

---

## create app

```js
npx create-react-app <project-name>
```

## firebase

1. 프로젝트 만들기
2. 앱에 추가하기 (웹 선택)
3. Firebase SDK 설치하기
4. npm install --save firebase
5. firebase config 코드 옮기기 in fbase.js
6.

```js
in fbase.js

import firebase from "firebase/app";
... config code

export default firebase.initializeApp(firebaseConfig);
```

7. env 파일 만들어서 설정해주기

---

## Router Setup

> npm i react-router-dom

### 프로젝트 구조

components <br>
&nbsp; ㄴ App.js <br>
&nbsp; ㄴ Router.js <br>

routes <br>
&nbsp; ㄴ Auth.js <br>
&nbsp; ㄴ EditProfile.js <br>
&nbsp; ㄴ Home.js <br>
&nbsp; ㄴ Profile.js <br>

```js
import { HashRouter as Router, Route, Switch } from "react-router-dom";
```

---

## Absolute import

```js
in jsconfig.json

{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

**before**
import AppRouter from "./Router";

**after**
import AppRouter from "components/Router";


```

## Using Firebase Auth

```js
in fbase.js
export const authService = firebase.auth();

in App.js
import { authService } from "fbase.js";

**currentUser**
const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

```

---

## using github auth

1. Firesbase Authentication 페이지
2. 깃헙 setting -> developer applications -> OAuth Apps -> Register
3. Application name, Homepage URL(from firebase), callback URL(from firebase) 입력 후 Register
4. 만들어진 Cliend ID를 firebase에 입력
5. 완료

---

## Email 주소로 계정 만들기

```js
in form submit event

const onSubmit = async (event) => {
  event.preventDefault();
  try {
    let data;
    if (newAccount) {
      // create account -> 성공 후 바로 로그인
      data = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
    } else {
      // email login
      data = await authService.signInWithEmailAndPassword(email, password);
    }
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
```

firebase user탭에 유저가 추가되고,
chrome 개발자도구에서 Application -> Storage -> IndexedDB ->
firebaseLocalStorage 안에 계정 정보가 저장된다.

---

## onAuthStateChanged: 계정생성 후 사용자의 로그인 상태의 변화를 관찰하는 관찰자

```js
useEffect(() => {
  // 컴포넌트가 mount되었을 때 실행됨

  // 사용자의 로그인 상태의 변화를 관찰하는 관찰자
  authService.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(true);
    }
    setInit(true);
  });
}, []);
```

---

## Social Login

```js
in fbase.js
export const firebaseInstance = firebase;

in Auth.js
 const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    await authService.signInWithPopup(provider);
  };

**google, github 로그인 완료**
```
