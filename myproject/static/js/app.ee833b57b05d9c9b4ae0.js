webpackJsonp([1],{"7zck":function(t,e){},BY65:function(t,e){},MLId:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),a={data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[];return this.userisAuthenticated&&(t=[{icon:"supervisor_account",title:"Dev Meetups",link:"/meetups"},{icon:"room",title:"Organize Meetup",link:"/meetup/new"},{icon:"person",title:"Profile",link:"/profile"},{icon:"exit_to_app",title:"Logout",link:"/sign-in"}]),t},userisAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},name:"App"},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[t.sideNav?s("v-navigation-drawer",{attrs:{app:""}}):t._e(),t._v(" "),s("v-toolbar",{attrs:{app:""}},[s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer","text-decoration":"none"},attrs:{to:"/"}},[t._v(" Dev Meetup")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{flat:"",router:"",to:e.link}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+" \n      ")],1)}))],1),t._v(" "),s("v-content",[s("router-view")],1)],1)},staticRenderFns:[]},i=s("VU/8")(a,n,!1,null,null,null).exports,o=s("/ocq"),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[s("v-btn",{attrs:{large:"",color:"error",router:"",to:"/meetups"}},[t._v("\n        Expolre Meetups\n      ")])],1),t._v(" "),s("v-flex",{staticClass:"text xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[s("v-btn",{attrs:{large:"",color:"success",router:"",to:"/meetup/new"}},[t._v("\n        Organize Meetup\n      ")])],1)],1),t._v(" "),s("v-layout",[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?s("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",width:7,size:70}}):t._e()],1)],1),t._v(" "),t.loading?t._e():s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-carousel",t._l(t.meetups,function(e,r){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl}},[s("div",{staticClass:"title",on:{click:function(s){t.onLoadMeetup(e.id)}}},[t._v("\n              "+t._s(e.title)+"\n            ")])])}))],1)],1),t._v(" "),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:""}},[s("p",[t._v("Join Our Meetup")])])],1)],1)},staticRenderFns:[]};var u=s("VU/8")({computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/"+t)}}},l,!1,function(t){s("MLId"),s("BY65")},"data-v-787d89aa",null).exports,c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",t._l(t.meetups,function(e){return s("v-layout",{key:e.id,staticClass:"mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"info"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs5:"",sm4:""}},[s("v-card-media",{attrs:{src:e.imageUrl,height:"125px"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[t._v(t._s(e.title))]),t._v(" "),s("div",[t._v(t._s(e.date))])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",dark:"",to:"/meetups/"+e.id}},[s("v-icon",{attrs:{left:""}},[t._v("arrow_forward")]),t._v("\n\t              \t\t\t\t\tView Meetup\n\t              \t\t\t\t\t")],1)],1)],1)],1)],1)],1)],1)],1)}))},staticRenderFns:[]},d=s("VU/8")({computed:{meetups:function(){return this.$store.getters.loadedMeetups}}},c,!1,null,null,null).exports,m={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:"",time:new Date}},computed:{formIsValid:function(){return""!==this.title&&""!==this.location&&""!==this.imageUrl&&""!==this.description},submitableDateTime:function(){var t=new Date(this.date);if("string"==typeof this.time){var e=this.time.match(/^(\d+)/)[1],s=this.time.match(/^:(\d+)/)[1];t.setHours(e),t.setMinutes(s)}else t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes());return console.log(t),t}},methods:{onCreateMeetup:function(){if(this.formIsValid){var t={title:this.title,location:this.location,imageUrl:this.imageUrl,description:this.description,date:this.submitableDateTime};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups")}}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("h2",{staticClass:"primary--text"},[t._v("Create a new meetup")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.onCreateMeetup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"location",label:"Location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"image_url",label:"Image URL",id:"image-url",required:""},model:{value:t.imageUrl,callback:function(e){t.imageUrl=e},expression:"imageUrl"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("img",{attrs:{src:t.imageUrl,height:"200",width:"300"}})])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"description","multi-line":"",label:"Description",id:"description",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("h4",[t._v("Choose a Date & Time")])])],1),t._v(" "),s("v-layout",{staticClass:"mb-2",attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),s("p",[t._v(t._s(t.date))])],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-time-picker",{attrs:{format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{disabled:!t.formIsValid,type:"submit"}},[t._v("Create Meetup")])],1)],1),t._v("\n\t\t\t\t"+t._s(t.submitableDateTime)+"\n\n\n\t\t\t")],1)])],1)],1)},staticRenderFns:[]},v=s("VU/8")(m,p,!1,null,null,null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",[s("h3",[t._v(t._s(t.meetup.title))])]),t._v(" "),s("v-card-media",{attrs:{src:t.meetup.imageUrl,height:"400px"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"info--text"},[t._v(t._s(t.meetup.date)+"\n\t\t\t\t\t\t"),s("p",[t._v(t._s(t.meetup.location))])]),t._v(" "),s("div",[t._v(t._s(t.meetup.description))]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"primary"},[s("v-icon",[t._v("face")]),t._v("\n\t\t\t\t\t\tRegister\n\t\t\t\t\t")],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},h=s("VU/8")({props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)}}},f,!1,null,null,null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  Profile\n")])},staticRenderFns:[]},g=s("VU/8")(null,x,!1,null,null,null).exports,_={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparepasswords:function(){return this.password!==this.confirmPassword?"Password do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignUp:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){console.log("Dismissed"),this.$store.dispatch("clearAllError")}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSignUp(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparepasswords],required:""},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("v-btn",{staticClass:"primary",attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                  Sign Up\n                  "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},b=s("VU/8")(_,w,!1,null,null,null).exports,y={data:function(){return{email:"",password:""}},computed:{formIsValid:function(){return""!==this.email&&""!==this.password},user:function(){return this.$store.getters.user},loading:function(){return this.$store.getters.loading},error:function(){return this.$store.getters.error}},watch:{user:function(t){if(null!==t&&void 0!==t)return this.$router.push("/")}},methods:{onSignIn:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){console.log("Dismissed"),this.$store.dispatch("clearAllError")}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-layout",{attrs:{x12:""}},[s("v-container",[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSignIn(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("v-text-field",{attrs:{name:"email",label:"Email",type:"email",id:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",type:"password",id:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("v-btn",{staticClass:"primary",attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                    \t\t\t\t\t\t\tSign In\n\t\t\t\t\t\t\t                    "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},U=s("VU/8")(y,M,!1,null,null,null).exports,$=s("Dd8w"),C=s.n($),k=s("NYxO"),E=s("Sazm");r.a.use(k.a);var I=new k.a.Store({state:{loadedMeetups:[],user:null,loading:!1,error:null},mutations:{setLoadedMeetups:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},setUser:function(t,e){t.user=e},setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{loadedMeetups:function(t){var e=t.commit;e("setLoading",!0),E.database().ref("meetups").once("value").then(function(t){var s=[],r=t.val();for(var a in r)s.push({id:a,title:r[a].title,description:r[a].description,imageUrl:r[a].imageUrl,location:r[a].location,date:r[a].date}),e("setLoadedMeetups",s),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!0)})},createMeetup:function(t,e){var s=t.commit,r={title:e.title,location:e.location,imageUrl:e.imageUrl,description:e.description,date:e.date.toISOString()};E.database().ref("meetups").push(r).then(function(t){console.log(t);var e=t.key;s("createMeetup",C()({},r,{id:e}))}).catch(function(t){console.log(t)})},signUserUp:function(t,e){var s=t.commit;s("setLoading",!0),E.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1),s("clearError");var e={id:t.uid,registeredMeetups:[]};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t.message),console.log(t)})},signUserIn:function(t,e){var s=t.commit;s("setLoading",!0),E.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1),s("clearError");var e={id:t.uid,registeredMeetups:[]};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t.message),console.log(t)})},clearAllError:function(t){(0,t.commit)("clearError")},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredMeetups:[]})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}},user:function(t){return t.user},loading:function(t){return t.loading},error:function(t){return t.error}}}),D=function(t,e,s){I.getters.user?s():s("/sign-in")};r.a.use(o.a);var L=new o.a({routes:[{path:"/",name:"Home",component:u,meta:{title:"Home"}},{path:"/meetups",name:"Meetups",component:d},{path:"/meetup/new",name:"CreateMeetup",component:v,beforeEnter:D},{path:"/meetups/:id",name:"Meetup",props:!0,component:h},{path:"/profile",name:"Profile",component:g,beforeEnter:D},{path:"/sign-in",name:"Signin",component:U},{path:"/sign-up",name:"Signup",component:b}]}),S=s("3EgV"),P=s.n(S),V=(s("7zck"),{render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:this.onClose}},[this._v("\n\t"+this._s(this.text)+"\n")])},staticRenderFns:[]}),A=s("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},V,!1,null,null,null).exports;r.a.use(P.a),r.a.config.productionTip=!1,r.a.component("app-alert",A),new r.a({el:"#app",router:L,store:I,components:{App:i},template:"<App/>",created:function(){var t=this;E.initializeApp({apiKey:"AIzaSyCoVpgJixtx6XCKn_ZsG2kNWinXZaTAFX8",authDomain:"devmee-ed576.firebaseapp.com",databaseURL:"https://devmee-ed576.firebaseio.com",projectId:"devmee-ed576",storageBucket:"devmee-ed576.appspot.com",messagingSenderId:"445319403590"}),E.auth().onAuthStateChanged(function(e){e&&t.$store.dispatch("autoSignIn",e)}),this.$store.dispatch("loadedMeetups")}})}},["NHnr"]);
//# sourceMappingURL=app.ee833b57b05d9c9b4ae0.js.map