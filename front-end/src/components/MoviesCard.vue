<template>
<div class="card">
  <div class="img">
    <img :src=movieimg :alt=movietitle />
  </div>
  <div class="title">
    <h1>{{ movietitle }}</h1>
  </div>
  <div class="runtime">
    <h3>{{ movieruntime }}</h3>
  </div>
  <div class="date">
    <p>{{ movierdate }}</p>
  </div>
  <div class="description">
  </div>
</div>
</template>

<script>
export default {
  name: "MoviesCard",
  props : {
    movieimg : {required : true, type : URL},
    movietitle : {required : true, type : String},
    movieruntime : {required : true, type : String},
    movierdate : {required : true, type : String},
  }
}
</script>

<style scoped>

</style>