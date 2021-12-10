<template>

<div class="ContentItem">


  <Popup
      v-if="isInfoPopupVisible"
            @closePopup="closeInfoPopup"

  >
    <div class='lightbox__overlay' ref="popup_wrapper"></div>
    <div class='lightbox__content'>
      <button type='button' class='lightbox__button' data-action='close-lightbox'
      @click="closeInfoPopup">
      </button>
      <img
          class='lightbox__image'
          :src='source'
          :alt='posterAlt'
      />
      <div class='lightbox__information'>
        <h2 class='lightbox__title'> {{filmData.title}}</h2>
        <ul class='lightbox__list list'>
          <li class='lightbox__list__item'>
            <p class='item__list-title'> Vote / Votes</p>
            <p class=''>
              <span class='content__rating'> {{filmData.vote_average}}</span>

              /
              <span class='content__vote'>{{filmData.vote_count}}</span>
            </p>
          </li>
          <li class='lightbox__list__item'>
            <p class='item__list-title'>Popularity</p>
            <p class='item-info-popul'>
              {{filmData.popularity}}</p>
          </li>
          <li class='lightbox__list__item'>
            <p class='item__list-title'>Original Title</p>
            <span class='item-info-orig'>
            {{filmData.original_title}}
          </span>
          </li>
          <li class='lightbox__list__item'>
            <p class='item__list-title'>Genre</p>
            <span class='item-info-gen'>
{{filmData.genre_ids}}
          </span>
          </li>
        </ul>
        <h3 class='lightbox__about'>About</h3>
        <p class='lightbox__text'>{{filmData.overview}}
        </p>
        <div class='buttons-content'>
          <button
              class='content__btn js-modal-watched'
              type='button'
              data-action='btn-to-wached'
              value='Watched'
              @click="addToWatched"
          >{{ buttonTitle }}</button>
          <button
              class='content__btn js-modal-queue'
              type='button'
              data-action='btn-to-queue'
              value='Queue'
              @click="addToQueue"
          >add to queue</button>
        </div>
      </div>
    </div>
  </Popup>


<ul class="content__cards">
   <li class='content__card content__card__show__info' @click="showPopupInfo">
    <a href='#' :data-id='filmData.id' class='content__link'>
      <div class='poster__wraper'>
        <img
            :src='source'
            :alt='posterAlt'
            class='content__poster'
        />
      </div>
      <div class='card__description'>
        <p class='content__title'>{{filmData.title}}</p>
        <p class='content__info'><span class='content__genres'>{{filmData.genre_ids}}</span>

          <span class='content__year'>{{filmData.release_date}}</span>
          <span class='content__rating'>{{filmData.vote_average}}</span></p>
      </div>
    </a>
  </li>
</ul>
</div>

</template>

<script>

import Popup from "../popup/Popup";


export default {
    name:'ContentItem',
  components:{
    Popup
  },
  props:{
      filmData:{
        type: Object,
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        default(){
          return {}
        }
    },
    buttonTitle:{
      type:String,
      default: 'add to watched'
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    data(){
        return {
          isInfoPopupVisible: false,
        }
    },
  methods:{
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    showPopupInfo(){
      this.isInfoPopupVisible = true;

    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false;
    },
    addToWatched(){
      this.$emit('addToWatched',this.filmData);
    },
    addToQueue(){
      this.$emit('addToQueue',this.filmData);
    },

  },
  computed:{
      posterAlt(){
        return `poster for ${this.filmData.title}`
      },
      source(){
        return `https://image.tmdb.org/t/p/w300${this.filmData.poster_path}`
      },

  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let vm = this;
    document.addEventListener('click', function (item){
      if (item.target === vm.$refs['popup_wrapper']){
        vm.closeInfoPopup()
      }
    })
  }

  }


</script>

<style>
.ContentItem {
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>