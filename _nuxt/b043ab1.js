(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{190:function(t,e,r){"use strict";r.r(e);var n=r(30),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"80",height:"40",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},191:function(t,e,r){"use strict";r.r(e);r(88),r(31);var n=r(2),l={data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}},o=r(30),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},192:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("083745fe",content,!0,{sourceMap:!1})},194:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=r(30),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between"},[t.prev?r("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):r("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},195:function(t,e,r){"use strict";r(192)},196:function(t,e,r){var n=r(40),l=r(197),o=r(198);e=n(!1);var c=l(o);e.push([t.i,".nuxt-content p{margin-bottom:20px}.nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.icon.icon-link{background-image:url("+c+");display:inline-block;width:20px;height:20px;background-size:20px 20px}",""]),t.exports=e},197:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},198:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4K"},212:function(t,e,r){"use strict";r.r(e);var n={props:{author:{type:Object,required:!0}}},l=r(30),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:"/blog/author/"+t.author.name}},[t.author.img?r("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:t.author.img}}):t._e(),t._v(" "),r("div",{staticClass:"flex flex-col m-4"},[r("h4",{staticClass:"font-semibold"},[t._v("Author")]),t._v(" "),r("p",[t._v(t._s(t.author.name))]),t._v(" "),r("p",[t._v(t._s(t.author.bio))])])])],1)}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,r){"use strict";r.r(e);var n=r(8),l=r(21),o=(r(15),r(68)),c=(r(31),r(2)),d={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,article,d,f,h,x,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).fetch();case 3:return article=e.sent,e.next=6,r("tags").only(["name","slug"]).where({name:{$containsAny:article.tags}}).fetch();case 6:return d=e.sent,f=Object.assign.apply(Object,[{}].concat(Object(o.a)(d.map((function(s){return Object(l.a)({},s.name,s)}))))),e.next=10,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 10:return h=e.sent,x=Object(n.a)(h,2),v=x[0],m=x[1],e.abrupt("return",{article:article,tags:f,prev:v,next:m});case 15:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},f=(r(195),r(30)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"},[r("div",{staticClass:"relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left"},[r("img",{staticClass:"absolute h-full w-full object-cover",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"absolute top-32 left-32 text-white"},[r("NuxtLink",{attrs:{to:"/"}},[r("Logo")],1),t._v(" "),r("div",{staticClass:"mt-16 -mb-3 flex uppercase text-sm"},[r("p",{staticClass:"mr-3"},[t._v("\n          "+t._s(t.formatDate(t.article.updatedAt))+"\n        ")]),t._v(" "),r("span",{staticClass:"mr-3"},[t._v("•")]),t._v(" "),r("p",[t._v(t._s(t.article.author.name))])]),t._v(" "),r("h1",{staticClass:"text-6xl font-bold"},[t._v(t._s(t.article.title))]),t._v(" "),t._l(t.article.tags,(function(e,n){return r("span",{key:n},[r("NuxtLink",{attrs:{to:"/blog/tag/"+t.tags[e].slug}},[r("span",{staticClass:"truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[t._v("\n            "+t._s(t.tags[e].name)+"\n          ")])])],1)}))],2),t._v(" "),r("div",{staticClass:"flex absolute top-3rem right-3rem"},[r("NuxtLink",{staticClass:"mr-8 self-center text-white font-bold hover:underline",attrs:{to:"/"}},[t._v("\n        All articles\n      ")]),t._v(" "),r("a",{staticClass:"mr-8 self-center text-white font-bold hover:underline",attrs:{href:"https://nuxtjs.org/blog/creating-blog-with-nuxt-content"}},[t._v("\n        Tutorial\n      ")]),t._v(" "),r("AppSearchInput")],1)]),t._v(" "),r("div",{staticClass:"relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"},[r("h1",{staticClass:"font-bold text-4xl"},[t._v(t._s(t.article.title))]),t._v(" "),r("p",[t._v(t._s(t.article.description))]),t._v(" "),r("p",{staticClass:"pb-4"},[t._v("Post last updated: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),r("nav",{staticClass:"pb-6"},[r("ul",t._l(t.article.toc,(function(link){return r("li",{key:link.id,class:{"font-semibold":2===link.depth}},[r("nuxtLink",{staticClass:"hover:underline",class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("author",{attrs:{author:t.article.author}}),t._v(" "),r("PrevNext",{staticClass:"mt-8",attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(190).default,AppSearchInput:r(191).default,Author:r(212).default,PrevNext:r(194).default})}}]);