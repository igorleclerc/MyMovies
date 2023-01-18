<template>
<div class="movies">
  <div v-for="poke in listofmovies" v-bind:key="poke.allmovies" class="littlecard">
    <movies-card>
      :movieimg ="movies.image"
      :movietitle="movies.title"
      :movieruntime="movies.runtime"
      :movierdate="movies.release_date"
    </movies-card>
</div>
</div>
</template>

<script>
import MoviesCard from "@/components/MoviesCard";

export default {
  name: "MoviesView",
  data() {
    return {
      listofmovies: []
    }
  },
  components: {
    MoviesCard
  },
  async mounted() {
    try {
      console.log("mounted function called")
      let res = await fetch('http://localhost:3307/movies', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      })
      res = await res.json();
      this.listofmovies = res
      console.log(this.listofmovies)

    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
</script>


<style scoped>

</style>