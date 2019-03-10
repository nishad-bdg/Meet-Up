<template>
	<v-container>
	<v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text = "error"></app-alert>
      </v-flex> 
    </v-layout>

		<v-layout row >
			<v-flex x12 sm6 offset-sm3>
				<v-card>

					<v-card-text>
						<v-layout x12>
							<v-container>
								<form @submit.prevent ="onSignIn">
									<v-layout row>
										<v-flex x12>
											<v-text-field
											name = "email"
											label = "Email"
											type = "email"
											id = "email"
											v-model = "email"
											required
											>
											</v-text-field>
										</v-flex>
									</v-layout>

									<v-layout row>
										<v-flex x12>
											<v-text-field
											name = "password"
											label = "Password"
											type = "password"
											id = "password"
											v-model = "password"
											required
											>
											</v-text-field>
										</v-flex>
									</v-layout>

									<v-layout row>
										<v-flex x12>
											<v-btn type="submit" class ="primary"  :disabled="loading" :loading="loading">
                    							Sign In
							                    <span slot="loader" class="custom-loader">
							                      <v-icon light>cached</v-icon>
							                    </span>
						                  	</v-btn>
										</v-flex>
									</v-layout>
								</form>
							</v-container>
						</v-layout>
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
				password : ''
			}
		},//

		computed : {
			formIsValid(){
				return this.email !== "" &&
				this.password !== ""
			},

			user(){
				return this.$store.getters.user
			},

			loading(){
				return this.$store.getters.loading
			},
			
			error(){
				return this.$store.getters.error
			}
		},//computed

		watch :{
			user(value){
				if(value !== null && value !== undefined){
					return this.$router.push('/')
				}
			}
		},
		
		methods : {
			onSignIn(){
				this.$store.dispatch('signUserIn',{email : this.email, password : this.password})
			},
			onDismissed(){
        		console.log("Dismissed")
        		this.$store.dispatch('clearAllError')
      		}
		}//methods

	}
	//export default
</script>