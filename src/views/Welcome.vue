<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Sign Up</h2>
      <SignupForm @signup="enterChat" />
      <p>Already have an account? <span @click="toggleForm">Login</span> now</p>
    </div>
    <div v-else>
      <h2>Log In</h2>
      <LoginForm @login="enterChat" />
      <p>
        Don't have an account yet? <span @click="toggleForm">Signup</span> now
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { useRouter } from "vue-router";

export default {
  name: "Welcome",
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const toggleForm = () => (showLogin.value = !showLogin.value);
    const enterChat = () => {
      router.push({ name: "chatroom" });
    };

    return { showLogin, toggleForm, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
  cursor: pointer;
}
</style>
