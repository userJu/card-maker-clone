import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
//만약 fileinput이라는 것이 다른 서비스나 다른것들을 인젝트 받는다면 그냥 FIleinput 한군데서만 추가하는게
// 편해서 밑 component에서는 변경하지 않아도 된다.
// 쓸대없이 많은 서비스를 전달하지 않아도 되고
// fileinput이 서비스를 추가해야 한다면 여기서만 고칠 수 있다.

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
    {/* component props의 경우에는 대문자로 시작되는 경우가 많다 */}
  </React.StrictMode>,
  document.getElementById("root")
);
