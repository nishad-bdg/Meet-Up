<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text = "error"></app-alert>
      </v-flex> 
    </v-layout>

  	<v-layout row wrap>
  		<v-flex x12 sm6 offset-sm3>
  			<v-card>
  				<v-card-text>
  					<v-container>
  						<form @submit.prevent = "onSignUp">
  							<v-layout row>
  								<v-flex x12>
  									<v-text-field 
  									name="email" 
  									label = "Email" 
  									id="email" v-model="email" type="email" required>
  									</v-text-field>
  								</v-flex>
  							</v-layout>

  							<v-layout row>
  								<v-flex x12>
  									<v-text-field 
  									name="password" 
  									label = "Password" 
  									id="password" v-model="password" type="password" required>
  									</v-text-field>
  								</v-flex>
  							</v-layout>

  							<v-layout row>
  								<v-flex x12>
  									<v-text-field 
  									name="confirmPassword" 
  									label = "Confirm Password" 
  									id="confirmPassword" v-model="confirmPassword" type="password" :rules="[comparepasswords]" required>
  									</v-text-field>
  								</v-flex>
  							</v-layout>

  							<v-layout row>
  								<v-flex x12>
  									<v-btn type="submit" class ="primary"  :disabled="loading" :loading="loading">
                    Sign Up
                    <span slot="loader" class="custom-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                  </v-btn>
  								</v-flex>
  							</v-layout>
  							
  						</form>
  					</v-container>
  				</v-card-text>
  			</v-card>
  		</v-flex>
  	</v-layout>
  </v-container>

</template>

<script>
	export default{
		data(){
			return {
				email : '',
				password : '',
				confirmPassword : ''
			}//return
		},//data

		computed : {

      comparepasswords(){
        return this.password !== this.confirmPassword ? 'Password do not match' : ''
      },

      user(){
        return this.$store.getters.user
      },
      error(){
        return this.$store.getters.error
      },
      loading(){
        return this.$store.getters.loading
      }

		},//computed

    watch :{
      user(value){
        if(value !== null && value !== undefined){
          this.$router.push('/')  
        }//if
      }//user
    },//user

		methods : {
			onSignUp(){
        this.$store.dispatch('signUserUp',{email : this.email, password : this.password})
			},
      onDismissed(){
        console.log("Dismissed")
        this.$store.dispatch('clearAllError')
      }
		}
	}
	//export default
</script>