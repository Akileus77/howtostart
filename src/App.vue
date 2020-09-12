<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
       <router-link to="/About">About</router-link>
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
