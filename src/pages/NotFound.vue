<template>
  <main-layout>

    <section class="main-section">
    <div class="container">
      <h2 class="title-section">404 Not found !</h2>
    </div>
    </section>

  </main-layout>
</template>

<script>
import MainLayout from "@/layout/MainLayout";

export default {
  name: "NotFound",
  data() {
    return {
      notFound: false
    };
  },
  components: {
    MainLayout
  }
};
</script>
