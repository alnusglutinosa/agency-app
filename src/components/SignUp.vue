<template>
  <section class="main-section sign-up" id="sign-up">
    <div class="sign-up__container container">
      <h2 class="sign-up__title title-section">Register to get a work</h2>

      <h1 class="sign-up__sub-title sub-title">
        Attention! After successful registration and alert, update the list of users
        <span
          class="sub-title__block"
        >in the block from the top</span>
      </h1>

      <form @submit.prevent="onSignup" class="sign-up__form form-main">
        <div class="form-main__inputs">
          <div class="form-main__item">
            <label
              class="input-item"
              :class="{ 'is-active': user.name, 'is-error': $v.user.name.$error }"
            >
              <span class="input-item__title">Name</span>
              <input
                class="input-item__input"
                type="text"
                name="name"
                v-model="user.name"
                @blur="$v.user.name.$touch()"
              >
              <span class="input-item__text">Your name</span>
            </label>

            <div v-if="$v.user.name.$error" class="form-main__item-error error-text">
              <p v-if="!$v.user.name.required">Name is required</p>
              <p v-if="!$v.user.name.minLength">User name, should be 2-60 characters</p>
            </div>
          </div>

          <div class="form-main__item">
            <label
              class="input-item required"
              :class="{ 'is-active': user.email, 'is-error': $v.user.email.$error }"
            >
              <span class="input-item__title">Email</span>
              <input
                class="input-item__input"
                type="mail"
                name="email"
                v-model="user.email"
                @blur="$v.user.email.$touch()"
              >
              <span class="input-item__text">Your email</span>
            </label>

            <div v-if="$v.user.email.$error" class="form-main__item-error error-text">
              <p v-if="!$v.user.email.required">Email is required</p>
              <p v-if="!$v.user.email.email">Email is invalid</p>
            </div>
          </div>

          <div class="form-main__item">
            <label
              class="input-item required"
              :class="{ 'is-active': user.phone, 'is-error': $v.user.phone.$error || !$v.user.phone.alpha}"
            >
              <span class="input-item__title">Phone</span>
              <input
                class="input-item__input input-item__input--phone"
                v-model="user.phone"
                @blur="$v.user.phone.$touch()"
                name="phone"
                type="tel"
              >
              <span class="input-item__text">+38 (___) ___ __ __</span>
            </label>

            <div class="form-main__item-error error-text">
              <p v-if="!$v.user.phone.required && $v.user.phone.$error">Phone is required</p>
              <p v-if="!$v.user.phone.minLength || !$v.user.phone.maxLength">Phone invalid</p>
              <p
                v-if="!$v.user.phone.alpha && ($v.user.phone.minLength && $v.user.phone.maxLength)"
              >User phone number, should start with code of Ukraine +380</p>
            </div>
          </div>

          <div class="form-main__item form-main__item--select">
            <label
              class="input-item input-item--select required"
              :class="{ 'is-active': user.position, 'is-error': $v.user.position.$error }"
            >
              <v-select
                browserAutocomplete="off"
                item-text="name"
                item-value="id"
                v-bind:items="info"
                v-model="user.position"
                outline
                height="48"
                min-height="48"
              ></v-select>

              <span class="input-item__text">Select your position</span>
            </label>

            <div
              v-if="$v.user.position.$error"
              class="form-main__item-error error-text"
            >Select your position</div>
          </div>

          <div class="form-main__item">
            <label
              class="input-item input-item--file"
              :class="{ 'is-active': user.avatar, 'is-error': errors.avatar }"
            >
              <input
                @blur="onFileChange"
                @change="onFileChange"
                class="input-item__input input-item__input--file"
                type="file"
              >
              <button class="input-item__btn btn btn--light">
                <span class="btn__text btn__text--sm">Upload</span>
                <span class="btn__icon btn__icon--xs">
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#EF6C00" fill-rule="nonzero">
                      <path
                        d="M18.12 14.2a.31.31 0 0 1-.2 0c-.06 0-.11 0-.14.11-.03.11-.07.12-.09.12-.02 0 0 .06 0 .18V19.56A2.46 2.46 0 0 1 15.18 22H4.41a2.35 2.35 0 0 1-1.73-.72A2.35 2.35 0 0 1 2 19.59v-4.9a.45.45 0 0 0-.1-.31.48.48 0 0 0-.3-.15 2.58 2.58 0 0 0-.36-.05H.49a.45.45 0 0 0-.34.15.46.46 0 0 0-.15.34v4.9a4.27 4.27 0 0 0 1.29 3.12A4.27 4.27 0 0 0 4.41 24h10.77a4.4 4.4 0 0 0 4.41-4.41v-4.9a.45.45 0 0 0-.1-.31.43.43 0 0 0-.3-.15 2.58 2.58 0 0 0-.36-.05h-.71v.02z"
                      ></path>
                      <path
                        d="M9.11.29L.78 8.62a1 1 0 0 0 0 1.38.92.92 0 0 0 .69.3h4.41v6.85a1 1 0 0 0 1 1h5.87a1 1 0 0 0 1-1v-6.86h4.41a.92.92 0 0 0 .69-.3 1 1 0 0 0 0-1.37L10.48.29a1 1 0 0 0-1.37 0z"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>

              <span
                class="input-item__text input-item__text--file"
              >{{ user.avatar ? user.avatar.name : 'Upload your photo' }}</span>
            </label>

            <p class="form-main__item-help">File format jpg up to 5 MB, the minimum size of 70x70px</p>
            <p v-if="errors.avatar" class="form-main__item-error error-text">{{ errors.avatar }}</p>
          </div>
        </div>

        <button type="submit" :disabled="!formIsValid" class="form-main__submit btn">Sign Up</button>
      </form>
    </div>

    <div v-if="dialogIsOpen">
      <Dialog
        v-if="dialogIsOpen"
        v-bind:dialog="dialogIsOpen"
        v-bind:textDialog="textDialog"
        :closeDialogComponent="closeDialog"
        :openDialogComponent="openDialog(textDialog)"
      />
    </div>
  </section>
</template>

<script>
import { bus } from "../main";
import {
  required,
  minLength,
  maxLength,
  between,
  email,
  helpers
} from "vuelidate/lib/validators";

const alpha = helpers.regex(
  "alpha",
  /^(?:\+[3][8] \([0]\d{2}\) \d{3}-)\d{2}-\d{2}$/
);

import VMasker from "vanilla-masker";
import Dialog from "@/components/Dialog";
import { error } from "util";
import { close } from "fs";
const axios = require("axios");

export default {
  data() {
    return {
      dialogIsOpen: false,
      textDialog: "",
      info: null,
      loadInfo: true,
      errored: false,
      token: "",
      user: {
        name: "",
        email: "",
        phone: "",
        position: "",
        avatar: ""
      },
      errors: {
        phone: "",
        avatar: ""
      },
      submitted: false
    };
  },
  watch: {
    "user.phone"(newVal, oldVal) {
      this.user.phone = VMasker.toPattern(newVal, {
        pattern: "+99 (999) 999-99-99"
      });
    }
  },
  validations: {
    user: {
      name: { required, minLength: minLength(2), maxLength: maxLength(60) },
      email: { required, email },
      phone: {
        required,
        minLength: minLength(19),
        maxLength: maxLength(19),
        alpha
      },
      position: { required },
      avatar: { required }
    }
  },
  components: {
    Dialog
  },
  computed: {
    formIsValid: function() {
      return !this.$v.$invalid;
    }
  },
  mounted() {
    axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then(response => {
        this.info = response.data.positions;
      })
      .catch(error => {
        this.errored = true;
      })
      .finally(() => (this.loadInfo = false));
  },

  methods: {
    emitUpdateUsers: function() {
      bus.$emit("updateUsers", "update from form");
    },
    closeDialog: function() {
      this.dialogIsOpen = false;
    },
    openDialog: function(msg) {
      this.dialogIsOpen = true;
      this.textDialog = msg;
    },
    onFileChange(e) {
      let fileSizeIsValid = false;
      let fileTypeIsValid = false;
      let fileWidthIsValid = false;
      let files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        this.errors.avatar = "No file selected";
        return;
      }

      if (files[0].type == "image/jpeg") {
        fileTypeIsValid = true;
      } else {
        this.errors.avatar = "File type must be jpeg";
      }

      if (files[0].size <= 5242880) {
        fileSizeIsValid = true;
      } else {
        this.errors.avatar = "File format jpg up to 5 MB";
      }

      // Create promise
      let promise = new Promise((resolve, reject) => {
        const _URL = window.URL || window.webkitURL;
        const img = new Image();

        img.onload = () => {
          if (img.width >= 70 && img.height >= 70) {
            fileWidthIsValid = true;
          } else {
            this.errors.avatar =
              "The minimum size of 70x70px. Now: " +
              img.width +
              "x" +
              img.height;
          }

          resolve("File is load");
        };

        img.onerror = function() {
          this.errors.avatar = "Not a valid file: " + files[0].type;
          reject("File not load");
        };

        img.src = _URL.createObjectURL(files[0]);
      });

      promise.then(
        result => {
          if (fileSizeIsValid && fileTypeIsValid && fileWidthIsValid) {
            this.errors.avatar = "";
            this.user.avatar = files[0];
          } else {
            this.user.avatar = "";
          }
        },
        error => {
          this.errors.avatar = "Rejected: " + error;
          this.user.avatar = "";
        }
      );
    },

    onSignup(event) {
      this.submitted = true;

      // get token with GET api/v1/token method
      axios
        .get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
        .then(response => {
          this.token = response.data.token;
          this.postData();
          event.target.reset();
        })
        .catch(error => {
          this.errored = true;
          this.token = "";
        })
        .finally(() => (this.loadInfo = false));
    },
    postData() {
      let formData = new FormData();
      let phoneFormat = "+" + this.user.phone.replace(/\D+/g, "");

      formData.set("position_id", this.user.position);
      formData.set("name", this.user.name);
      formData.set("email", this.user.email);
      formData.set("phone", phoneFormat);
      formData.set("photo", this.user.avatar);

      axios({
        method: "post",
        url: "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        data: formData,
        headers: {
          Token: this.token
        }
      })
        .then(response => {
          this.emitUpdateUsers();
          this.openDialog("You have successfully passed the registration");
        })
        .catch(error => {
          this.openDialog("finally error");
        })
        .finally(() => {
          this.loadInfo = false;
          this.user.name = "";
          this.user.email = "";
          this.user.phone = "";
          this.user.position = "";
          this.user.avatar = "";
          this.$v.$reset();
        });
    }
  }
};
</script>
