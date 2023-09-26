<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { watch } from "vue";

import NavBar from "@/components/NavBar.vue";
import NewChatForm from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";

import getUser from "@/composables/getUser";

export default {
  components: { NavBar, NewChatForm, ChatWindow },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });
  },
};
</script>

<style></style>
