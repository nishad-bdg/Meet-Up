import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state : {
		loadedMeetups: [],
        user : null,
        loading : false,
        error : null
	},
	
	// mutations 
	mutations : {
		setLoadedMeetups(state,payload){
			state.loadedMeetups = payload
		},

		createMeetup(state, payload){
			state.loadedMeetups.push(payload)
		},//create meetup

		setUser(state,payload){
			state.user = payload
		},

		setLoading(state, payload){
			state.loading = payload
		},

		setError(state, payload){
			state.error = payload
		},

		clearError(state){
			state.error = null
		}


	},


	//actions
	actions : {

		loadedMeetups({commit}){
			commit('setLoading', true)
			firebase.database().ref('meetups').once('value')
				.then((data)=>{
					const meetups = []
					const obj = data.val()
					for(let key in obj){
						meetups.push({
							id : key,
							title : obj[key].title,
							description : obj[key].description,
							imageUrl : obj[key].imageUrl,
							location : obj[key].location,
							date : obj[key].date
						})
					commit('setLoadedMeetups',meetups)
					commit('setLoading', false)
					}//for loop
				})
				.catch( error => {
					console.log(error)
					commit('setLoading',true)
				})
		},

		createMeetup({commit},payload){
			const meetup = {
				title : payload.title,
				location : payload.location,
				imageUrl : payload.imageUrl,
				description : payload.description,
				date : payload.date.toISOString(),
			}

			firebase.database().ref('meetups').push(meetup)
				.then((data) =>{
					console.log(data)
					const key = data.key
					commit('createMeetup',{
						...meetup,id:key
					})
				}).catch( error =>{
					console.log(error)
				})
			//Reach out for the firebase and store it
		},//create meetup

		//method signuserup
		signUserUp({commit},payload){
			commit('setLoading', true)
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
				.then( user => {
					commit('setLoading', false)
					commit('clearError')
					const newUser = {
						id : user.uid,
						registeredMeetups : []
					}
					commit('setUser',newUser)
				}).catch( error =>{
					commit('setLoading', false)
					commit('setError', error.message)
					console.log(error)
				})

		},//sign user up

		// user sign in
		signUserIn({commit}, payload){
			commit('setLoading', true)
			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
				.then( user =>{
					commit('setLoading', false)
					commit('clearError')
					const newUser = {
						id : user.uid,
						registeredMeetups : []
					}
					commit('setUser',newUser)
				}).catch( error =>{
					commit('setLoading', false)
					commit('setError', error.message)
					console.log(error)
				})
		},//user

		clearAllError({commit}){
			commit('clearError')
		},

		autoSignIn({commit}, payload){
			commit('setUser',{id: payload.uid, registeredMeetups: []})
		},

	},//action
	
	getters : {
		loadedMeetups(state){
			return state.loadedMeetups.sort((meetupA,meetupB) => {
				return meetupA.date > meetupB.date 
			})
		},
		
		featuredMeetups(state,getters){
			return getters.loadedMeetups
		},


		loadedMeetup(state){
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}//return
		},//loadedMeetup

		user(state){
			return state.user
		},

		loading(state){
			return state.loading
		},
		error(state){
			return state.error
		}
	},

})