// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('app-alert',AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
  	firebase.initializeApp({
  		apiKey: "AIzaSyCoVpgJixtx6XCKn_ZsG2kNWinXZaTAFX8",
	    authDomain: "devmee-ed576.firebaseapp.com",
	    databaseURL: "https://devmee-ed576.firebaseio.com",
	    projectId: "devmee-ed576",
	    storageBucket: "devmee-ed576.appspot.com",
	    messagingSenderId: "445319403590"
  	})

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.$store.dispatch('autoSignIn',user)
      }
    })

    this.$store.dispatch('loadedMeetups')
  }
})
