<template>
  <v-app id="inspire">
    <!-- TODO
    Veri tabanı bağlantısı yapılabilir
    giriş yapıldığında daha çok içerik
    öğrenme durumu ? ne kadar ilerledi
    özel içerikleri görebilme
    https://vuetifyjs.com/en/components/cards/


     -->
      <navbar></navbar>
     
    <v-main>
      <v-container fluid>
        <v-row align="left" justify="left" class="ml-2">
           <div class="ml-3 col-m-5" >
        <h1 style="color:White;">Programlamaya Giriş <code class="ml-1" style="font-size:20px">"Hello World"</code></h1>
            </div>
       
            <div  class="mt-5 ml-3" style="white-space: pre-line">
          <p class="ml-3">Kodlamaya başlayacaklar için, bu iş sıkı çalışma ve azim gerektirir.
          Hata yapmaktan korkmayıp, araştırma yapmayı iyi bir şekilde öğrenmeniz gerekir.
          Kısaca <span class="font-weight-bold">"Googlelamayı"</span> öğrenmeniz gerekir. 
          Hatalarınız için veya öğrenmek için soru sormaktan çekinmeyin.</p>
            </div>
            <div class="mt-4 ml-3 elevation-9 col-sm-6 black lighter-4 pr-2 rounded" style="white-space: pre-line;">
                <p>Öncelikle sektörde hangi kısıma yöneleceğinizi seçmeniz gerekmekte bunun 
                için hangi dillerin aşağı yukarı ne için kullanıldığını aşağıya listeledik.</p>
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
  name:"Home",
  components: {
    Navbar,
 
  }
}
</script>
 