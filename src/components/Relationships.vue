<template>
  <section class="main-section  relationships" id="relationships">
    <div class="relationships__container container">
      <h2 class="relationships__title title-section">About my relationships with <span class="relationships__title-block">web-development</span></h2>
      
      <div 
      class="relationships__content">

      <div 
        v-for="post in relationshipsList" :key="post.title"
        class="relationships__item post"
      >
          <div class="post__img-wrap">
            <v-img
                :src="require(`@/assets/imgs/${post.icon}`)"
                class="my-3"
                contain
                width="98"
                height="111"
                position: left
                alt="relationship"
            ></v-img>
          </div>
          <div class="post__text-wrap">
            <h3 class="post__title  post__title--mb">{{ post.title }}</h3>
            <div class="post__descr  post__descr--mb0">
              <p v-html="post.descr"></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script>
export default {
   data() {
    return {
      tete: "html.svg",
      relationshipsList: [
        { 
          icon: "html.svg", 
          title: "I'm in love with HTML", 
          descr: "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications." 
          },
        { 
          icon: "css.svg", 
          title: "CSS is my best friend", 
          descr: "Cascading Style Sheets (CSS) <span class=\"text-block-md\">is a style sheet language used for describing the presentation of a <span class=\"text-block-md\">document written in a markup <span class=\"text-block-md\">language like HTML.<span>" 
          },
        { 
          icon: "javascript.svg", 
          title: "JavaScript is my passion", 
          descr: "JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and <span class=\"text-block-md\">multi-paradigm.</span>" 
          }
      ]
    };
  }
};
</script>
