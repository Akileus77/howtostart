<template>
  <v-app id="inspire">
    <navbar></navbar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
        <h1>Web</h1>

        </v-row>
      </v-container>
      </v-main>

       <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar";
 

export default {
  name:"Web",
  components: {
    Navbar 
 
  }
}
</script>
