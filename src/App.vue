<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Anasayfa</router-link>
       <router-link to="/web">Web</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
 //https://www.youtube.com/watch?v=gQv3uUe3bA8&ab_channel=AdemIlter

export default {
  name: "App",

  components: {
  
  },

  data: () => ({
    //
  })
};
</script>
