import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../../redux/store";
import Textbox from "../../Textbox/Textbox";
import "./userinfo.scss"
const imgUrl =
  "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/251374287_946849012708805_4517610628801416846_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=e-0d1Ee51iYAX-hPMjl&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT9H3mOF3QwazVbSmOnlQw1ANWzWkDN2DeioSkmLWTv7rA&oe=6289F3FD";

const UserInfo: React.FC = () => {
    const userInfo = useSelector((state : RootState) => state.user)
    return (
      <div className="app__layout-user-info">
        <div className="col">
          <div className="app__layout-user-info__avatar">
            <img src={userInfo.avatar} alt="" />
          </div>
          <div className="app__layout-user-info__name">{userInfo.fullName}</div>
        </div>
        <div className="col-flex">
          <Textbox label="Tên người dùng" value={userInfo.fullName}/>
          <Textbox label="Số điện thoại:" value={userInfo.phoneNumber}/>
          <Textbox label="Email:" value={userInfo.email}/>
        </div>
        <div className="col-flex">
          <Textbox label="Tên đăng nhập" value={userInfo.userName}/>
          <Textbox label="Mật khẩu" value={userInfo.password}/>
          <Textbox label="Vai trò" value={`${userInfo.role === 0 ? `Admin` : `Contributor`}`}/>
        </div>
      </div>
    );
  };

export default UserInfo;