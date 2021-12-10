<template>
  <div class="goup__btn-wrapper">
    <button
      class="goup__btn"
      style="display: none"
      type="button"
      v-show="scY > 300"
      @click="toTop"
    >
      <svg class="goup" width="20" height="20">
        <use href="../images/footer/sprite.svg#icon-arrow-up2"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "GoToTop",
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped></style>
