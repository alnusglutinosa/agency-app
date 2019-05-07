<template>
  <section class="main-section users" id="users">
    <div class="users__container container">
      <h2 class="users__title title-section">Our cheerful users</h2>
      <h3 class="users__sub-title sub-title">
        Attention! Sorting users
        <span class="sub-title__block">by registration date</span>
      </h3>

      <div class="users__content">
        <div class="users__list">
          <div v-for="item in users" :key="item.id" class="users__item user-card">
            <div class="user-card__img">
              <v-avatar size="70">
                <img :src="item.photo" class="user-card__img" alt="user photo">
              </v-avatar>
            </div>

            <div class="user-card__info">
              <h4 class="user-card__title">{{ item.name }}</h4>
              <div class="user-card__descr">{{ item.position }}</div>
              <div class="user-card__descr">{{ item.email }}</div>
              <div class="user-card__descr">{{ item.phone }}</div>
            </div>
          </div>
        </div>

        <div class="users__btn">
          <div v-if="isLoading">
            <p>Load users...</p>
          </div>
          <button v-if="urlGetUsers" @click="showMore" class="btn btn--light">Show more</button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { bus } from "../main";

const axios = require("axios");
export default {
  data() {
    return {
      users: [],
      info: null,
      loadInfo: true,
      errorText: "",
      isLoading: false,
      urlGetUsers:
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
    };
  },
  created() {
    this.loadUsers();

    bus.$on("updateUsers", data => {
      this.urlGetUsers =
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";
      this.users = [];
      this.loadUsers();
    });
  },
  methods: {
    loadUsers: function() {
      axios
        .get(this.urlGetUsers)
        .then(response => {
          this.users = this.users.concat(response.data.users);
          this.urlGetUsers = response.data.links.next_url;
        })
        .catch(error => {
          this.errorText = error;
        })
        .finally(() => (this.loadInfo = false));
    },
    showMore: function() {
      this.loadUsers();
    }
  }
};
</script>