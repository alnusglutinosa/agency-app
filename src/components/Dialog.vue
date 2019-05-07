<template>
  <div class="dialog text-xs-center" :class="{ 'is-active': dialog }">
    <div class="v-overlay v-overlay--active" style="z-index: 201;"></div>

    <div class="dialog__content">
      <div class="dialog__wrap">
        <div class="dialog__title">Congratulations</div>

        <div class="dialog__descr">{{ textDialog }}</div>

        <div class="dialog__actions">
          <button color="green darken-1" flat="flat" v-on:click="closeDialogComponent">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "dialog",
    "textDialog",
    "closeDialogComponent",
    "textDialogComponent",
    "openDialogComponent"
  ],
  data() {
    return {};
  }
};
</script>
