(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(4957),i=t(9898),l=t(639);var u={};function s(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,b=e.shallow,y=e.scroll,_=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,m=l.useIntersection({rootMargin:"200px"}),w=r(m,2),x=w[0],E=w[1],j=a.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);a.default.useEffect((function(){var e=E&&t&&c.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,E,_,t,o]);var C={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,p,v,b,y,_)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof _?_:o&&o.locale,k=o&&o.isLocaleDomain&&c.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);C.href=k||c.addBasePath(c.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(n,C)};n.default=f},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,l=e.disabled||!c,u=o.useRef(),s=o.useState(!1),f=r(s,2),d=f[0],p=f[1],h=o.useState(n?n.current:null),v=r(h,2),b=v[0],y=v[1],_=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||d||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{root:b,rootMargin:t}))}),[l,b,t,d]);return o.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&y(n.current)}),[n]),[_,d]};var o=t(7294),a=t(6286),c="undefined"!==typeof IntersectionObserver;var i=new Map},2200:function(e,n,t){"use strict";t.r(n);var r=t(1664),o=t(7379),a=t(5893),c=(o.ZP.h1.withConfig({displayName:"Header__Title",componentId:"sc-1twbd0b-0"})(["background:red;"]),o.ZP.h1.withConfig({displayName:"Header__COntainer",componentId:"sc-1twbd0b-1"})(["ul{display:flex;}"]));n.default=function(){return(0,a.jsx)(c,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/",children:(0,a.jsx)("a",{children:"Home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.default,{href:"/sobre",children:(0,a.jsx)("a",{children:"About Us"})})})]})})}},4094:function(e,n,t){"use strict";t.r(n);t(1664);var r=t(7379),o=t(2200),a=t(5893),c=r.ZP.h1.withConfig({displayName:"sobre__COntainer",componentId:"sc-f0e3yw-0"})(["ul{display:flex;}"]);n.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{}),(0,a.jsx)(c,{children:(0,a.jsx)("h1",{children:"Pagima Header"})})]})}},7181:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sobre",function(){return t(4094)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=7181,e(e.s=n);var n}));var n=e.O();_N_E=n}]);