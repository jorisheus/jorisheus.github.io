(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+6fq":function(t,e,a){"use strict";a("FNk8");var s={props:{record:{}},computed:{authors(){let t=[];for(let e=0;e<this.record.author.length;e++)0==e?t.push("Posted by "+this.record.author[e].name):1==e?t.push("<br> Among with "+this.record.author[e].name):t.push(", "+this.record.author[e].name);return t.join("")}}},A=a("KHd+"),i=Object(A.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 px-4 my-4"},[e("div",{staticClass:"post-card border-gray-200 dark:border-gray-900 bg-white dark:bg-black rounded-lg hover:shadow-xl z-100 dark:bg-gray-900",attrs:{id:t.record.id}},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{classes:"card-author-tooltip",content:this.authors,placement:"right"},expression:"{classes:'card-author-tooltip', content:this.authors, placement:'right'}"}],staticClass:"post-card-author pt-4 pl-4"},[e("g-link",{attrs:{to:t.record.author[0].path},on:{mouseover:function(e){t.showTooltip=!0},mouseleave:function(e){t.showTooltip=!1}},nativeOn:{mouseover:function(e){t.showTooltip=!0},mouseleave:function(e){t.showTooltip=!1}}},[e("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.record.author[0].image,alt:t.record.author[0].name}})],1)],1),e("g-link",{staticClass:"post-card-image-link",attrs:{to:t.record.path}},[t.record.featured?e("div",{staticClass:"absolute top-0 right-0 pr-4 pt-4 z-10"},[e("span",{staticClass:"w-6 h-6 relative block text-center leading-tight bg-white border border-gray-300 text-black rounded-full"},[e("font-awesome",{attrs:{icon:["fas","star"],size:"xs"}})],1)]):t._e(),e("g-image",{staticClass:"post-card-image",attrs:{src:t.record.image,alt:t.record.title}})],1),e("div",{staticClass:"post-card-content bg-white dark:bg-gray-900 h-full rounded-b-lg"},[e("div",{staticClass:"flex-col relative flex justify-between px-6 pt-4"},[e("p",{staticClass:"text-xs tracking-wide font-medium mt-3 dark:text-white"},[e("g-link",{attrs:{to:t.record.category.path}},[t._v(t._s(t.record.category.title))])],1)]),e("g-link",{staticClass:"flex-col relative flex justify-between rounded-b-lg px-6 h-40 mt-2 dark:text-white",attrs:{to:t.record.path}},[e("h3",{staticClass:"post-card-title tracking-wide mt-0"},[t._v(t._s(t.record.title))]),e("div",{staticClass:"text-xs leading-none absolute bottom-0 pb-6"},[e("p",[e("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))]),t._v("\n             • \n            "+t._s(t.record.timeToRead)+" min read\n          ")])])])],1)],1)])}),[],!1,null,null,null);e.a=i.exports},"/Aku":function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/phoenix-han-Nqdh0G8rdCc-unsplash.42db587.9f9e32b516685d3e11a5e775a65a2248.jpg",size:{width:2560,height:1438},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/phoenix-han-Nqdh0G8rdCc-unsplash.82a2fbd.9f9e32b516685d3e11a5e775a65a2248.jpg 480w","/assets/static/phoenix-han-Nqdh0G8rdCc-unsplash.cbab2cf.9f9e32b516685d3e11a5e775a65a2248.jpg 1024w","/assets/static/phoenix-han-Nqdh0G8rdCc-unsplash.2665e34.9f9e32b516685d3e11a5e775a65a2248.jpg 1920w","/assets/static/phoenix-han-Nqdh0G8rdCc-unsplash.42db587.9f9e32b516685d3e11a5e775a65a2248.jpg 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 1438' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-1aed1e9bf18b5fda85b5c3a86aa88761'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-1aed1e9bf18b5fda85b5c3a86aa88761)' width='2560' height='1438' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAQFBgMCAf/EADMQAAIBAwIEBAQDCQAAAAAAAAECAwAEEQUhEhMxQSIyUWEGFBVxUoHBIzORobHR4fDx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUA/8QAIxEAAgIBAwQDAQAAAAAAAAAAAQIAEQMSMkEEEyExIjNxkf/aAAwDAQACEQMRAD8Ah6sFWxnCxR2ko8yIctwgZIG3t296o6HbPa28CSwhXd%2bbgbbYAAI9Tj/c1lvnLzVpZZf3eNiwGD1Gd8%2b5/tWl0q8vbtXhs7cPJKyrGV8yrg9fXYZyelcpwdNTnKdbXyZ5nguYtUQsZJIZPDw4yowe47fkfWnBZ29sZJh4zIVYrIA267jGRmmrT4Xvbm2lkbWbKWcY4EMwcZ9M9M0idH1KG/C38UkbBg7hmGHAGcjsRt2rAwIq5S2HLjFke56tLxfqElxx5LEs6hRk9gfalNRniz%2b3cukuSynJC%2b2Pevty4lvIpA4ddwQdiF9c966Xel3cltzWtxyfxcJJz1H/AChZVBswPP7My2n2NnE8wDm0aThMUrAhSc4IPfuPsaVl0m3ktYWt0mS3ZuJlDeKPHQg/pViY4c280REZPDwEDcHbwkimbG0F43yIHy6orKwc%2bMbnYjHUj9fajDlRZinUH1JdjC8bLHZ5dZCvEOIs0gbYAgZB3yTWqMkWmacLG1aB9QuQfm3Vs4H4Ae2%2bBjuRSF9qc/yfK00RWUAAVhD5v4jc7VM0Mz8S31wnP5M4BBHfbGfXNeb5CzCxkIaH9lC0tLthIXVo0XJ8fhAwD3%2b9VNO%2bKL7TrWCB0E0HFloJBx5HQBT2z6iunxFdPKIrsMnIlVWSDpht85x1/wAUjoMdjdwTPcFpJgSqRqeHh%2bx7/f2pJYVZlLjstWMyrdafx6lGLNM294ObGwX1PQfnscdxVnVNReKRbWxukS2iHLVEPnOwLN2O%2baiWes3unxNaCQcosOAOBlM9cOB3HU05cLBcw4tUJULuQQD1649KFifB4hK486eYtPa6bfwSR3UbRSud2h3UEnzBT3%2b1c7bR1tJ1kspfqEfAV5oXDjB8pHcjJ9qtWOnvPHMBCSYkJUtsJMdgKU5wWNJUDRlcYCjGR6ffpWNkNaeJmVNNahMPqJ5d3LbxARwxx5CqMZOTv/KqEMKpoMgJLc2MTPnA4mJX0oop7bRIx7Mn3bPFbcpHfgWdsZOcYGB/Wq/wHGlzqDpKOLYkMScjHaiigybDGruEZ1/AjgIAGXYbdKa0KGO5uo4JkVoyMkEdfEAN/bFFFan1yjpgO5N1ERZardWdoqwwRYwF74HfNZz4ojRZYpkUIzgowXYYB229aKKUZR1Owz//2Q==' /%3e%3c/svg%3e"}},GSoK:function(t,e,a){var s={"./2018-mountain-road.jpg":"kZdt","./benjamin-voros-phIFdC6lA4E-unsplash.jpg":"uR+b","./jay-mantri-TFyi0QOx08c-unsplash.jpg":"hJqf","./joris-logo.png":"KvwF","./phoenix-han-Nqdh0G8rdCc-unsplash.jpg":"/Aku"};function A(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}A.keys=function(){return Object.keys(s)},A.resolve=i,t.exports=A,A.id="GSoK"},KvwF:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/joris-logo.bf9604d.40effdaeb938d8556c841ae83018a4a2.png",size:{width:860,height:860},sizes:"(max-width: 860px) 100vw, 860px",srcset:["/assets/static/joris-logo.82a2fbd.40effdaeb938d8556c841ae83018a4a2.png 480w","/assets/static/joris-logo.bf9604d.40effdaeb938d8556c841ae83018a4a2.png 860w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 860 860' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-600ce5fedae0901352591c2529e6e751'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-600ce5fedae0901352591c2529e6e751)' width='860' height='860' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAFxGAABcRgEUlENBAAAHA0lEQVR42u2Y2VMURxjAEay85C15yh%2bQqlSqUnkwT1YSxaAiohgraqVyKMgxu3iAIJp4JUFA2FlQ0IiiCIIKcnhwJBrFoPHiEA%2bUSwwiiniBigiy8OX7eqZ7Z1E0LlgkVd1VXTPdM9PT36%2b/q9tlitUE/%2bfqqSq2qYkLwdOqlLnoBftd/nWRACQACUACkAAkAAlAApAAJAAJQAKQACQACUACkAAkAAlAApAAJAAJQAKQACQACUACGJYJWpUX3g/XWP8JADgJ8MLr1Hgzq1563xTRF8yql9U8oN9s%2bMYsxjI%2b94q3f%2bNlHCve7AAA70cGAJ%2bcR2wAjIvxZfWLWH82%2bUmWQPg8eh58GvU9fBY1F9/xZxOfbAli74031Anr5gsh6Ts%2blvs6P/Gv8TF%2bbCyqhn4EsGDkAFCdiBP23bYKlu9NgB/2rgc/vCfBZ28Kg9X5GyGmcBtEHtiC76xkQs1MCoWI7HhWl2ZZITxLBXN6JINJQs7aGMae0XiLMmMYEIK2ZHccRBekQEzBNtbvERcAk9UgmzeZgDpCJkDqSCuSX/EH8JJ5sgBMaZHwsOsxGEtfXx/E/54OCj4bWGx9Nmi4fR3mbl0BYXssov9qWzN8hcDKGi89901B1Z8wMS6QATBqgKdqcsP2aKyjtLYyaoqqYFtx43Doiu3hA5BbdlhMbM/pYjjbeJHdP7P1wqn6KgGj48kjWJW3kfVTae98CNUtDeLbk/gurTQvVddrILlkr2jX3roG1%2b7cEG1z%2blqbhzWITK5skAV2fa5PtUN4IwAOnjuGE/2b3ff0PoN5uKqNbdqku3qeglqcBk%2bfdbN2fWsTLMyIZu9RudxyFVblJkF/fz9rX7heC/sqjoixLUWpsPt0kdCopVmqbYIaQPMoFxpgVUJwbrlYx%2biCfoQ1G2uEUQOG1QRyywcHELTjZ1y1FtZ%2bggAsxTsQQA9rE5jQXbHQrbcZgDw7gIvNdQ4Atpfmw/7Ko6K9LDvB5q6S0w2u1OXxnvZrCPhsCcX5KTV6X5nPliUwfTP1mWbpfW5ME94YgFY7gMDUnwSALgHArgGL0aFxDahqqoHwPaoY6zyawM6/Doh2a8ddNIlsyEMohVWl5FhtkxIoDJs5gGnTN4fA9GQmbB0JiSAqfbDN%2blRljvYe%2bQMnfQAPfUMBwFecfAPZNZVb7XfAhNHA6ANIk75JXgZtD%2b879NEcxqyZg1FA4VHAYAKmUKw52PeJDuVjvM9CgSM8dfv3HIoJGAF4JxCAua8NgK%2b4sVRcq2YJEYVGXsjhUV4RlPYLdHZ3if6bD9rg680RFApt05IWOYTBVzpB6xCcIBeerhiC2HXs2u8g77VNQNOAprs3IenwLhYGqRy5fAZC0CeIMHi7GbxRy8ZGfst8iTG0Vt9oIO9v89pgT4Qo9OGcXDVvr7hxe9fDo6t4hurvFABaIVoRv%2b2rmf2SaiaiAJmnCp3yART7g3dGCY24crMRVuYmAuhOkITceiwHWh7cRgfZAMlHs%2bHR007hJOOKUm3uFuYEy1A4sepY3x2w6u9wEDw/cMoEKFWlNNSUvlYInFN2CDJOHhTtAy%2bJAgM14CoCoKyP5wUU9n7MWS/GutBcy4DyQv6h6HypaKOD5ADKDYKeQOfXi9elel8w1h5c9TN4fU9oirMaQHm7gjbZra8aCZ92Yr8BQIkDAEqBeR7wBO1YHaAByxFArw7gPAKgdJoXCoN55fYsc8HOaJEHUMH/cgDndMF8Z6SEwVQyC9XUjkK%2bjX3NtF%2bYkRJOu8ZgPVdwc84EdA3ADAz6%2bvs0gStLMBU%2b4pCicgDdvT24ohug%2bV6raKPasnyAh0EKe9SvCVwPK/B9SnJ4WDTmAdbf0uAo%2bgleUo/vs423zCc/UaGnvR/iPDt8tDC4Wxc2RQuLSqchOXJ1OhOchBuTmYkhLGxRIXvkNkmFbLj4wnHR5qvLbBrtOMwQ51vQm5OJcIHJp8TghscY8qIOboXByqKMGJtHvJYKU86vC/w%2bJURY39JT39FYvbD9ge4MnfcB2t5fc4T%2bqWugtKYc7jx6APcfd0AdOr4NhzKZiczeFM404cb9VmjH/J/C1uFLp2AO9tPOsRozvjpc/ZIrZ%2bHLxMVsVevRHCqbrkBs4XbcA9Qy86BvcMcH6w9lMG25h/%2bh/5Fp0E5zQqy/Qxh0cHAvbCt8g%2bTi6awGGCG44/aV9v6UD7B9PG6D6UCEQuS4aF8tV9APQ2grTFtYTYsCxTZXC6kBTLOo/dxzbNNY1Kb/0Hh0tkDnCC88D8BQx1Jdx52fq2F3OPS9AIfADjjwnlaJn%2bTYs0TtNIeesff1kx9jIvWqRMs4Fl1prMmGU6MRPREaTBDqf9mz4fqPPBWWACQACUACkAAkAAlAApAAJAAJQAKQAJwD8A98IMxJiyaPEwAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},WXMF:function(t,e,a){"use strict";a.r(e);a("FNk8");var s=a("+6fq"),A=a("q+Vw"),i=a("0V5J"),o=a("LvDl"),r={components:{CardItem:s.a,ContentHeader:A.a},metaInfo(){return{title:this.$page.blog.title}},computed:{relatedRecords(){return Object(o.sampleSize)(this.$page.related.edges,2)},authors(){let t=[];for(let e=1;e<this.$page.blog.author.length;e++)t.push({name:this.$page.blog.author[e].name,path:this.$page.blog.author[e].path});return t}},mounted(){Object(i.a)(".post-content img")}},c=a("KHd+"),g=null,n=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("Layout",[e("content-header",{attrs:{image:t.$page.blog.image,staticImage:!1,opacity:0}}),e("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden text-gray-800 dark:text-gray-500"},[e("div",{staticClass:"lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8"},[e("section",{staticClass:"post-header container mx-auto px-0 mb-16 text-center"},[e("h1",{staticClass:"text-gray-800 dark:text-gray-400 font-extrabold tracking-wider mb-6"},[t._v(t._s(t.$page.blog.title))]),e("span",{staticClass:"tracking-wide text-sm"},[e("g-link",{staticClass:"font-medium",attrs:{to:t.$page.blog.category.path}},[t._v(t._s(t.$page.blog.category.title))]),t._v(" · \n          "),e("time",{attrs:{datetime:t.$page.blog.datetime}},[t._v(t._s(t.$page.blog.humanTime))]),t._v("\n           · \n          "+t._s(t.$page.blog.timeToRead)+" min read\n        ")],1)])]),e("div",{staticClass:"lg:mx-32 md:mx-16 px-4"},[e("section",{staticClass:"post-content container mx-auto relative"},[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.blog.content)}})]),e("section",{staticClass:"post-tags container mx-auto relative py-10"},t._l(t.$page.blog.tags,(function(a){return e("g-link",{key:a.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 dark:text-gray-400 rounded-full",attrs:{to:a.path}},[t._v(t._s(a.title))])})),1)])]),e("div",{staticClass:"border-t border-b bg-gray-100 dark:border-black dark:bg-gray-900 dark:text-gray-500"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"lg:mx-32 md:mx-16 px-4 sm:px-0"},[e("section",{staticClass:"container mx-auto py-10"},[e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"w-full flex justify-center md:w-10/12 mb-4 text-center"},[e("div",{staticClass:"mb-2 sm:mb-0 w-full"},[e("div",{staticClass:"md:flex p-6 pl-0 self-center"},[e("g-image",{staticClass:"h-16 w-16 md:h-24 md:w-24 mx-auto md:mx-0 md:mr-6 rounded-full bg-gray-200",attrs:{src:t.$page.blog.author[0].image}}),e("div",{staticClass:"text-center md:text-left"},[e("g-link",{staticClass:"text-black dark:text-white",attrs:{to:t.$page.blog.author[0].path}},[e("h2",{staticClass:"text-lg my-1 mt-2 md:mt-0"},[t._v(t._s(t.$page.blog.author[0].name))])]),t.authors.length>0?e("div",{staticClass:"post-authors font-light text-sm pt-2"},[t._v("\n                      Among with\n                      "),t._l(t.authors,(function(a){return e("g-link",{key:a.name,staticClass:"font-normal",attrs:{to:a.path}},[t._v(t._s(a.name))])}))],2):t._e(),e("div",{staticClass:"font-light tracking-wider leading-relaxed py-4"},[t._v(t._s(t.$page.blog.author[0].bio))]),e("div",{},[e("a",{staticClass:"hover:text-blue-500",attrs:{href:t.$page.blog.author[0].facebook,target:"_blank",rel:"noopener noreferrer"}},[e("font-awesome",{attrs:{icon:["fab","facebook"]}})],1),t._v("\n                       \n                      "),e("a",{staticClass:"hover:text-blue-500",attrs:{href:t.$page.blog.author[0].twitter,target:"_blank",rel:"noopener noreferrer"}},[e("font-awesome",{attrs:{icon:["fab","twitter"]}})],1),t._v("\n                       \n                      "),e("a",{staticClass:"hover:text-blue-500",attrs:{href:t.$page.blog.author[0].linkedin,target:"_blank",rel:"noopener noreferrer"}},[e("font-awesome",{attrs:{icon:["fab","linkedin"]}})],1)])],1)],1)])])])])])])]),t.relatedRecords.length>0?e("section",{staticClass:"post-related pt-10"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"text-center"},[e("h4",{staticClass:"font-light my-0"},[t._v("Recommended for you")])]),e("div",{staticClass:"flex flex-wrap justify-center pt-8 pb-8"},t._l(t.relatedRecords,(function(t){return e("CardItem",{key:t.node.id,attrs:{record:t.node}})})),1)])]):t._e()],1)}),[],!1,null,null,null);"function"==typeof g&&g(n);e.default=n.exports},hJqf:function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/jay-mantri-TFyi0QOx08c-unsplash.bbf6dc6.03ece188977fe912fe691d9312d7196e.jpg",size:{width:2200,height:1467},sizes:"(max-width: 2200px) 100vw, 2200px",srcset:["/assets/static/jay-mantri-TFyi0QOx08c-unsplash.82a2fbd.03ece188977fe912fe691d9312d7196e.jpg 480w","/assets/static/jay-mantri-TFyi0QOx08c-unsplash.cbab2cf.03ece188977fe912fe691d9312d7196e.jpg 1024w","/assets/static/jay-mantri-TFyi0QOx08c-unsplash.bbf6dc6.03ece188977fe912fe691d9312d7196e.jpg 2200w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2200 1467' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-046e6e47579f1ed636c536f0b49923d7'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-046e6e47579f1ed636c536f0b49923d7)' width='2200' height='1467' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAArAEADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAgMEBQcIAQYA/8QALxAAAgEDAgMGBQUBAAAAAAAAAQIDAAQRBSEGEjETIkFRYYEUMkKRoQcVIzOxcf/EABkBAQEBAAMAAAAAAAAAAAAAAAIBAAMEBf/EACARAAIBAwQDAAAAAAAAAAAAAAABEQIDMRITIUEEFFH/2gAMAwEAAhEDEQA/ANQLR0IruaAwq5mgkkWNC7kBRuTSXxcXNEA39gJX2rSjDjNfZqOn1S3hkCtIvQkjNBb6rFcDMWSM4yaOtGJMmgY03W6UjqK486%2bdXUinnNQ450yzn023L9pNeuigKegORn8VGcS8dRaVp9/Kki88H8YyejnGP%2b9ay03Fl29zYzdqS1pyrEX3AAO1M9Q4hn1K7ke7meZmfPePiTvtT2anlnWd5wXzNx9c6nowlkmEa2rcsuG%2bclcgn7GnQ/Uy0WzSO2DyNFblmY%2bLYBxn71nCXU5ls7lEdhG0ilgOhwCM/mk7fV5OXAJUEdnttv51fXTBuVZL7sOLFvbpJ7uQqxlReXm6K5z/AIKsDTtftXJWCRGjwMEHIPvWTobqfmZWBQkAAkeIFegsOKTp2nRRK/fI5VyenrQq8f4RXXTk07c69FDyjmH3pjc8VQQxl5JByjyqmbfi%2bG7vobadmXMS4kL/AFUXEuox/tZiilBkwebJrjVpzDG7r6KFF0yoQSc5pa2ZmZiysAve9TSE8SfHsoXCgAgDYUqe5AXXZ2cgn02r0JkzXAut2nbor7py7g%2bNKtKLy6iCKIkTvNjfb3pDSEWW4dZFDDsiNxU3rlnbwWUhhiCZEQ7u30nP%2bUKq0nAOE4G9xq0hdpppFmPiDvvUXdztKwdWyHOwUY9sUwlGLaHH1DJ9TR2cjKsrAkMoGD5UkowXT2S9vdTRurcrqyLgnHyiuQcQzG%2buTJlu2BGPDPQUx1WWSKJY0dgjAsRnqdt6iIScg%2bO9aZKqJUs//9k=' /%3e%3c/svg%3e"}},kZdt:function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/2018-mountain-road.42db587.477273d9cee685cecd2956e246e251e6.jpg",size:{width:2560,height:1708},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/2018-mountain-road.82a2fbd.477273d9cee685cecd2956e246e251e6.jpg 480w","/assets/static/2018-mountain-road.cbab2cf.477273d9cee685cecd2956e246e251e6.jpg 1024w","/assets/static/2018-mountain-road.2665e34.477273d9cee685cecd2956e246e251e6.jpg 1920w","/assets/static/2018-mountain-road.42db587.477273d9cee685cecd2956e246e251e6.jpg 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 1708' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-7eada963922f4fa99f5ff9190021664e'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-7eada963922f4fa99f5ff9190021664e)' width='2560' height='1708' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAArAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwUBBAYCAP/EACwQAAIBAwIEBAcBAQAAAAAAAAECAwAEERIhBRMxQSIjUWEUQnGRobHBMjP/xAAaAQACAwEBAAAAAAAAAAAAAAABAwACBgQF/8QAIREAAgIBBAIDAAAAAAAAAAAAAQIAAxEEFCFBBTESYnH/2gAMAwEAAhEDEQA/AJihUbtn6YpnbyW5j0yQx5Hcjeo5UYP/AEi22wSBXfw4YZXB%2bhzWisYWH3PKrBrHAgplgLYEQ37g9aqyQqGIC4IPrV%2bO1kMiiNSGJ2PSrs9nN5cFzAEYDOtceL6mgLRWQMwFDYM4iDkioMNaOWxh1RM7xjSACFOCw9%2b2a9b2vDknJmdngZTgk40n%2b1N6kmzeZlofahtCD2rQyWNu0jcm4RlHyjY/muXs7NA2uQnbY6sYNW3awbRphLIcK5fMijijbHR13%2b%2b9M7WWFtOhow69GhNLG4NYWVpJc3IuQiDUdQUHHpg43prYx2cluDa25GdterBP8rFuw9gmaNKX7ja245cxJyzMr438wf0UU8YuJ0AUc4YwFSTIpTJaxMgR2Y74CFj4aElgsAzASrdQCTimV6yxO8/sJ0haHk4lOrct7YLnOxZ8iqLcSdpNEUEeV%2bdhkCjaLiJNTSQyLnLFyBge2atRTWTgu8MZUDGNsfau1fI/WK2R7MR3PEruQlfimAI30DTj2pRNcQqXM08kzDIxknennHprSK0Js7GSS4zgYUhE9WOOuPSs7DOZIyWEauOqlacuuBGTmLbS/E4mxjnmkVkcKiZziQhvxRTO6hVUoAOmlR%2bqrZxEzDqDtXcf%2bNXzHua85alWdAJHcMZpyPMmOPTaocodGyE5wS0q/qhoSc5pVcuzXTZPRgB7bmlXkKOBCXKiMLm1SVXDpMQRv41IHvXAhUyIYIpiqLp0qQQB09OtVZFCvhcgFASAe%2bAc0HiI5PEYjF4SXUkjvnFIVy3EsLiYwkiEiaCZ1XOegBz2pRxW9sbRWSQuXA8KsMbZq1cXU6vOyzOCGwPF2qtxEC4srQzKrljuSoyd/Wrg9SNdkT//2Q==' /%3e%3c/svg%3e"}},"q+Vw":function(t,e,a){"use strict";var s={props:{title:{type:String,default:null},sub:{type:String,default:null},image:{type:String|Object,default:null},staticImage:{type:Boolean,default:!0},opacity:{type:Number,default:50}},computed:{hasImage(){return!!this.image}}},A=a("KHd+"),i=Object(A.a)(s,(function(){var t=this,e=t._self._c;return e("div",[t.hasImage?t._e():e("div",{staticClass:"z-100 text-center bg-gray-200 dark:bg-gray-900 py-10 md:py-20"},[null!=t.title?e("h2",{staticClass:"h1 font-extrabold dark:text-gray-400"},[t._v(t._s(t.title))]):t._e(),null!=t.sub?e("p",{staticClass:"text-gray-600 text-light font-sans"},[t._v(t._s(t.sub))]):t._e()]),t.hasImage?e("div",{staticClass:"z-100 relative mt-0 h-auto"},[t.hasImage&&t.staticImage?e("g-image",{staticClass:"object-cover absolute -z-10 h-full w-full",attrs:{src:a("GSoK")("./"+t.image),width:"1400",height:"400"}}):t._e(),t.hasImage&&!t.staticImage?e("g-image",{staticClass:"object-cover absolute -z-10 h-full w-full",attrs:{src:t.image,width:"1400",height:"400"}}):t._e(),t._t("default",(function(){return[e("div",{staticClass:"text-center text-white bg-gray-800 lg:py-48 md:py-32 py-24",class:"bg-opacity-"+t.opacity},[null!=t.title?e("h2",{staticClass:"h1 font-extrabold"},[t._v(t._s(t.title))]):t._e(),null!=t.sub?e("p",{staticClass:"h5 font-sans"},[t._v(t._s(t.sub))]):t._e()])]}))],2):t._e()])}),[],!1,null,null,null);e.a=i.exports},"uR+b":function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/benjamin-voros-phIFdC6lA4E-unsplash.42db587.2f444d708a7a04188d5a9fe02ca0e714.jpg",size:{width:2560,height:1709},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/benjamin-voros-phIFdC6lA4E-unsplash.82a2fbd.2f444d708a7a04188d5a9fe02ca0e714.jpg 480w","/assets/static/benjamin-voros-phIFdC6lA4E-unsplash.cbab2cf.2f444d708a7a04188d5a9fe02ca0e714.jpg 1024w","/assets/static/benjamin-voros-phIFdC6lA4E-unsplash.2665e34.2f444d708a7a04188d5a9fe02ca0e714.jpg 1920w","/assets/static/benjamin-voros-phIFdC6lA4E-unsplash.42db587.2f444d708a7a04188d5a9fe02ca0e714.jpg 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 1709' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-704bede5fc54abafd1426d88438670de'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-704bede5fc54abafd1426d88438670de)' width='2560' height='1709' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAArAEADASIAAhEBAxEB/8QAHAAAAAcBAQAAAAAAAAAAAAAAAAEDBAUGBwII/8QALxAAAgEDAQYFBAEFAAAAAAAAAQIDAAQRBQYSITFBYQcyUXGBExQioSNiscHR8P/EABkBAAIDAQAAAAAAAAAAAAAAAAECAAQFA//EACARAAICAgICAwAAAAAAAAAAAAABAhEDBCExEyISMlH/2gAMAwEAAhEDEQA/AMTnsyGOVpJbQ%2blaPd6ESxJj%2bMVHvouTwj/VbacWUHr5EUoWvaj%2byZjgKSavEWzkjYYRHdJxnFPLfZi8ly0KZWMAsQpIXJwM0/qDwZfwziawkjXLJjsaBs5EQbw3Qf8As1pDbNR2gEk388gGRkZUH/NV/UrFjKcqcdDimjBS6EyfLH9imvDu0iY%2bNT81kcnhTZrMnpSvGCOVHqi92XVnOE4U1h2RVeJH6qF8QfE95zPp%2byELuhUhtSZSBnqIgev9R%2bB1qip4o65pGlCwutTtGdVws8sYkmXtnP5HuQayo%2bSrNt7sE6qzaINAV7eJDGqqPOXAx7ZqD2k2i0HZZjA8xad1CPBbAM5x1boPk9OVed9T2w%2b6mWS4u9Rv5CxJMkjADjzAJ/1TSTaOz%2btEY4ZjGWJlLgFj3HHnXVOu2cZ7kn1E9HzWFnqdnFd2DrJbzrvoyjmPaq5Lo1tcSTxQyRytEcSKjAlCRwz6VnGn7TS2%2bnLDZX12LSYnMMbnGeeMdCfQc6jdntTvtNuLrUjeHTxO%2bULHdaRRyyDzGO1WY53Hgq5prKuUXy%2b2XcsdxP1UJqWjrp%2b59ZS0j%2bWNPMe/YUvP4rNFaPBObWedkKrcQRkMp6HHlJqtzbcx3Aa5uvqy3beYAYHoPQfAp5bXFIoR1fa30Uy51a/vBie7mdSMbobAx7CmYjY%2bgoZoA8azrL53uflkEcOVEy5ohzHtRjpRAdRSSQMGhkdG9VJBpN2LsWk3nYnJLHJNG3OiHIULCAsSAOg5UAwxx/tXNA1LJR//2Q==' /%3e%3c/svg%3e"}}}]);