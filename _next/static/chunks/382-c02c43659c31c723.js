(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{79234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(77986),o=n(56429);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});var i=n(26927);n(86006);var a=i._(n(56403));function l(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){var n=a.default,i={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};"function"==typeof e&&(i.loader=e),Object.assign(i,t);var s=i.loader;return n(o._(r._({},i),{loader:function(){return null!=s?s().then(l):Promise.resolve(l(function(){return null}))}}))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return o},NoSSR:function(){return i}}),n(26927),n(86006);var r=n(98131);function o(){var e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){return e.children}},56403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});var r=n(26927)._(n(86006)),o=n(2666),i=function(e){var t=function(e){var t=n.loading,i=r.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),a=n.ssr?r.default.Fragment:o.NoSSR,l=n.lazy;return r.default.createElement(r.default.Suspense,{fallback:i},r.default.createElement(a,null,r.default.createElement(l,e)))},n=Object.assign({loader:null,loading:null,ssr:!0},e);return n.lazy=r.default.lazy(n.loader),t.displayName="LoadableComponent",t}},97611:function(e,t,n){"use strict";var r=n(86054);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},79497:function(e,t,n){e.exports=n(97611)()},86054:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},33253:function(e,t,n){"use strict";var r=n(40431),o=n(46750),i=n(8683),a=n.n(i),l=n(86006),s=n(25710),u=l.forwardRef(function(e,t){var n=e.bsPrefix,i=e.variant,u=e.animation,c=e.size,f=e.children,d=e.as,p=e.className,y=(0,o.Z)(e,["bsPrefix","variant","animation","size","children","as","className"]),h=(n=(0,s.vE)(n,"spinner"))+"-"+u;return l.createElement(void 0===d?"div":d,(0,r.Z)({ref:t},y,{className:a()(p,h,c&&h+"-"+c,i&&"text-"+i)}),f)});u.displayName="Spinner",t.Z=u},73881:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.Z=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(h,t);var n,o,a,l=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,o=f(h);if(n){var i=f(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(e=t)&&("object"===r(e)||"function"==typeof e)?e:c(this)});function h(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h),(t=l.call(this,e)).p=Promise.resolve(),t.resizeHandler=null,t.handlers={},t.syncWindowResize=t.syncWindowResize.bind(c(t)),t.syncEventHandlers=t.syncEventHandlers.bind(c(t)),t.attachUpdateEvents=t.attachUpdateEvents.bind(c(t)),t.getRef=t.getRef.bind(c(t)),t.handleUpdate=t.handleUpdate.bind(c(t)),t.figureCallback=t.figureCallback.bind(c(t)),t.updatePlotly=t.updatePlotly.bind(c(t)),t}return o=[{key:"updatePlotly",value:function(t,n,r){var o=this;this.p=this.p.then(function(){if(!o.unmounting){if(!o.el)throw Error("Missing element reference");return e.react(o.el,{data:o.props.data,layout:o.props.layout,config:o.props.config,frames:o.props.frames})}}).then(function(){!o.unmounting&&(o.syncWindowResize(t),o.syncEventHandlers(),o.figureCallback(n),r&&o.attachUpdateEvents())}).catch(function(e){o.props.onError&&o.props.onError(e)})}},{key:"componentDidMount",value:function(){this.unmounting=!1,this.updatePlotly(!0,this.props.onInitialized,!0)}},{key:"componentDidUpdate",value:function(e){this.unmounting=!1;var t=e.frames&&e.frames.length?e.frames.length:0,n=this.props.frames&&this.props.frames.length?this.props.frames.length:0,r=!(e.layout===this.props.layout&&e.data===this.props.data&&e.config===this.props.config&&n===t),o=void 0!==e.revision,i=e.revision!==this.props.revision;(r||o&&(!o||i))&&this.updatePlotly(!1,this.props.onUpdate,!1)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0,this.figureCallback(this.props.onPurge),this.resizeHandler&&y&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.removeUpdateEvents(),e.purge(this.el)}},{key:"attachUpdateEvents",value:function(){var e=this;this.el&&this.el.removeListener&&p.forEach(function(t){e.el.on(t,e.handleUpdate)})}},{key:"removeUpdateEvents",value:function(){var e=this;this.el&&this.el.removeListener&&p.forEach(function(t){e.el.removeListener(t,e.handleUpdate)})}},{key:"handleUpdate",value:function(){this.figureCallback(this.props.onUpdate)}},{key:"figureCallback",value:function(e){if("function"==typeof e){var t=this.el;e({data:t.data,layout:t.layout,frames:this.el._transitionData?this.el._transitionData._frames:null},this.el)}}},{key:"syncWindowResize",value:function(t){var n=this;y&&(this.props.useResizeHandler&&!this.resizeHandler?(this.resizeHandler=function(){return e.Plots.resize(n.el)},window.addEventListener("resize",this.resizeHandler),t&&this.resizeHandler()):!this.props.useResizeHandler&&this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null))}},{key:"getRef",value:function(e){this.el=e,this.props.debug&&y&&(window.gd=this.el)}},{key:"syncEventHandlers",value:function(){var e=this;d.forEach(function(t){var n=e.props["on"+t],r=e.handlers[t],o=!!r;n&&!o?e.addEventHandler(t,n):!n&&o?e.removeEventHandler(t):n&&o&&n!==r&&(e.removeEventHandler(t),e.addEventHandler(t,n))})}},{key:"addEventHandler",value:function(e,t){this.handlers[e]=t,this.el.on(this.getPlotlyEventName(e),this.handlers[e])}},{key:"removeEventHandler",value:function(e){this.el.removeListener(this.getPlotlyEventName(e),this.handlers[e]),delete this.handlers[e]}},{key:"getPlotlyEventName",value:function(e){return"plotly_"+e.toLowerCase()}},{key:"render",value:function(){return i.default.createElement("div",{id:this.props.divId,style:this.props.style,ref:this.getRef,className:this.props.className})}}],s(h.prototype,o),a&&s(h,a),h}(i.Component);return t.propTypes={data:a.default.arrayOf(a.default.object),config:a.default.object,layout:a.default.object,frames:a.default.arrayOf(a.default.object),revision:a.default.number,onInitialized:a.default.func,onPurge:a.default.func,onError:a.default.func,onUpdate:a.default.func,debug:a.default.bool,style:a.default.object,className:a.default.string,useResizeHandler:a.default.bool,divId:a.default.string},d.forEach(function(e){t.propTypes["on"+e]=a.default.func}),t.defaultProps={debug:!1,useResizeHandler:!1,data:[],style:{position:"relative",display:"inline-block"}},t};var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}(n(86006)),a=(o=n(79497))&&o.__esModule?o:{default:o};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=["AfterExport","AfterPlot","Animated","AnimatingFrame","AnimationInterrupted","AutoSize","BeforeExport","BeforeHover","ButtonClicked","Click","ClickAnnotation","Deselect","DoubleClick","Framework","Hover","LegendClick","LegendDoubleClick","Relayout","Relayouting","Restyle","Redraw","Selected","Selecting","SliderChange","SliderEnd","SliderStart","SunburstClick","Transitioning","TransitionInterrupted","Unhover"],p=["plotly_restyle","plotly_redraw","plotly_relayout","plotly_relayouting","plotly_doubleclick","plotly_animated","plotly_sunburstclick"],y="undefined"!=typeof window}}]);