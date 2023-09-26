import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

// Khi mới đăng nhập, khởi tạo là user vừa đăng nhập
const user = ref(projectAuth.currentUser);

// Mỗi khi stage thay đổi (login/logout/update..)
projectAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUser = () => {
  return {
    user,
  };
};

export default getUser;
