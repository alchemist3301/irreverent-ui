<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import '/assets/styles.scss';

#app {
  font-family: 'Azeret Mono', monospace , sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

::selection {
  color: #FF00AB;
  background: #74FF00;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #FF00AB;
      background: #74FF00;
    }
  }
}
</style>
