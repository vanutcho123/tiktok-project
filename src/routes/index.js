//Layouts
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Feedback from "~/pages/Feedback";

//dùng cho routes mà không cần đăng nhập vẫn xem được
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/@:nickname",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
  {
    path: "/feedback",
    component: Feedback,
  },
];
//dùng cho việc đăng nhập tài khoản
const privateRoutes = [];
export { publicRoutes, privateRoutes };
