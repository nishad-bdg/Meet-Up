<template>
  <v-container>
    <v-layout row wrap class ="mb-3">
      <v-flex xs12 sm6 class ="text-xs-center text-sm-right">
        <v-btn large color = "error" router to="/meetups">
          Expolre Meetups
        </v-btn>
      </v-flex>

      <v-flex xs12 sm6 class = "text xs-center text-sm-left">
        <v-btn large color = "success" router to="/meetup/new">
          Organize Meetup
        </v-btn>
      </v-flex>

    </v-layout>

    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular 
        indeterminate
        class = "primary--text"
        :width ="7" :size ="70"
        v-if ="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-if = "!loading">
      <v-flex xs12>
         <v-carousel>
            <v-carousel-item v-for="(item,i) in meetups" 
            :src="item.imageUrl" 
            :key="item.id">
              <div class="title" @click="onLoadMeetup(item.id)">
                {{ item.title }}
              </div>

            </v-carousel-item>
          </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">

      <v-flex xs12 sm6 class = "text-xs-center">
        <p>Join Our Meetup</p>
      </v-flex>
    </v-layout>

  </v-container>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script type="text/javascript">
  export default{
    computed : {
      meetups(){
        return this.$store.getters.featuredMeetups
      },

      loading(){
        return this.$store.getters.loading
      }
    },
  
   methods : {
      onLoadMeetup(id){
        this.$router.push('/meetups/'+id)
      }
   }
  };
  //export
</script>

<style type="text/css" scoped>
  .title {
    position: absolute;
    bottom: 50px;
    color: #fff;
    padding: 20px;
    background-color: rgba(0,0,0,0.5);
    font-size: 2em;
  }
</style>