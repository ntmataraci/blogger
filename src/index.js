import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ExpandedPost from './component/ExpandedPost';
import AddPost from './component/AddPost';
import LoginScreen from './component/Login';
import SignUpScreen from './component/SignUp';
import AuthContext, {AuthProvider} from "./store/auth-context"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
 <Route path="/" element={<App/>}>
   <Route path=":postId" element={<ExpandedPost/>}/>
   <Route path="addpost" element={<AddPost/>}/>
   <Route path="/login" element={<LoginScreen/>}/>
   <Route path="/signup" element={<SignUpScreen/>}/>
 </Route>
  </Routes>
  </BrowserRouter>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


