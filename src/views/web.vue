<template>
  <v-app id="inspire">
    <navbar></navbar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="left" justify="left" class="ml-2">
           <div class="ml-3 col-m-5" >
        <h1 style="color:White;">Web Geliştirme <code class="ml-1" style="font-size:20px">html</code></h1>
            </div>
        
                <!-- TODO İçeriğe devam -->
                <component-example/>
        </v-row>
      </v-container>
      </v-main>

       <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} Created By Aki</span>
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
