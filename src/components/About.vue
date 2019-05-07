<template>
  <section class="main-section about" id="about">
    <div class="about__container container">
      <h2 class="about__title title-section">Let's get acquainted</h2>
      <div class="about__content">
        <div class="about__img-wrap">
          <v-img
            :src="require('@/assets/imgs/man-mobile.svg')"
            class="about__img"
            contain
            max-width="289px"
            max-height="285px"
          ></v-img>
        </div>
        <div class="about__descr post">
          <h3 class="post__title">
            I am cool frontend
            <span class="post__title-block">developer</span>
          </h3>
          <div class="post__descr">
            <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
            <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
          </div>

          <a href="#sign-up" class="post__button btn btn--no-bg">Sign Up</a>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data: () => ({})
};
</script>
