<template>
  <v-app>
    <div class="main-layout">
      <v-navigation-drawer v-model="sideNav" temporary class="aside">
        <div class="aside__user user-profile">
          <div class="user-profile__avatar">
            <img
              src="https://frontend-test-assignment-api.abz.agency/images/users/superstar.jpg"
              alt="John"
              class="aside__avatar"
            >
          </div>

          <div class="user-profile__descr user-profile__descr--left">
            <div class="user-profile__name user-profile__name--lg">Superstar</div>
            <div class="user-profile__contact user-profile__contact--lg">superstar@gmail.com</div>
          </div>
        </div>
        <v-divider></v-divider>

        <div class="aside__nav nav">
          <ul class="aside__nav-list nav__list">
            <li class="nav_item" v-for="item in menuItems" :key="item.title">
              <a class="aside__nav-link nav__link" href="#">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </v-navigation-drawer>

      <header class="header">
        <div class="header__container container">
          <a href="/" class="header__logo logo" title="Create website">
            <img
              :src="require('../assets/logo/logo.svg')"
              class="logo__img"
              height="24"
              width="134"
              aria-label="link to main page"
            >
          </a>

          <div class="header__nav hidden-xs-only" active-class="-active">
            <scrollactive
              active-class="active"
              :offset="80"
              :duration="800"
              bezier-easing-value=".5,0,.35,1"
              class="nav"
            >
              <ul class="nav__list">
                <li class="nav__item" flat v-for="item in menuItems" :key="item.title">
                  <a v-bind:href="item.link" class="scrollactive-item nav__link">{{ item.title }}</a>
                </li>
              </ul>
            </scrollactive>
          </div>

          <div v-if="loadInfo">Loading...</div>
          <div v-else class="header__user-profile user-profile">
            <div v-if="userIsAuthenticated" class="user-profile__info">
              <div class="user-profile__descr">
                <div class="user-profile__name">{{ info.name }}</div>
                <div class="user-profile__contact">{{ info.email }}</div>
              </div>

              <v-avatar size="40" class="user-profile__avatar">
                <img :src="info.photo" class="user-card__img" alt="John">
              </v-avatar>
            </div>

            <div v-else>LogIn</div>

            <div v-if="userIsAuthenticated" class="user-profile__btn">
              <a class="btn-icon btn-icon--logout" href="#">
                <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <g fill-rule="nonzero">
                    <path
                      d="M9.8 18.12a.31.31 0 0 1 0-.2c0-.06 0-.11-.11-.14-.11-.03-.12-.07-.12-.09 0-.02-.06 0-.18 0H4.41a2.35 2.35 0 0 1-1.73-.72A2.35 2.35 0 0 1 2 15.18V4.41a2.35 2.35 0 0 1 .72-1.73A2.35 2.35 0 0 1 4.41 2h4.9a.45.45 0 0 0 .31-.1.48.48 0 0 0 .15-.3 2.58 2.58 0 0 0 .05-.36v-.4-.31a.45.45 0 0 0-.17-.38.46.46 0 0 0-.34-.15h-4.9a4.27 4.27 0 0 0-3.12 1.29A4.27 4.27 0 0 0 0 4.41v10.77a4.25 4.25 0 0 0 1.29 3.12 4.27 4.27 0 0 0 3.12 1.29h4.9a.45.45 0 0 0 .31-.1.43.43 0 0 0 .15-.3 2.58 2.58 0 0 0 .05-.36v-.4c0-.16-.02-.27-.02-.31z"
                    ></path>
                    <path
                      d="M23.71 9.11L15.38.78a1 1 0 0 0-1.38 0 .92.92 0 0 0-.3.69v4.41H6.86a1 1 0 0 0-1 1v5.87a1 1 0 0 0 1 1h6.85v4.41a.92.92 0 0 0 .3.69 1 1 0 0 0 1.37 0l8.33-8.33a1 1 0 0 0 0-1.37v-.04z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div class="header__burger">
            <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
          </div>
        </div>
      </header>

      <main class="main">
        <slot></slot>
      </main>

      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
const axios = require("axios");
export default {
  name: "MainLayout",
  components: {
    Footer
  },
  data() {
    return {
      sideNav: false,
      info: null,
      loadInfo: true,
      errored: false,
      msg: ""
    };
  },
  mounted() {
    axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/users/1")
      .then(response => (this.info = response.data.user))
      .catch(error => {
        this.errored = true;
        this.msg = error;
      })
      .finally(() => (this.loadInfo = false));
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          {
            title: "About me",
            link: "#about"
          },
          {
            title: "Relationships",
            link: "#relationships"
          },
          {
            title: "Requirements",
            link: "#requirements"
          },
          {
            title: "Users",
            link: "#users"
          },
          {
            title: "Sign Up",
            link: "#sign-up"
          }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return true;
    }
  }
};
</script>

<style lang="sass">

</style>
