(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[105],{35444:function(te,P,a){"use strict";a.r(P),a.d(P,{default:function(){return Me}});var B=a(57338),Y=a(25084),L=a(57663),R=a(71577),J=a(47673),D=a(4107),$=a(93224),Z=a(2824),f=a(11849),Q=a(34792),g=a(48086),m=a(3182),y=a(94043),u=a.n(y),h=a(49101),v=a(67294),l=a(43581),x=a(81907),C=a(85224),A=a(92598),X=a(37476),b=a(5966),k=a(90672),le=a(96459),xe=a(71194),ue=a(50146),w=a(3843),U=a(64317),ne=a(86615),de=a(22452),e=a(85893),ie=n=>{var t=(0,l.YB)();return(0,e.jsxs)(w.Z,{stepsProps:{size:"small"},stepsFormRender:(i,s)=>(0,e.jsx)(ue.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:t.formatMessage({id:"pages.searchTable.updateForm.ruleConfig",defaultMessage:"\u89C4\u5219\u914D\u7F6E"}),visible:n.updateModalVisible,footer:s,onCancel:()=>{n.onCancel()},children:i}),onFinish:n.onSubmit,children:[(0,e.jsxs)(w.Z.StepForm,{initialValues:{name:n.values.name,desc:n.values.desc},title:t.formatMessage({id:"pages.searchTable.updateForm.basicConfig",defaultMessage:"\u57FA\u672C\u4FE1\u606F"}),children:[(0,e.jsx)(b.Z,{name:"name",label:t.formatMessage({id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"\u89C4\u5219\u540D\u79F0"}),width:"md",rules:[{required:!0,message:(0,e.jsx)(l._H,{id:"pages.searchTable.updateForm.ruleName.nameRules",defaultMessage:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"})}]}),(0,e.jsx)(k.Z,{name:"desc",width:"md",label:t.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descLabel",defaultMessage:"\u89C4\u5219\u63CF\u8FF0"}),placeholder:t.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"}),rules:[{required:!0,message:(0,e.jsx)(l._H,{id:"pages.searchTable.updateForm.ruleDesc.descRules",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01"}),min:5}]})]}),(0,e.jsxs)(w.Z.StepForm,{initialValues:{target:"0",template:"0"},title:t.formatMessage({id:"pages.searchTable.updateForm.ruleProps.title",defaultMessage:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027"}),children:[(0,e.jsx)(U.Z,{name:"target",width:"md",label:t.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,e.jsx)(U.Z,{name:"template",width:"md",label:t.formatMessage({id:"pages.searchTable.updateForm.ruleProps.templateLabel",defaultMessage:"\u89C4\u5219\u6A21\u677F"}),valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,e.jsx)(ne.Z.Group,{name:"type",label:t.formatMessage({id:"pages.searchTable.updateForm.ruleProps.typeLabel",defaultMessage:"\u89C4\u5219\u7C7B\u578B"}),options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,e.jsxs)(w.Z.StepForm,{initialValues:{type:"1",frequency:"month"},title:t.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.title",defaultMessage:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F"}),children:[(0,e.jsx)(de.Z,{name:"time",width:"md",label:t.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.timeLabel",defaultMessage:"\u5F00\u59CB\u65F6\u95F4"}),rules:[{required:!0,message:(0,e.jsx)(l._H,{id:"pages.searchTable.updateForm.schedulingPeriod.timeRules",defaultMessage:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"})}]}),(0,e.jsx)(U.Z,{name:"frequency",label:t.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),width:"md",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})},oe=ie,H=a(636);function ce(n){return V.apply(this,arguments)}function V(){return V=(0,m.Z)(u().mark(function n(t){return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,H.Z)("/api/rule",{params:t}));case 1:case"end":return s.stop()}},n)})),V.apply(this,arguments)}function me(n){return W.apply(this,arguments)}function W(){return W=(0,m.Z)(u().mark(function n(t){return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,H.Z)("/api/rule",{method:"POST",data:(0,f.Z)((0,f.Z)({},t),{},{method:"delete"})}));case 1:case"end":return s.stop()}},n)})),W.apply(this,arguments)}function pe(n){return N.apply(this,arguments)}function N(){return N=(0,m.Z)(u().mark(function n(t){return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,H.Z)("/api/rule",{method:"POST",data:(0,f.Z)((0,f.Z)({},t),{},{method:"post"})}));case 1:case"end":return s.stop()}},n)})),N.apply(this,arguments)}function fe(n){return K.apply(this,arguments)}function K(){return K=(0,m.Z)(u().mark(function n(t){return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,H.Z)("/api/rule",{method:"POST",data:(0,f.Z)((0,f.Z)({},t),{},{method:"update"})}));case 1:case"end":return s.stop()}},n)})),K.apply(this,arguments)}var he=function(){var n=(0,m.Z)(u().mark(function t(i){var s;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s=g.default.loading("Adding"),r.prev=1,r.next=4,pe((0,f.Z)({},i));case 4:return s(),g.default.success("Added successfully"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),s(),g.default.error("Adding failed, please try again!"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},t,null,[[1,9]])}));return function(i){return n.apply(this,arguments)}}(),ge=function(){var n=(0,m.Z)(u().mark(function t(i){var s;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s=g.default.loading("Configuring"),r.prev=1,r.next=4,fe({name:i.name,desc:i.desc,key:i.key});case 4:return s(),g.default.success("Configuration is successful"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),s(),g.default.error("Configuration failed, please try again!"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},t,null,[[1,9]])}));return function(i){return n.apply(this,arguments)}}(),ve=function(){var n=(0,m.Z)(u().mark(function t(i){var s;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(s=g.default.loading("Deleting"),i){r.next=3;break}return r.abrupt("return",!0);case 3:return r.prev=3,r.next=6,me({key:i.map(G=>G.key)});case 6:return s(),g.default.success("Deleted successfully and will refresh soon"),r.abrupt("return",!0);case 11:return r.prev=11,r.t0=r.catch(3),s(),g.default.error("Delete failed, please try again"),r.abrupt("return",!1);case 16:case"end":return r.stop()}},t,null,[[3,11]])}));return function(i){return n.apply(this,arguments)}}(),be=()=>{var n=(0,v.useState)(!1),t=(0,Z.Z)(n,2),i=t[0],s=t[1],O=(0,v.useState)(!1),r=(0,Z.Z)(O,2),G=r[0],z=r[1],Te=(0,v.useState)(!1),q=(0,Z.Z)(Te,2),je=q[0],_=q[1],F=(0,v.useRef)(),Ze=(0,v.useState)(),ee=(0,Z.Z)(Ze,2),M=ee[0],E=ee[1],ye=(0,v.useState)([]),ae=(0,Z.Z)(ye,2),S=ae[0],se=ae[1],I=(0,l.YB)(),re=[{title:(0,e.jsx)(l._H,{id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"Rule name"}),dataIndex:"name",tip:"The rule name is the unique key",render:(o,d)=>(0,e.jsx)("a",{onClick:()=>{E(d),_(!0)},children:o})},{title:(0,e.jsx)(l._H,{id:"pages.searchTable.titleDesc",defaultMessage:"Description"}),dataIndex:"desc",valueType:"textarea"},{title:(0,e.jsx)(l._H,{id:"pages.searchTable.titleCallNo",defaultMessage:"Number of service calls"}),dataIndex:"callNo",sorter:!0,hideInForm:!0,renderText:o=>"".concat(o).concat(I.formatMessage({id:"pages.searchTable.tenThousand",defaultMessage:" \u4E07 "}))},{title:(0,e.jsx)(l._H,{id:"pages.searchTable.titleStatus",defaultMessage:"Status"}),dataIndex:"status",hideInForm:!0,valueEnum:{0:{text:(0,e.jsx)(l._H,{id:"pages.searchTable.nameStatus.default",defaultMessage:"Shut down"}),status:"Default"},1:{text:(0,e.jsx)(l._H,{id:"pages.searchTable.nameStatus.running",defaultMessage:"Running"}),status:"Processing"},2:{text:(0,e.jsx)(l._H,{id:"pages.searchTable.nameStatus.online",defaultMessage:"Online"}),status:"Success"},3:{text:(0,e.jsx)(l._H,{id:"pages.searchTable.nameStatus.abnormal",defaultMessage:"Abnormal"}),status:"Error"}}},{title:(0,e.jsx)(l._H,{id:"pages.searchTable.titleUpdatedAt",defaultMessage:"Last scheduled time"}),sorter:!0,dataIndex:"updatedAt",valueType:"dateTime",renderFormItem:(o,d,c)=>{var T=d.defaultRender,j=(0,$.Z)(d,["defaultRender"]),p=c.getFieldValue("status");return"".concat(p)==="0"?!1:"".concat(p)==="3"?(0,e.jsx)(D.Z,(0,f.Z)((0,f.Z)({},j),{},{placeholder:I.formatMessage({id:"pages.searchTable.exception",defaultMessage:"Please enter the reason for the exception!"})})):T(o)}},{title:(0,e.jsx)(l._H,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:(o,d)=>[(0,e.jsx)("a",{onClick:()=>{z(!0),E(d)},children:(0,e.jsx)(l._H,{id:"pages.searchTable.config",defaultMessage:"Configuration"})},"config"),(0,e.jsx)("a",{href:"https://procomponents.ant.design/",children:(0,e.jsx)(l._H,{id:"pages.searchTable.subscribeAlert",defaultMessage:"Subscribe to alerts"})},"subscribeAlert")]}];return(0,e.jsxs)(x.ZP,{children:[(0,e.jsx)(A.ZP,{headerTitle:I.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:F,rowKey:"key",search:{labelWidth:120},toolBarRender:()=>[(0,e.jsxs)(R.Z,{type:"primary",onClick:()=>{s(!0)},children:[(0,e.jsx)(h.Z,{})," ",(0,e.jsx)(l._H,{id:"pages.searchTable.new",defaultMessage:"New"})]},"primary")],request:(o,d,c)=>ce((0,f.Z)((0,f.Z)({},o),{},{sorter:d,filter:c})),columns:re,rowSelection:{onChange:(o,d)=>{se(d)}}}),(S==null?void 0:S.length)>0&&(0,e.jsxs)(C.Z,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)(l._H,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:S.length})," ",(0,e.jsx)(l._H,{id:"pages.searchTable.item",defaultMessage:"\u9879"}),"\xA0\xA0",(0,e.jsxs)("span",{children:[(0,e.jsx)(l._H,{id:"pages.searchTable.totalServiceCalls",defaultMessage:"Total number of service calls"})," ",S.reduce((o,d)=>o+d.callNo,0)," ",(0,e.jsx)(l._H,{id:"pages.searchTable.tenThousand",defaultMessage:"\u4E07"})]})]}),children:[(0,e.jsx)(R.Z,{onClick:(0,m.Z)(u().mark(function o(){var d,c;return u().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,ve(S);case 2:se([]),(d=F.current)===null||d===void 0||(c=d.reloadAndRest)===null||c===void 0||c.call(d);case 4:case"end":return j.stop()}},o)})),children:(0,e.jsx)(l._H,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})}),(0,e.jsx)(R.Z,{type:"primary",children:(0,e.jsx)(l._H,{id:"pages.searchTable.batchApproval",defaultMessage:"Batch approval"})})]}),(0,e.jsxs)(X.Z,{title:I.formatMessage({id:"pages.searchTable.createForm.newRule",defaultMessage:"New rule"}),width:"400px",visible:i,onVisibleChange:s,onFinish:function(){var o=(0,m.Z)(u().mark(function d(c){var T;return u().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,he(c);case 2:T=p.sent,T&&(s(!1),F.current&&F.current.reload());case 4:case"end":return p.stop()}},d)}));return function(d){return o.apply(this,arguments)}}(),children:[(0,e.jsx)(b.Z,{rules:[{required:!0,message:(0,e.jsx)(l._H,{id:"pages.searchTable.ruleName",defaultMessage:"Rule name is required"})}],width:"md",name:"name"}),(0,e.jsx)(k.Z,{width:"md",name:"desc"})]}),(0,e.jsx)(oe,{onSubmit:function(){var o=(0,m.Z)(u().mark(function d(c){var T;return u().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,ge(c);case 2:T=p.sent,T&&(z(!1),E(void 0),F.current&&F.current.reload());case 4:case"end":return p.stop()}},d)}));return function(d){return o.apply(this,arguments)}}(),onCancel:()=>{z(!1),E(void 0)},updateModalVisible:G,values:M||{}}),(0,e.jsx)(Y.Z,{width:600,visible:je,onClose:()=>{E(void 0),_(!1)},closable:!1,children:(M==null?void 0:M.name)&&(0,e.jsx)(le.Z,{column:2,title:M==null?void 0:M.name,request:(0,m.Z)(u().mark(function o(){return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",{data:M||{}});case 1:case"end":return c.stop()}},o)})),params:{id:M==null?void 0:M.name},columns:re})})]})},Me=be},636:function(te,P,a){"use strict";var B=a(11849),Y=a(34792),L=a(48086),R=a(3182),J=a(94043),D=a.n(J),$=a(11238),Z=a(43581),f={200:"\u670D\u52A1\u5668\u6210\u529F\u8FD4\u56DE\u8BF7\u6C42\u7684\u6570\u636E\u3002",201:"\u65B0\u5EFA\u6570\u636E\u6210\u529F\u3002",202:"\u4E00\u4E2A\u8BF7\u6C42\u5DF2\u7ECF\u8FDB\u5165\u540E\u53F0\u6392\u961F\uFF08\u5F02\u6B65\u4EFB\u52A1\uFF09\u3002",204:"\u5904\u7406\u6210\u529F\u3002",400:"\u53D1\u51FA\u7684\u8BF7\u6C42\u6709\u9519\u8BEF\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u7684\u64CD\u4F5C\u3002",401:"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09\u3002",403:"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684\u3002",404:"\u53D1\u51FA\u7684\u8BF7\u6C42\u9488\u5BF9\u7684\u662F\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u64CD\u4F5C\u3002",406:"\u8BF7\u6C42\u7684\u683C\u5F0F\u4E0D\u53EF\u5F97\u3002",410:"\u8BF7\u6C42\u7684\u8D44\u6E90\u88AB\u6C38\u4E45\u5220\u9664\uFF0C\u4E14\u4E0D\u4F1A\u518D\u5F97\u5230\u7684\u3002",422:"\u5F53\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u53D1\u751F\u4E00\u4E2A\u9A8C\u8BC1\u9519\u8BEF\u3002",500:"\u670D\u52A1\u5668\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u670D\u52A1\u5668\u3002",502:"\u7F51\u5173\u9519\u8BEF\u3002",503:"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4\u3002",504:"\u7F51\u5173\u8D85\u65F6\u3002"},Q=function(){var m=(0,R.Z)(D().mark(function y(u){var h,v,l,x,C,A;return D().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(h=u.response,!(h&&h.status)){b.next=13;break}return v=f[h.status]||h.statusText,l=h.status,b.next=6,h.json();case 6:if(x=b.sent,l===422){C="";for(A in x.errors)C+=x.errors[A][0];v+="[ ".concat(C," ]")}l===401&&(localStorage.removeItem("access_token"),localStorage.removeItem("userInfo"),Z.m8.replace("/login")),l===400&&(v+="[ ".concat(x.message," ]")),L.default.error(v),b.next=14;break;case 13:h||L.default.error("\u60A8\u7684\u7F51\u7EDC\u53D1\u751F\u5F02\u5E38\uFF0C\u65E0\u6CD5\u8FDE\u63A5\u670D\u52A1\u5668");case 14:return b.abrupt("return",h);case 15:case"end":return b.stop()}},y)}));return function(u){return m.apply(this,arguments)}}(),g=(0,$.l7)({errorHandler:Q,credentials:"include",prefix:"/api"});g.interceptors.request.use((m,y)=>{var u=localStorage.getItem("access_token")||"";console.log(y);var h={Authorization:"Bearer ".concat(u)};return{url:m,options:(0,B.Z)((0,B.Z)({},y),{},{headers:h})}}),P.Z=g}}]);