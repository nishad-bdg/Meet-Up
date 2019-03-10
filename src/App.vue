<template>
  <v-app>
    <v-navigation-drawer app v-if="sideNav">
      
    </v-navigation-drawer>

    <v-toolbar app>

      <v-toolbar-title>
        <router-link to='/' style="cursor : pointer; text-decoration:none;"> Dev Meetup</router-link>
      </v-toolbar-title>  

      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat v-for = "item in menuItems"
        :key="item.title"
        router
        :to = "item.link"
        >
          
        <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }} 
        </v-btn>

      </v-toolbar-items>

    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav : false,
      
    }//return
  },//data

  computed : {
    menuItems (){
      let menuItems = []

      if(this.userisAuthenticated){
        menuItems = [
          {icon : 'supervisor_account', title : 'Dev Meetups', link : '/meetups'},
          {icon : 'room', title : 'Organize Meetup',  link : '/meetup/new'},
          {icon : 'person', title : 'Profile', link : '/profile'},
          {icon : 'exit_to_app', title: 'Logout', link :'/sign-in'}
        ]
      }//if
      
      return menuItems 
    },//menu items

    userisAuthenticated(){
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },

  name: 'App'
}
//export default
</script>
