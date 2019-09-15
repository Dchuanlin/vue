import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/home"
import Film from "@/components/film"
import Guangbo from "@/components/guangbo"
import Group from "@/components/group"
import My from "@/components/wode"

import dy from "@/components/film/dianying"
import ds from "@/components/film/dushu"
import tv from "@/components/film/dianshi"
import tc from "@/components/film/tongcheng"
import yy from "@/components/film/yingyue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path:"/home",
    	name:"Home",
    	component:Home
    },
    {
    	path:"/film",
    	name:"Film",
    	component:Film,
    	children:[
	    	{
	    		path:"dianying",
	    		component:dy
	    	},
	    	{
	    		path:"dushu",
	    		component:ds
	    	},
    		{
    			path:"dianshi",
	    		component:tv
    		},
    		{
    			path:"tongcheng",
	    		component:tc
    		},
    		{
    			path:"yingyue",
	    		component:yy
    		}]
    },
    {
    	path:"/guangbo",
    	name:"Guangbo",
    	component:Guangbo
    },
    {
    	path:"/group",
    	name:"Group",
    	component:Group
    },
    {
    	path:"/my",
    	name:"My",
    	component:My
    }
  ]
})
