<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";

export default {
  components: { NavBar },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    watch(user, () => {
      if (!user.value) {
        console.log("Chatroom logout");
        router.push({ name: "welcome" });
      }
    });
  },
};
</script>

<style></style>
