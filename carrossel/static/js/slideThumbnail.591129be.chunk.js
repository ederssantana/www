"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[66],{46458:(e,t,n)=>{n.r(t),n.d(t,{SlideThumbnail:()=>je,default:()=>Ze});var r=n(17588),o=n(14726),a=n(54816);let i={getInteractivityActionsSnapshot:()=>{throw new Error("interactivity actions snapshot cannot be resolved with the default document model env")},resolveTaskRef:e=>{const t=(0,a.KW)(e);if(!t)return e;throw new Error("task ref '".concat(t,"' cannot be resolved with the default document model env"))}};function s(){return i}var l=n(43488),c=n(89545),d=n(19769);const u={position:"absolute",left:0,right:0,top:0,bottom:0,contain:"strict"},m=(0,o.PA)((e=>{var t,n,o,a;let{backgroundImage:i,backgroundImageOpacity:s,backgroundImageSize:l,backgroundImagePosition:c,backgroundColor:d,onClick:m}=e;const p=m;return r.createElement(r.Fragment,null,r.createElement("div",{onClick:p,style:{...u,backgroundColor:d},role:"button",tabIndex:p?0:void 0,"aria-label":p?"slide background":void 0}),i&&r.createElement("div",{style:{...u,opacity:s,backgroundRepeat:"no-repeat",backgroundPositionX:null!==(t=null===c||void 0===c?void 0:c.PositionLeft)&&void 0!==t?t:0,backgroundPositionY:null!==(n=null===c||void 0===c?void 0:c.PositionTop)&&void 0!==n?n:0,backgroundSize:"".concat(null!==(o=null===l||void 0===l?void 0:l.Width)&&void 0!==o?o:0," ").concat(null!==(a=null===l||void 0===l?void 0:l.Height)&&void 0!==a?a:0),backgroundImage:"url('".concat(encodeURI(i),"')"),pointerEvents:"none"}}))})),p=(0,r.createContext)(void 0);function g(){const e=(0,r.useContext)(p);if(!e)throw new Error("FakeItems context missing");return e}const v="CHART_DATA_TABLE",f=e=>{if("data"in e&&e.data){const{renderZIndex:t}=e;if(void 0!==t&&null!==t)return Number(t);const{ZIndex:n}=e.data;if(void 0!==n&&null!==n)return Number(n)}if("ZIndex"in e){const{ZIndex:t}=e;if(void 0!==t&&null!==t)return Number(t)}};function h(e){return"serializedData"in e?e.serializedData:"data"in e?"serializedData"in e.data?e.data.serializedData:e.data:e}var w=n(33964),I=n(38850);function y(e){let{item:t,parentContainerBoxItem:n,positioned:r}=e;const o=h(t),a=n?h(n):void 0,i=(0,I.M)({item:o,parentContainerBoxItem:a,positioned:r});return i.zIndex=f(t),i}var b=n(37577);const C=b.Ay.div((e=>{let{theme:{color:t}}=e;return{position:"absolute",margin:0,backgroundColor:t.background.accent.default(.15),"& img":{border:"1px solid ".concat(t.border.accent.default()),width:"100%",height:"100%",userSelect:"none"}}})),x=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i);return r.createElement(C,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{width:"100%",height:"100%",contain:"strict",...y({item:n,parentContainerBoxItem:a})},...l})})));var k=n(97690),A=n(67702),S=n(50844),B=n(75743);var E=n(3784),P=n(8889),T=n(40039),z=n(79410);const D=(0,o.PA)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:s,rotate:l,events:c}=e;const{delta:d,slide:u,documentConfig:m}=g(),p=(0,w.l)(c,o,a,i,s),v=h(o),{color:y,curveTos:b,dash:C,headType:x,lineCap:D,Opacity:R,source:F,tailType:L,target:M,thickness:G}=v,{sourceRect:W,targetRect:_}=(0,T.w)(F,M,"logical")(u.items),N=null!==(n=v.dataPositionAndSizeWithoutCurveTos)&&void 0!==n?n:(0,E._)(F,M,"logical")(u.items),Q=(0,P.Bw)(b,N),H=e=>e?(0,I.i)(h(e)):void 0,V=function(e){var t,n;let{parentSlideSize:r,parentContainerBoxLayout:o,parentGroupLayout:a}=e;const i={x:0,y:0,width:null===(t=null!==a&&void 0!==a?a:r)||void 0===t?void 0:t.width,height:null===(n=null!==a&&void 0!==a?a:r)||void 0===n?void 0:n.height,rotate:0};return o?(0,B.c)({layout:i,parentLayout:o}):i}({parentGroupLayout:H(a),parentContainerBoxLayout:H(i),parentSlideSize:u.size}),q={...V,rotate:0},{sourceItemSide:O,targetItemSide:j}=(0,z.Q)({source:F,sourceRect:W,target:M,targetRect:_});return r.createElement(S.i,{"data-cy":"fakeItem-".concat(o.type,"-").concat(o.Id),color:y,curveTos:Q,dash:C,delta:d,documentConfigColors:null===m||void 0===m?void 0:m.colors,eventHandlers:p,headType:x,itemStyle:{display:v.IsHidden?"none":void 0,zIndex:f(o),...(0,A.k)(q)},lineCap:D,opacity:R,ref:t,rotate:l,sourceItemSide:O,sourceRect:W,tailType:L,targetItemSide:j,targetRect:_,thickness:G,viewBox:V,arrowBetweenItemSidesProps:{style:{transformOrigin:"center center",transform:(0,k.Y)(V.rotate)},selectable:!!t}})})));var R=n(8144);const F=r.lazy((()=>Promise.all([n.e(342),n.e(176)]).then(n.bind(n,3144)))),L=e=>r.createElement(r.Suspense,{fallback:null},r.createElement(F,{...e})),M=r.lazy((()=>n.e(227).then(n.bind(n,7546)))),G=e=>r.createElement(r.Suspense,{fallback:null},r.createElement(M,{...e})),W=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{documentConfig:l}=g(),c=(0,w.l)(s,n,o,a,i),{Data:d,Id:u,Options:m,Size:p,Type:f,RawData:h,tableRawData:I,Version:b}="data"in n?n.data:n,C=f,x=C===v,k=b>=1,A=b>=2?R.j.LabelsFontSize:void 0,S=b<2,B=b>=3?m.TextColor:void 0,E={pointerEvents:"none"};return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...y({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===c.onClick?0:void 0,...c},x?r.createElement(G,{cellStyles:m.CellStyles,data:I||h,id:u,tableStyles:m.TableStyles,normalWordBreak:k,style:E}):r.createElement(L,{colors:[...m.Colors],data:d,enableAnimation:!1,height:p.Height,id:u,invertYAxis:m.InvertYAxis,prefix:m.Prefix,showAxisLabels:m.AxisLabels,showLegend:m.Legend,showTooltip:m.Tooltip,suffix:m.Suffix,textColor:m.TextColor,type:C,width:p.Width,documentConfig:l,lineVariant:m.LineVariant,showLineMarkers:m.ShowMarkers,labelsFontSize:A,showTitles:S,colorAllTexts:B,style:E}))})));var _=n(47019),N=n(55634);const Q=(0,o.PA)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,events:a}=e;const{slide:i}=g(),s=null!==(n=i.containerBoxStateMap.get(o.Id))&&void 0!==n?n:{containedItems:[],side:void 0},l={...h(o),zIndex:f(o),type:o.type},c=function(e,t){const n=(0,r.useMemo)((()=>{const n={};return N.K.forEach((r=>{const o=null===e||void 0===e?void 0:e[r];n[r]=o?function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];o(t,...r)}:void 0})),n}),[e,t]);return n}(a,o);return r.createElement(_.x,{ref:t,itemData:l,positioned:!0,sized:!0,rotated:!0,side:s.side,events:c},s.containedItems.map((e=>h(e).containerBoxSide!==s.side?null:r.createElement(He,{key:e.Id,itemType:e.type,item:e,parentGroupItem:void 0,directParentContainerBoxItem:o,indirectParentContainerBoxItem:o,events:a}))))}))),H=b.Ay.div((e=>{let{theme:{size:t}}=e;return{"&.blocked:hover":{"&::before":{content:"",top:t.units(-1/8),left:t.units(-1/8),width:"calc(100% + ".concat(t.units(1/4),")"),height:"calc(100% + ".concat(t.units(1/4),")"),border:"$dashed-border-selected",position:"absolute"}}}})),V=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i);return r.createElement(H,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"layout style",...y({item:n,parentContainerBoxItem:a})},...l},n.groupedItems.map((e=>r.createElement(He,{key:e.Id,itemType:e.type,item:e,parentGroupItem:n,directParentContainerBoxItem:void 0,indirectParentContainerBoxItem:i,events:s}))))}))),q="v=cross_origin",O=new Date,j="v=".concat(O.getDay().toString()+O.getMonth().toString()+O.getFullYear().toString()),Z=(e,t)=>{if(!e||!t)throw new Error("This function needs two params");try{let n=e;if(n.includes(t)){const r=e.split(t)[0];n=r.substring(0,r.length-1)}return n}catch(n){return e}};var Y=n(52428),$=n(42059);var K=n(18537),U=n(22848);const X=e=>{let{className:t,color:n,height:o,size:a,style:i,width:s,...l}=e;return r.createElement(U.A,{className:t,color:n,height:o,size:a,style:i,viewBox:"0 0 16 16",width:s,...l},r.createElement("g",null,r.createElement("path",{d:"M14,13H2V11L3.59,9.41a2,2,0,0,1,2.82,0L7,10,9.59,7.41a2,2,0,0,1,2.82,0L14,9ZM5.5,4A1.5,1.5,0,1,1,4,5.5,1.5,1.5,0,0,1,5.5,4ZM14,1H2A2,2,0,0,0,0,3V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2Z"})))},J=b.Ay.div((e=>{let{theme:{color:t,size:n,shadow:r}}=e;return{background:t.background.reversed.default(.4),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.content.reversed.default(),borderRadius:n.units(.33),padding:n.units(.5),boxShadow:r.short}})),ee=(0,b.Ay)(X)((()=>({width:"50%",height:"50%"}))),te=b.Ay.p((e=>{let{theme:{size:t},$showTitle:n}=e;return{display:n?"block":"none",fontSize:t.units(3)}})),ne=(0,o.PA)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:l,events:c}=e;const d=(0,w.l)(c,o,a,i,l),u=h(o),{resolveTaskRef:m}=s(),p=function(e){if(!e)return e;if(!e.startsWith("http://")&&!e.startsWith("https://"))return e;let t=e;return e.includes(q)&&(t=Z(t,j)),e.includes(j)&&(t=Z(t,q)),t}(m(u.Source)),g=null!==(n=m(u.Offset))&&void 0!==n?n:Y.g,[v,f]=(0,r.useState)(null),[I,b]=(0,r.useState)(!1),[C,x]=(0,r.useState)(null),k=(0,r.useRef)(!1),A=(0,r.useRef)(/\.(gif)|data:image\/gif/.test(p)),S=(0,r.useCallback)((()=>{try{!function(e,t,n){const r=new Image;let o=n;n||(o={mimeType:"image/png"}),r.onload=()=>{try{var e;const n=document.createElement("canvas");n.width=r.width,n.height=r.height;const a=n.getContext("2d");a&&a.drawImage(r,0,0);const i=n.toDataURL(null===(e=o)||void 0===e?void 0:e.mimeType);t(null,i)}catch(n){t(!0,null)}},r.onerror=()=>{t(!0,null)},r.setAttribute("crossOrigin","anonymous"),r.src=(0,$.g)(e,{v:"anonymous"})}(p,((e,t)=>{k.current&&(e?b(!0):(f(t),x(p)))}))}catch(e){console.warn(e),b(!0)}}),[p]);if((0,r.useEffect)((()=>(k.current=!0,()=>{k.current=!1})),[]),(0,r.useEffect)((()=>{A.current&&S()}),[S]),(0,r.useEffect)((()=>{A.current?!A.current||v&&C===p||S():(f(null),b(!1),x(null))}),[p,v,C,S]),A.current&&!v&&!I)return null;const B=parseFloat(u.Size.Height)<200;return r.createElement("div",{"data-cy":"fakeItem-".concat(o.type,"-").concat(u.Id),ref:t,style:{contain:"strict",overflow:"hidden",willChange:"transform",...y({item:o,parentContainerBoxItem:i})},className:u.Frame,role:"button",tabIndex:void 0===d.onClick?0:void 0,...d},I?r.createElement(J,null,r.createElement(ee,null),r.createElement(te,{$showTitle:!B},"GIF")):r.createElement("div",{style:{position:"absolute",top:"".concat(g.top,"%"),left:"".concat(g.left,"%"),right:"".concat(g.right,"%"),bottom:"".concat(g.bottom,"%")}},r.createElement("img",{style:{position:"relative",width:"100%",height:"100%",display:"block",maxWidth:"100%",transform:(0,K.P)(u.Transformations),objectFit:u.objectFit},src:v||p,alt:u.Name})))})));var re=n(29523),oe=n(87726);const ae=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:l,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:p=!1,timerMessage:g}=e;const{Question:v,Answers:f,Appearance:h,Id:w}=t,I=f.filter((e=>{let{Image:t}=e;return t.length>0}));return r.createElement(oe.D,{type:re.r.Image,itemId:w,question:v||c("__new.editor.activityConfiguration.questionPlaceholder"),disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:h,answers:I,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:p,timerMessage:g,dataCy:"imageInteractiveQuestionItem"})};ae.Container=oe.D.Container,ae.Question=oe.D.Question,ae.Subtitle=oe.D.Subtitle,ae.Answers=oe.D.Answers,ae.Answer=oe.D.Answer,ae.Feedback=oe.D.Feedback,ae.Button=oe.D.Button;const ie=(0,o.PA)(ae);var se=n(42118);const le=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:l,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:p=!1,timerMessage:g}=e;const{Question:v,Answers:f,Appearance:h,Id:w}=t,I=f.filter((e=>{let{Text:t}=e;return t.length>0})),y=c("__new.editor.content.questionMultiple");return r.createElement(oe.D,{type:re.r.Quiz,itemId:w,question:v||y,disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:h,answers:I,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:p,timerMessage:g,dataCy:"quizInteractiveQuestionItem"})};le.Container=oe.D.Container,le.Question=oe.D.Question,le.Subtitle=oe.D.Subtitle,le.Answers=oe.D.Answers,le.Answer=oe.D.Answer,le.Feedback=oe.D.Feedback,le.Button=oe.D.Button;const ce=(0,o.PA)(le);var de=n(74154);const ue=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:l,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:p=!1,showResultPreview:g=!1,timerMessage:v}=e;const{Question:f,Answers:h,Appearance:w,Id:I}=t,y=h.filter((e=>{let{Text:t}=e;return t.length>0})),b=c("__new.editor.content.questionMultiple");return r.createElement(oe.D,{type:re.r.Survey,itemId:I,question:f||b,disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:w,answers:y,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:p,showResultPreview:g,showResultEnabled:t.Options.ShowResults,timerMessage:v,dataCy:"surveyInteractiveQuestionItem"})};ue.Container=oe.D.Container,ue.Question=oe.D.Question,ue.Subtitle=oe.D.Subtitle,ue.Answers=oe.D.Answers,ue.Answer=oe.D.Answer,ue.Feedback=oe.D.Feedback,ue.Button=oe.D.Button;const me=(0,o.PA)(ue),pe=e=>{let{item:t,disabled:n,feedbackText:o,showAnswersIcon:a,feedbackColor:i,documentColors:s,t:l,hasDefaultAnimation:c=!1,answerSelectedPreview:d=!1,selectedAnswerIds:u,showCorrectAnswers:m=!1,timerMessage:p}=e;const{Question:g,Answers:v,Appearance:f,Id:h}=t;return r.createElement(oe.D,{type:re.r.TrueFalse,itemId:h,question:g||l("__new.editor.content.placeholderQuestionTrueFalse"),disabled:n,showAnswersIcon:a,hasDefaultAnimation:c,documentColors:s,feedbackText:o,feedbackColor:i,appearance:f,answers:v,answerSelectedPreview:d,selectedAnswerIds:u,showCorrectAnswers:m,timerMessage:p,dataCy:"trueFalseInteractiveQuestionItem"})};pe.Container=oe.D.Container,pe.Question=oe.D.Question,pe.Answers=oe.D.Answers,pe.Answer=oe.D.Answer,pe.Feedback=oe.D.Feedback,pe.Button=oe.D.Button;const ge=(0,o.PA)(pe),ve=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,selectedAnswerIds:s,showCorrectAnswers:l=!1,events:c}=e;const{t:d,documentConfig:u}=g(),m=(0,w.l)(c,n,o,a,i),p=h(n),{Frame:v,Type:f}=p;return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",overflow:"hidden",...y({item:n,parentContainerBoxItem:a})},className:v,role:"button",tabIndex:void 0===m.onClick?0:void 0,...m},(()=>{switch(f){case re.r.Quiz:return r.createElement(ce,{key:n.Id,item:p,t:d,selectedAnswerIds:s,showCorrectAnswers:l,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case re.r.OpenAnswer:return r.createElement(se.R,{key:n.Id,item:p,t:d,userAnswer:null!==s&&void 0!==s&&s.length?s[0]:void 0,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case re.r.TrueFalse:return r.createElement(ge,{key:n.Id,item:p,t:d,selectedAnswerIds:s,showCorrectAnswers:l,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case re.r.Image:return r.createElement(ie,{key:n.Id,item:p,t:d,selectedAnswerIds:s,showCorrectAnswers:l,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case re.r.Sort:return r.createElement(de.N,{key:n.Id,item:p,t:d,showCorrectAnswers:l,disabled:l,documentColors:null===u||void 0===u?void 0:u.colors});case re.r.Survey:return r.createElement(me,{key:n.Id,item:p,t:d,selectedAnswerIds:s});default:throw new Error("InteractiveQuestion type ".concat(f," does not have any component associated"))}})())}))),fe=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i),c=h(n);return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...y({item:n,parentContainerBoxItem:a}),zIndex:99999,maxWidth:"100%",width:"100%",height:"100%"},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},r.createElement("img",{style:{width:32,height:32},src:c.Source,alt:c.Name}))})));var he=n(60766);const we=b.Ay.div((e=>{let{theme:{color:t,size:n}}=e;return{background:t.background.reversed.default(.4),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.content.reversed.default(),borderRadius:n.units(2/3),padding:n.units(1),paddingLeft:void 0,boxShadow:"0 1px ".concat(n.units(1)," 0 ").concat(t.shadow.primary.default(.2)),"& svg":{width:n.units(5.5)}}})),Ie=b.Ay.div.attrs((e=>{let{$thumbnail:t}=e;return{style:{background:"center / cover url(".concat(t,") no-repeat")}}}))((()=>({width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}))),ye=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=(0,w.l)(s,n,o,a,i),c=h(n),{thumbnail:d}=c,u=parseInt(c.Size.Height,10)<50?"80%":"100%";return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...y({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},d?r.createElement(Ie,{$thumbnail:d}):r.createElement(we,null,r.createElement(he.A,{height:u})))}))),be=b.Ay.div({position:"absolute",display:"inherit",fontSize:"99%","& svg":{display:"inherit",fontSize:"99%",pointerEvents:"none",animation:"none",filter:"none"},"& svg > *":{animation:"none",filter:"none"},"& svg text":{userSelect:"none",cursor:"default",fontSize:"99%"}}),Ce=/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent),xe=(0,o.PA)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:l,events:c}=e;const d=(0,w.l)(c,o,a,i,l),u=(0,r.useRef)(null),m=h(o),{resolveTaskRef:p}=s(),g=null===(n=m.Colors)||void 0===n?void 0:n[0],v=p(m.SourceSvg);(0,r.useLayoutEffect)((()=>{const e=u.current;e&&(e.querySelectorAll(".color1").forEach((e=>{e.style.fill=g})),Ce&&e.querySelectorAll("linearGradient").forEach((e=>{const t=e.id;e.setAttribute("id","rerender"),e.setAttribute("id",t)})))}),[v,g]);const f=(0,r.useCallback)((e=>{u.current=e,t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e))}),[t]);return r.createElement(be,{"data-cy":"fakeItem-".concat(o.type,"-").concat(o.Id),className:"svg-item svg-item-fake",dangerouslySetInnerHTML:{__html:v},ref:f,style:{contain:"size layout style",...y({item:o,parentContainerBoxItem:i})},...d})})));var ke=Array.isArray;function Ae(e){var t,n,r=typeof e,o="";if("string"===r||"number"===r)return e||"";if(ke(e)&&e.length>0)for(t=0,n=e.length;t<n;t++)""!==(r=Ae(e[t]))&&(o+=(o&&" ")+r);else for(t in e)e.hasOwnProperty(t)&&e[t]&&(o+=(o&&" ")+t);return o}var Se=n(8944),Be=n(65210),Ee=n(68998);const Pe=b.Ay.div({"-webkit-line-break":"after-white-space","-webkit-nbsp-mode":"normal",lineBreak:"normal",display:"block",outline:"none","&.text-bold":{fontWeight:"bold"},"&.text-italic":{fontStyle:"italic"},"&.text-align-left":{textAlign:"left"},"&.text-align-right":{textAlign:"right"},"&.text-align-justify":{textAlign:"justify"},"&.text-align-center":{textAlign:"center"},"&.uppercase":{textTransform:"uppercase"},"& sub":{verticalAlign:"sub",fontSize:"60%"},"& sup":{verticalAlign:"super",fontSize:"60%"},"&.genially-view-text-indent-list-v4":{"ul, ol":{paddingLeft:"1.8em",listStylePosition:"outside"}},"& *":{pointerEvents:"none"},"& ul":{listStyleType:"disc",ul:{listStyleType:"circle",ul:{listStyleType:"square"}}},"& ol":{listStyleType:"decimal",ol:{listStyleType:"lower-latin",ol:{listStyleType:"lower-roman"}}}},(e=>{let{theme:{color:t,size:n}}=e;return{"&.text-effect-shadow":{textShadow:"2px 2px 6px ".concat(t.shadow.primary.default(.5))},"&.interparagraph_medium":{...Ee.iF.mixins.setInterparagraph(n.units(1))},"&.interparagraph_big":{...Ee.iF.mixins.setInterparagraph(n.units(2.25))},"& p":{margin:"0 0 ".concat(n.units(1.25))},"& ul, & ol":{lineBreak:"normal",display:"block",marginTop:0,marginBottom:0,paddingLeft:n.units(3.125),listStylePosition:"inside"},"&.genially-view-text-indent-list-v3":{"ul, ol":{paddingLeft:n.units(6.25),listStylePosition:"outside"}},"&.genially-view-text-indent-paragraph-v5 blockquote":{margin:"0 0 0 ".concat(n.units(5)),border:"none",padding:0}}})),Te=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{canBeTranslated:l}=g(),c=(0,w.l)(s,n,o,a,i),d=h(n),u=(0,Be.I)(d),m=d.Version>=6;return r.createElement(Pe,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,className:Ae([u,{notranslate:!l}]),style:{contain:"size layout style",...y({item:n,parentContainerBoxItem:a}),backgroundColor:d.Background,color:d.Color,fontSize:d.FontSize,fontFamily:(0,Se.f)(d.FontFamily,m),padding:d.Padding,lineHeight:d.LineHeight,letterSpacing:"".concat(d.LetterSpacing,"px"),wordWrap:d.Version<2?"initial":"break-word"},dangerouslySetInnerHTML:{__html:d.TextMessage},...c})})));var ze=n(63507),De=n(55404);const Re=(0,b.Ay)(Ee.Lf)((e=>{let{theme:{color:t}}=e;return{color:t.content.secondary.default()}})),Fe=(0,b.SL)((e=>{let{theme:{color:t},width:n,name:o}=e;const a=(0,ze.v4)(),[i,s]=(0,r.useState)(null),[l,c]=(0,r.useState)(null),d=(0,r.useCallback)((()=>{const e=[];for(let t=0;t<41;t+=1)e.push(128);if(i&&l){l.clearRect(0,0,i.width,i.height),l.fillStyle=t.content.secondary.default();for(let t=0;t<41;t+=1){var n;const r=8*t,o=4,a=-((null!==(n=e[t])&&void 0!==n?n:0)/2||5);l.fillRect(r,i.height,o,a)}}}),[i,l,t.content.secondary]);return(0,r.useEffect)((()=>{const e=document.querySelector("#canva-element-fake".concat(a));e&&(s(e),c(e.getContext("2d")),d())}),[a,d]),r.createElement("div",{className:"widget-audio-player"},r.createElement("div",{className:"widget-audio-player-play-container"},r.createElement(De.A,null)),r.createElement("div",{className:"widget-audio-player-info-container"},r.createElement("div",{className:"widget-audio-player-bars-group",id:"widget-audio-player-bars-group"},r.createElement("canvas",{id:"canva-element-fake".concat(a),style:{width:"100%",height:"42%"}})),r.createElement("div",{className:"widget-audio-player-file-progress-bar"}),r.createElement("div",{className:"widget-audio-player-file-name-container"},r.createElement(Re,{className:"widget-audio-player-file-name",style:{fontSize:parseFloat(n)/22}},o))))})),Le=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{t:l}=g(),c=(0,w.l)(s,n,o,a,i),d=h(n),{Name:u,Size:m}=d;return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...y({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===c.onClick?0:void 0,...c},r.createElement(Fe,{name:u||l("__new.shared.items.type.widget-audio"),width:m.Width}))})));var Me=n(26564),Ge=n(70445),We=n(47836);const _e=b.Ay.div((()=>({}))),Ne=b.Ay.div((e=>{let{theme:{color:t}}=e;return{background:t.background.reversed.default(.8),color:t.content.reversed.default(),"& svg":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),Qe=(0,o.PA)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const[l,c]=(0,r.useState)(!1),d=h(n),{Thumbnail:u,Name:m,Size:p}=d,v=d.UploadedFrom===Me.xG.File,{isVideoVisualizationForbidden:f}=g(),I=(0,r.useCallback)((()=>{c(!0)}),[]),b={...(0,w.l)(s,n,o,a,i),onError:I},C={"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...y({item:n,parentContainerBoxItem:a})},...b};return v&&(l||f)?r.createElement(_e,{style:C.style},r.createElement(Ge.S,{isVisualizationForbidden:f,width:parseFloat(p.Width)})):u?r.createElement(We.u,{alt:null!==m&&void 0!==m?m:"",dataCy:C["data-cy"],itemEvents:b,ref:C.ref,src:u,style:C.style}):r.createElement(Ne,{...C},r.createElement(X,{height:"50%",width:"50%"}))}))),He=(0,o.PA)((e=>{let{itemType:t,item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const l=g(),c=(0,r.useRef)(null);function u(e){return{item:e.item,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,ref:l.renderItem?c:void 0,events:s}}function m(e){switch(t){case d.S.Activity:return r.createElement(ve,{...u(e)});case d.S.Area:return r.createElement(x,{...u(e)});case d.S.Arrow:return r.createElement(D,{...u(e)});case d.S.Chart:case v:return r.createElement(W,{...u(e)});case d.S.Group:return r.createElement(V,{...u(e)});case d.S.Image:return r.createElement(ne,{...u(e)});case d.S.Pin:return r.createElement(fe,{...u(e)});case d.S.RichContent:return r.createElement(ye,{...u(e)});case d.S.Svg:return r.createElement(xe,{...u(e)});case d.S.Text:return r.createElement(Te,{...u(e)});case d.S.WidgetAudio:{const t=h(n);return t.DisplayPlayer&&!t.IsBackground?r.createElement(Le,{...u(e)}):null}case d.S.WidgetVideo:return r.createElement(Qe,{...u(e)});case d.S.ContainerBox:return r.createElement(Q,{...u(e)});default:return console.error("tried to render a fake item for the unknown item type ".concat(t)),null}}return l.renderItem?l.renderItem({item:n,itemId:n.Id,itemType:t,itemRef:c,itemZIndex:f(n),parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s,renderItemNode:m}):m({item:n})}));var Ve;!function(e){e.RichContents="richContents",e.WidgetsAudio="widgetsAudio",e.WidgetsVideo="widgetsVideo",e.Charts="charts",e.Areas="areas",e.Groups="groups",e.Images="images",e.Pins="pins",e.Svgs="svgs",e.Texts="texts",e.Activities="activities",e.Arrows="arrows",e.ContainerBoxes="containerBoxes"}(Ve||(Ve={}));const qe=[];function Oe(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((e=>(e=>{const t=h(e);return!((0,l.X)(t)&&t.IdGroup)&&!((0,c.Kb)(t)&&t.containerBoxId)})(e))).map((e=>({item:e,itemType:t}))))&&void 0!==n?n:qe}const je=(0,o.PA)((e=>{var t,n,o,a,i;let{canBeTranslated:l=!0,delta:u,documentConfig:g,onBackgroundClick:v,onItemClick:f,onItemMouseEnter:w,onItemMouseLeave:I,renderItem:y,showBackgroundColor:b=!0,showBackgroundImage:C=!0,slide:x,t:k,isVideoVisualizationForbidden:A=!1,containerBoxStateMap:S}=e;const B=((e,t)=>{if(t)return"data"in e?e.data.BackgroundColor:e.BackgroundColor})(x,b),E=((e,t)=>{var n;if(t)return"Background"in e?e.Background:null===(n=e.background)||void 0===n?void 0:n.currentBackgroundImage})(x,C),P=(e=>{if("data"in e){const{resolveTaskRef:t}=s();return t(e.data.SizeBackground)}return e.SizeBackground?e.SizeBackground:e.BackgroundHeight&&e.BackgroundWidth?{Width:e.BackgroundWidth,Height:e.BackgroundHeight}:{Width:e.Size.Width,Height:e.Size.Height}})(x),T=(e=>{if("data"in e){const{resolveTaskRef:t}=s();return t(e.data.PositionBackground)}return e.PositionBackground?e.PositionBackground:e.PositionBackgroundLeft&&e.PositionBackgroundTop?{PositionTop:e.PositionBackgroundTop,PositionLeft:e.PositionBackgroundLeft}:e.PositionBackground})(x),z="data"in x?x.data.OpacityBackground:x.OpacityBackground,D={width:parseFloat(null!==(t=("data"in x?x.data.Size:null!==(n=x.Size)&&void 0!==n?n:x).Width)&&void 0!==t?t:"0"),height:parseFloat(null!==(o=("data"in x?x.data.Size:null!==(a=x.Size)&&void 0!==a?a:x).Height)&&void 0!==o?o:"0")},R=(0,r.useMemo)((()=>({onClick:f,onMouseEnter:w,onMouseLeave:I})),[f,w,I]),F=(e=>{if("allItems"in e&&e.allItems)return e.allItems;const t=[];return Object.values(Ve).forEach((n=>{const r=e[n];r&&t.push(...r)})),t})(x);if(S){var L,M;const e=null!==(L=null===(M=x.containerBoxes)||void 0===M?void 0:M.length)&&void 0!==L?L:0;if(e!==S.size)throw new Error("provided containerBoxStateMap size (".concat(S.size,") does not match the number of containerBoxes (").concat(e,")"))}const G=new Map;null===(i=x[Ve.ContainerBoxes])||void 0===i||i.forEach((e=>{var t;const n=null===S||void 0===S||null===(t=S.get(e.Id))||void 0===t?void 0:t.side;G.set(e.Id,{containedItems:[],side:n})})),F.forEach((e=>{const t=h(e);if((0,c.Kb)(t)&&t.containerBoxId){G.get(t.containerBoxId).containedItems.push(e)}}));const W={slide:{items:F,containerBoxStateMap:G,size:D},delta:u,canBeTranslated:l,documentConfig:g,t:k,renderItem:y,isVideoVisualizationForbidden:A};return r.createElement(p.Provider,{value:W},r.createElement(m,{key:x.Id,backgroundImageOpacity:z,backgroundImage:E,backgroundImageSize:P,backgroundImagePosition:T,backgroundColor:B,onClick:v}),[...Oe(x[Ve.Activities],d.S.Activity),...Oe(x[Ve.Areas],d.S.Area),...Oe(x[Ve.Arrows],d.S.Arrow),...Oe(x[Ve.ContainerBoxes],d.S.ContainerBox),...Oe(x[Ve.Charts],d.S.Chart),...Oe(x[Ve.Groups],d.S.Group),...Oe(x[Ve.Images],d.S.Image),...Oe(x[Ve.Pins],d.S.Pin),...Oe(x[Ve.RichContents],d.S.RichContent),...Oe(x[Ve.Svgs],d.S.Svg),...Oe(x[Ve.Texts],d.S.Text),...Oe(x[Ve.WidgetsAudio],d.S.WidgetAudio),...Oe(x[Ve.WidgetsVideo],d.S.WidgetVideo)].map((e=>{let{item:t,itemType:n}=e;return r.createElement(He,{key:t.Id,itemType:n,item:t,parentGroupItem:void 0,directParentContainerBoxItem:void 0,indirectParentContainerBoxItem:void 0,events:R})})))})),Ze=je}}]);
//# sourceMappingURL=https://s3-static-genially.genially.com/view/static/js/slideThumbnail.591129be.chunk.js.map