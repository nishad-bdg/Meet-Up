import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Meetup from '@/components/Meetup/Meetup'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {title: 'Home'}
    },

    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },

    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter : AuthGuard
    },
    
    {
    	path : '/meetups/:id',
    	name : 'Meetup',
    	props : true,
    	component : Meetup
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter : AuthGuard
    },

    {
      path: '/sign-in',
      name: 'Signin',
      component: Signin
    },

    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    },



  ]//routes array
})
