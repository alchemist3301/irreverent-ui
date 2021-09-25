<template>
  <div class="home">
    <div class="slogan">
      <h1 class="slogan__1">Build the</h1>
      <h1 class="slogan__2">FUTURE</h1>
      <h1 class="slogan__3">just NOW.</h1>
    </div>
    <!--HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/-->
    <!--Footer msg="This is my Footer "/-->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/components/commons/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/commons/Footer/Footer.vue';

@Options({
  components: {
    Header,
    HelloWorld,
    Footer
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '../assets/styles.scss';

.slogan{
  display:grid;
  max-width: 50%; 
  margin: auto;
  &__1{
    margin:0;
    letter-spacing: 3px;
    text-align:left;
    font-size: 4em;
  }
  &__2{
    margin:0;
    letter-spacing: 3px;
    text-align:right;
    font-size: 6em;
  }
  &__3{
    margin:0;
    letter-spacing: 3px;
    text-align:center;
    font-size: 4em;
  }

  @include tablet {
    max-width: 70%;
  }
  @include mobile {
    justify-content: center;
    max-width: 100%;
    &__1, &__3{
      font-size: 3em;
    }
    &__2{
      font-size: 4em;
    }
  }
}

</style>