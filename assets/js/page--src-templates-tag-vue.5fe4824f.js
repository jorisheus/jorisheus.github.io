(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2qYH":function(t,e,a){"use strict";a.r(e);var n=a("+6fq"),o=a("g0NP"),s=a("q+Vw"),l={components:{Pagination:o.a,CardItem:n.a,ContentHeader:s.a},computed:{postLabel:function(){return a("dhqo")("post",this.$page.tag.belongsTo.totalCount)},subTitle:function(){return`A collection of ${this.$page.tag.belongsTo.totalCount} ${this.postLabel}`}},metaInfo(){return{title:this.$page.tag.title}}},i=a("KHd+"),g=null,r=Object(i.a)(l,(function(){var t=this,e=t._self._c;return e("Layout",[e("content-header",{attrs:{title:t.$page.tag.title,sub:t.subTitle}}),e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"flex flex-wrap my-4"},t._l(t.$page.tag.belongsTo.edges,(function(t){return e("CardItem",{key:t.node.id,attrs:{record:t.node}})})),1),e("div",{staticClass:"pagination flex justify-center mb-8"},[t.$page.tag.belongsTo.pageInfo.totalPages>1?e("Pagination",{attrs:{baseUrl:t.$page.tag.path,currentPage:t.$page.tag.belongsTo.pageInfo.currentPage,totalPages:t.$page.tag.belongsTo.pageInfo.totalPages,maxVisibleButtons:5}}):t._e()],1)])],1)}),[],!1,null,null,null);"function"==typeof g&&g(r);e.default=r.exports}}]);