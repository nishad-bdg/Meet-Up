<template>
  <v-container>
  	<v-layout row wrap class = "mb-2" v-for = "meetup in meetups" :key="meetup.id">
  		<v-flex xs12>
  			<v-card class="info">
  				<v-container fluid>
  					<v-layout row>
  						<v-flex xs5 sm4>
  							<v-card-media
  							v-bind:src = "meetup.imageUrl" height="125px">				
  							</v-card-media>

  						</v-flex>
  						<v-flex xs7 sm8>
  							<v-card-title primary-title>
  							 <div class="headline">{{ meetup.title }}</div>
                				<div>{{ meetup.date }}</div>
              				</v-card-title>
	              				<v-card-actions>
	              					<v-btn flat dark :to ="'/meetups/' + meetup.id" >
	              					<v-icon left>arrow_forward</v-icon>
	              					View Meetup
	              					</v-btn>
	              				</v-card-actions>

  							</v-flex>
  					</v-layout>
  				</v-container>
  			</v-card>
  		</v-flex>
  	</v-layout>



  </v-container>

</template>

<script>
	export default{
		computed : {
			meetups(){
				return this.$store.getters.loadedMeetups
			}
		}
	}
	//export default

</script>