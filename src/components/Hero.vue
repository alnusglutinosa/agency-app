<template>
  <section class="main-section hero">
    <div class="hero__container container">
      <div class="hero__content">
        <h1 class="hero__title">{{ hero.title }}</h1>
        <h2 class="hero__descr" v-html="hero.descr"></h2>
        <a href="#sign-up" class="hero__btn btn">{{ hero.btn }}</a>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      hero: {
        title: "Test assignment for Frontend Developer position",
        descr:
          'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. <span class="hero__descr-secondary"> Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!<span>',
        btn: "Sign Up"
      }
    };
  }
};
</script>
