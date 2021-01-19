# Nwitter
## clone twitter with React and Firebase

___

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

___

## Router Setup
> npm i react-router-dom

### 프로젝트 구조
components <br>
  &nbsp; ㄴ App.js <br>
  &nbsp; ㄴ Router.js <br>

routes <br>
  &nbsp; ㄴ  Auth.js <br>
  &nbsp; ㄴ EditProfile.js <br>
  &nbsp; ㄴ Home.js <br> 
  &nbsp; ㄴ Profile.js <br>

```js
import { HashRouter as Router, Route, Switch } from "react-router-dom"
```

___

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