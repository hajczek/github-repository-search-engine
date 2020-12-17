<template>
  <div class="container">
    <AppHeader />
    <Nuxt/>
    <Footer />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer'

export default {
  components: {
    AppHeader,
    Footer
  }
}
</script>

<style lang="scss">
.container {
  background-color: $container-bg-color;    
  border: 1px solid $border-color;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;    
  margin-top: 2rem; 
  max-width: 800px;  
  padding: 2rem;
  width: 80vw;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}


@media screen and (max-width: 700px) {
    .container {
        width: 90vw;
    } 
} 
</style>
