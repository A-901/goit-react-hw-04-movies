(this.webpackJsonphm4=this.webpackJsonphm4||[]).push([[2],{29:function(t,e,n){"use strict";n.r(e);var r=n(41),c=n(36),o=n(37),a=n(39),i=n(38),u=n(0),s=n.n(u),f=n(8),l=n(35),p=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={movies:[],error:null},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;l.b().then((function(e){return t.setState({movies:e.data.results})})).catch((function(e){return t.setState({error:e.message})}))}},{key:"render",value:function(){var t=this.state,e=t.movies,n=t.error,c=this.props.location;return s.a.createElement("div",null,s.a.createElement("h2",null,"Best of the best"),n&&s.a.createElement("p",null,"Today is not a good day"),e.length>0&&s.a.createElement("ul",null,e.map((function(t){return s.a.createElement("li",{key:t.id},s.a.createElement(f.b,{to:{pathname:"/movies/".concat(t.id),state:{from:Object(r.a)({},c)}}},t.title))}))))}}]),n}(u.Component);e.default=p},35:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return b}));var r=n(40),c=n.n(r),o="https://api.themoviedb.org/3",a="4c723f08ea7a4a76125776c3387f72cf",i="https://image.tmdb.org/t/p/w200",u="https://image.tmdb.org/t/p/w300",s=function(){return c.a.get("".concat(o,"/trending/movie/day?api_key=").concat(a))},f=function(t){return c.a.get("".concat(o,"/search/movie?api_key=").concat(a,"&query=").concat(t))},l=function(t){return c.a.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(a))},p=function(t){return c.a.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(a))},b=function(t){return c.a.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(a))}},41:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=HomePage-page.237b298c.chunk.js.map