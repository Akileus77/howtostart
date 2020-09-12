<template>
  <div class="container">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
      
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Anasayfa</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>

    <v-list class="ml-16">
                    <v-list-item>
    <router-link to="/" style="text-decoration:none;"><v-list-item-title >Başlarken</v-list-item-title></router-link> 
                    </v-list-item>
                <v-list-item>
    <router-link to="/" style="text-decoration:none;"><v-list-item-title>Hedefini Belirle</v-list-item-title></router-link> 
                </v-list-item>

        </v-list>

    <router-link to="/Web" style="text-decoration:none;">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
           <v-list-item-content>
              <v-list-item-title>Web Geliştirme</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
   </router-link> 

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
 
    </v-app-bar>
  </div>
  
</template>


<script>
export default {
  name: 'navbar',
   props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  
}
</script>

 