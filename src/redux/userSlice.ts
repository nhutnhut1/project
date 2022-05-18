import { createSlice,  } from '@reduxjs/toolkit';
import {  } from './store';
import { userInfo } from './types';


const initialState: userInfo = {
  userName: "Nhut",
  fullName: "Phạm Minh Nhựt",
  phoneNumber: "07779907743",
  email: "nhutp49@gmail.com",
  password: "123456",
  role: 0,
  avatar: "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/251374287_946849012708805_4517610628801416846_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=e-0d1Ee51iYAX-Yj9_a&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-HrGRpcKr3rwTONfqNjkGKLY2s7L_tobhXjP-fTr3vIQ&oe=6289F3FD"
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

// To able to use reducers we need to export them.
// export const { } = userSlice.actions;

export default userSlice.reducer;
