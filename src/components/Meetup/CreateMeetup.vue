<template>
  <v-container>
  	<v-layout row>
  		<v-flex x12 sm6 offset-sm3>
  			<h2 class="primary--text">Create a new meetup</h2>
  		</v-flex>
  	</v-layout>

  	<v-layout row>
  		<v-flex x12>
  			<form @submit.prevent="onCreateMeetup">
  				<v-layout row>
  					<v-flex x12 sm6 offset-sm3>
  						<v-text-field
  						name ="title" v-model = "title" label = "Title" id = "title" required>
  							
  						</v-text-field>
  					</v-flex>
  				</v-layout>


  				<v-layout row>
  					<v-flex x12 sm6 offset-sm3>
  						<v-text-field
  						name ="location" v-model = "location" label = "Location" id = "location" required>
  							
  						</v-text-field>
  					</v-flex>
  				</v-layout>

  				<v-layout row>
  					<v-flex x12 sm6 offset-sm3>
  						<v-text-field
  						name ="image_url" v-model = "imageUrl" label = "Image URL" id = "image-url" required>	
  						</v-text-field>
  					</v-flex>
  				</v-layout>

  				<v-layout row>
  					<v-flex x12 sm6 offset-sm3>
  						<img :src="imageUrl" height="200" width="300">
  					</v-flex>
  				</v-layout>

  				<v-layout row>
  					<v-flex x12 sm6 offset-sm3>
  						<v-text-field
  						name ="description" v-model = "description" multi-line label = "Description" id = "description" required>
  							
  						</v-text-field>
  					</v-flex>
  				</v-layout>


  				<v-layout row>
  					<v-flex x12 sm6 offset-sm3>
  						<h4>Choose a Date & Time</h4>
  					</v-flex>
  				</v-layout>

  				<v-layout row class="mb-2">
  					<v-flex x12 sm6 offset-sm3>
  						<v-date-picker v-model="date"></v-date-picker>
  						<p>{{date}}</p>
  					</v-flex>
  				</v-layout>

  					<v-layout row>
  					<v-flex x12 sm6 offset-sm3>
  						<v-time-picker v-model ="time" format ="24hr"></v-time-picker>
  					</v-flex>
  				</v-layout>

  				<v-layout row>
  					<v-flex x12 sm6 offset-sm3>
  						<v-btn class="primary" :disabled ="!formIsValid" type ="submit">Create Meetup</v-btn>
  					</v-flex>
  				</v-layout>
  				{{submitableDateTime}}


  			</form>
  		</v-flex>
  	</v-layout>

  </v-container>

</template>

<script>
	export default{
		data() {
			return{
				title : '',
				location : '',
				imageUrl : '',
				description : '',
				date : '',
				time : new Date(),
			} 
		},//data
		
		computed : {
			formIsValid(){
				return this.title !== "" && 
				this.location !== "" && 
				this.imageUrl !== "" && 
				this.description !== "" 
			},

			submitableDateTime(){
				const date = new Date(this.date)
				if(typeof this.time === 'string'){
					const hours = this.time.match(/^(\d+)/)[1]
					const minutes = this.time.match(/^:(\d+)/)[1]
					date.setHours(hours)
					date.setMinutes(minutes)
				}else{
					date.setHours(this.time.getHours())
					date.setMinutes(this.time.getMinutes())
				}
				console.log(date)
				return date
			}//submitableDateTime()
		},

		methods : {
			onCreateMeetup(){
				if(!this.formIsValid){
					return
				}

				const meetupData = {
					title : this.title,
					location : this.location,
					imageUrl : this.imageUrl,
					description : this.description,
					date : this.submitableDateTime
				}
				this.$store.dispatch('createMeetup',meetupData)
				this.$router.push('/meetups')

			}
		}

	}
	//export  default
</script>