<template>
  <div class="Library">
    <!--  <LibraryHeader/>-->
    <div class="header__container container lib-container LibraryHeader">
      <div class="header__nav-wrapper">
        <a class="logo__link" href=""
          ><img
            class="logo__img"
            width="24"
            height="24"
            src="../images/header/logo.svg"
            data-index="home" /></a
        ><a class="title-link" href="" data-index="home">Filmoteka </a>
        <ul class="header__nav list">
          <li class="header__nav-item">
            <router-link :to="{ name: 'Content' }">
              <a class="header__nav-link" href="">HOME</a>
            </router-link>
          </li>

          <li class="header__nav-item">
            <a
              class="header__nav-link header__nav-link--active"
              data-index="liba"
              data-name="Watched"
              href=""
              >MY LIBRARY</a
            >
          </li>
        </ul>
      </div>
      <div class="header__filter-button-wrapper">
        <button
          type="button"
          data-name="Watched"
          class="modal-button header__button--right modal-button--active js-watched"
          @click="type = 'watched'"
        >
          Watched
        </button>
        <button
          type="button"
          class="modal-button js-queue"
          data-name="Queue"
          @click="type = 'queue'"
        >
          Queue
        </button>
      </div>
    </div>

    <template v-if="type === 'watched'">
      <LibraryWatched
        @addToQueue="addToQueue"
        v-for="(item, index) in LIBRARY_WATCHED"
        :key="item.id"
        :library_watched_data="item"
        @deleteFromWatched="deleteFromWatched(index)"
      ></LibraryWatched>
    </template>

    <template v-if="type === 'queue'">
      <LibraryQueue
        @addToWatched="addToWatched"
        v-for="(item, index) in LIBRARY_QUEUE"
        :key="item.id"
        :library_queue_data="item"
        @deleteFromQueue="deleteFromQueue(index)"
      ></LibraryQueue>
    </template>

    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import LibraryHeader from "./LibraryHeader"
import Footer from "./Footer";
import LibraryQueue from "./LibraryQueue";
import LibraryWatched from "./LibraryWatched";
export default {
  name: "Library",
  components: {
    // LibraryHeader,
    Footer,
    LibraryQueue,
    LibraryWatched,
  },
  props: {
    library_watched_data: {
      type: Array,
      default() {
        return [];
      },
    },
    library_queue_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentComponent: "LibraryWatched",
      type: "watched",
    };
  },
  computed: {
    ...mapGetters(["LIBRARY_WATCHED", "LIBRARY_QUEUE"]),

    items() {
      return this.type === "watched"
        ? this.LIBRARY_WATCHED
        : this.LIBRARY_QUEUE;
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_WATCHED",
      "DELETE_FROM_QUEUE",
      "ADD_TO_LIBRARY_WATCHED",
      "ADD_TO_LIBRARY_QUEUE",
    ]),
    addToWatched(data) {
      this.ADD_TO_LIBRARY_WATCHED(data);
    },
    addToQueue(data) {
      this.ADD_TO_LIBRARY_QUEUE(data);
    },
    deleteFromWatched(index) {
      this.DELETE_FROM_WATCHED(index);
    },
    deleteFromQueue(index) {
      this.DELETE_FROM_QUEUE(index);
    },
  },
};
</script>

<style scoped>
.LibraryHeader {
  margin-bottom: 60px;
}
</style>
