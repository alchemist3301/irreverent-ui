<template>
  <div class="home">
    <Header msg="This is my Header "/>
    <h1>This is the home page</h1>
    <!--HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/-->
    <Footer msg="This is my Footer "/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/components/commons/Header/Header.vue'; // @ is an alias to /src
import Footer from '@/components/commons/Footer/Footer.vue';
// 

@Options({
  components: {
    Header,
    HelloWorld,
    Footer
  },
})

export default class Home extends Vue {}

</script>
