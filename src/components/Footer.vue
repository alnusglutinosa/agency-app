<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__container footer__container--top container">
        <a href="/" class="footer__img-wrap logo" title="Create website">
          <img
            :src="require('../assets/logo/logo-white.svg')"
            class="logo__img"
            height="25"
            width="135"
            aria-label="link to main page"
          >
        </a>

        <nav class="footer__links">
          <ul class="nav-default">
            <li class="nav-default__item" v-for="link in links" :key="link">
              <a class="nav-default__link" href="#">{{ link }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="footer__center">
      <div class="footer__container footer__container--center container">
        <div class="footer__contact">
          <ul class="contact-list">
            <li class="contact-list__item">
              <span class="contact-list__icon contact-list__icon--mail">
                <svg
                  class="contact-list__svg"
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#FFF" fill-rule="nonzero">
                    <path
                      d="M12 12L9 9.4.54 16.68c.326.295.75.459 1.19.46h20.54a1.73 1.73 0 0 0 1.18-.46L15 9.4 12 12z"
                    ></path>
                    <path
                      d="M23.46.46A1.78 1.78 0 0 0 22.27 0H1.73A1.7 1.7 0 0 0 .55.47L12 10.29 23.46.46zM0 1.5v14.25l8.29-7.04zM15.71 8.71L24 15.75V1.5z"
                    ></path>
                  </g>
                </svg>
              </span>
              <a
                class="contact-list__link"
                href="mailto:work.of.future@gmail.com"
              >work.of.future@gmail.com</a>
            </li>

            <li class="contact-list__item">
              <span class="contact-list__icon contact-list__icon--phone">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 8.67A17.34 17.34 0 0 0 11.33 16l2.45-2.44a.88.88 0 0 1 1.11-.23 11.46 11.46 0 0 0 4 .67A1 1 0 0 1 20 15.11v3.78A1 1 0 0 1 18.89 20 18.87 18.87 0 0 1 0 1.11 1 1 0 0 1 1.11 0H5a1 1 0 0 1 1.11 1.11 12.44 12.44 0 0 0 .67 4 1.38 1.38 0 0 1-.22 1.11L4 8.67z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </span>
              <a class="contact-list__link" href="tel:380507892498">+38 (050) 789 24 98</a>
            </li>

            <li class="contact-list__item">
              <span class="contact-list__icon contact-list__icon--mob">
                <svg width="16" height="28" viewBox="0 0 16 28" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.54 27.12A2.41 2.41 0 0 0 16 24.65V2.47A2.41 2.41 0 0 0 13.54 0H2.46A2.41 2.41 0 0 0 0 2.47v22.18a2.41 2.41 0 0 0 2.46 2.47h11.08zM8 26.09a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 0 1 0 2.46zM4.92 1.5a.27.27 0 0 1 .28-.27h5.6c.15 0 .275.12.28.27v.08a.27.27 0 0 1-.28.27H5.2a.28.28 0 0 1-.28-.27V1.5zM1.23 3.08h13.54v19.69H1.23V3.08z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </span>
              <a class="contact-list__link" href="tel:380955560845">+38 (095) 556 08 45</a>
            </li>
          </ul>
        </div>

        <div class="footer__category category">
          <div class="category__col" v-for="col_category in categories" :key="col_category[0]">
            <ul class="category__list">
              <li class="category__item" v-for="link_category in col_category" :key="link_category">
                <a class="category__link" href="#">{{ link_category }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__container footer__container--bottom container">
        <div class="footer__copyright">© abz.agency specially for the test task</div>

        <div class="footer__social">
          <ul class="social-list">
            <li class="social-list__item">
              <a class="social-list__link" href="#" target="_blank" title="social link">
                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.48 0H6.5A6.53 6.53 0 0 0 0 6.52v13A6.53 6.53 0 0 0 6.5 26h13a6.53 6.53 0 0 0 6.5-6.52v-13A6.53 6.53 0 0 0 19.48 0zm-3 13H14v8.05h-3.06V13H9.29V9.7h1.44V8.3a3.2 3.2 0 0 1 3.45-3.41h2.53v2.74h-1.79c-.29 0-.68.19-.68.83V9.7h2.54l-.3 3.3z"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="#" target="_blank" title="social link">
                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.46 0H6.52A6.53 6.53 0 0 0 0 6.52v13A6.53 6.53 0 0 0 6.52 26h13A6.53 6.53 0 0 0 26 19.46V6.52A6.56 6.56 0 0 0 19.46 0zM8.66 21H5V10.31h3.66V21zM6.78 8.66a1.9 1.9 0 1 1 1.9-1.9 1.93 1.93 0 0 1-1.9 1.9zM21.05 21h-3.11v-5.16c0-1.26-.17-2.87-1.88-2.87s-2 1.36-2 2.78V21h-3.13V10.31h2.88v1.44h.09a3.38 3.38 0 0 1 3.15-1.46c3.4 0 4 2 4 4.86V21z"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="#" target="_blank" title="social link">
                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                  <g fill-rule="nonzero">
                    <path
                      d="M15.3 11.32a2.82 2.82 0 0 0-4.62 0 2.92 2.92 0 0 0-.54 1.68 2.85 2.85 0 0 0 5.7 0 2.92 2.92 0 0 0-.54-1.68z"
                    ></path>
                    <path
                      d="M17.09 11.34a4 4 0 0 1 .33 1.66 4.43 4.43 0 0 1-8.86 0 3.91 3.91 0 0 1 .33-1.65h-2.5V18A1.68 1.68 0 0 0 8 19.59h10A1.68 1.68 0 0 0 19.59 18v-6.66h-2.5zM18.84 6.76h-2.39v2.75h2.73V6.74z"
                    ></path>
                    <path
                      d="M19.46 0H6.52A6.53 6.53 0 0 0 0 6.52v13A6.53 6.53 0 0 0 6.52 26h13A6.53 6.53 0 0 0 26 19.46V6.52A6.56 6.56 0 0 0 19.46 0zM21 11.32V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3.32z"
                    ></path>
                  </g>
                </svg>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="#" target="_blank" title="social link">
                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.46 0H6.52A6.53 6.53 0 0 0 0 6.52v13A6.53 6.53 0 0 0 6.52 26h13A6.53 6.53 0 0 0 26 19.46V6.52A6.56 6.56 0 0 0 19.46 0zm0 9.73v.43A9.32 9.32 0 0 1 10 19.48 9.44 9.44 0 0 1 4.89 18h.78a6.59 6.59 0 0 0 4.12-1.4 3.32 3.32 0 0 1-3.11-2.27c.204.04.412.06.62.06.3.002.6-.038.89-.12a3.29 3.29 0 0 1-2.62-3.22c.452.257.96.398 1.48.41A3.24 3.24 0 0 1 6 7.11a9.55 9.55 0 0 0 6.85 3.43 2.75 2.75 0 0 1-.09-.75 3.29 3.29 0 0 1 3.34-3.27 3.39 3.39 0 0 1 2.44 1 6.37 6.37 0 0 0 2.1-.81 3.38 3.38 0 0 1-1.46 1.82A6.74 6.74 0 0 0 21.09 8a6.63 6.63 0 0 1-1.65 1.73h.02z"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="#" target="_blank" title="social link">
                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.48 0H6.5A6.53 6.53 0 0 0 0 6.52v13A6.53 6.53 0 0 0 6.5 26h13a6.53 6.53 0 0 0 6.5-6.52v-13A6.53 6.53 0 0 0 19.48 0zM14.3 16.61a2.8 2.8 0 0 1-2.3-1.15s-.56 2.14-.68 2.55a10.2 10.2 0 0 1-1.74 3.06.14.14 0 0 1-.27-.07 10.77 10.77 0 0 1 0-3.55c.18-.77 1.24-5.08 1.24-5.08a3.46 3.46 0 0 1-.31-1.46c0-1.39.82-2.42 1.85-2.42a1.27 1.27 0 0 1 1.3 1.4 19.34 19.34 0 0 1-.84 3.31 1.45 1.45 0 0 0 1.54 1.8c1.82 0 3.06-2.27 3.06-4.95 0-2-1.43-3.57-4-3.57a4.49 4.49 0 0 0-4.75 4.46 2.67 2.67 0 0 0 .6 1.83.45.45 0 0 1 .14.52c0 .16-.14.58-.2.74a.33.33 0 0 1-.48.23 3.58 3.58 0 0 1-2-3.57c0-2.64 2.31-5.82 6.87-5.82 3.68 0 6.09 2.58 6.09 5.34.06 3.68-2.02 6.4-5.12 6.4z"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  data: () => ({
    links: ["About me", "Relationships", "Requirements", "Users", "Sign Up"],
    categories: [
      ["News", "Blog", "Partners", "Shop"],
      ["Overview", "Design", "Code", "Collaborate"],
      ["Tutorials", "Resources", "Guides", "Examples"],
      ["FAQ", "Terms", "Conditions", "Help"]
    ]
  })
};
</script>
