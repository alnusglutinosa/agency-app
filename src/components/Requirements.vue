<template>
  <section class="main-section requirements" id="requirements">
    <div class="requirements__container container">
      <h2 class="requirements__title title-section title-section--light">
        General requirements
        <span class="text-block-sm">for the test task</span>
      </h2>

      <div class="requirements__content">
        <div class="requirements__descr">
          <p>Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>

          <p>If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>

          <p>Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
        </div>

        <div class="requirements__img-wrap">
          <v-img
            :src="require('@/assets/imgs/man-laptop-v1.svg')"
            class="my-3"
            contain
            max-width="429"
            max-height="361"
          ></v-img>
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