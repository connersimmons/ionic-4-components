(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Jbfe:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("gIcY"),i=function(){function l(l){this.formBuilder=l,this.setupForm()}return l.prototype.ngOnInit=function(){},l.prototype.setupForm=function(){this.form=this.formBuilder.group({title:["",[t.l.required]],name:["",[t.l.required]],email:["",[t.l.email,t.l.required]],password:["",[t.l.minLength(6),t.l.required]]})},l.prototype.onSubmit=function(){},l}(),b=function(){return function(){}}(),o=u("pMnS"),a=u("NcP4"),r=u("tzjl"),s=u("MzJX"),d=u("Xqnl"),g=u("2MiI"),c=u("ZZ/e"),f=u("oBZk"),h=u("Ip0R"),p=u("lU/i"),m=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%}.label[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:auto}.editable-label-disabled[_nghost-%COMP%]{pointer-events:none}.title-input[_ngcontent-%COMP%]{font-size:20px;font-weight:500;color:var(--color)}"]],data:{animation:[{type:7,name:"titleAnim",definitions:[{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:"0",transform:"translateY(-20%)"},offset:null},{type:4,styles:{type:6,styles:{opacity:"1",transform:"translateY(0)"},offset:null},timings:"175ms ease-out"}],options:null}],options:{}}]}});function C(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"ion-title",[],[[24,"@titleAnim",0]],[[null,"click"],[null,"@titleAnim.done"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.edit()&&e),"@titleAnim.done"===n&&(e=!1!==t.titleAnimDone(u)&&e),e},f.zb,f.L)),e.rb(1,49152,null,0,c.Ab,[e.h,e.k,e.A],null,null),(l()(),e.Jb(2,0,[" ",""]))],null,function(l,n){var u=n.component;l(n,0,0,void 0),l(n,2,0,u.value)})}function v(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"ion-label",[["class","label"]],[[24,"@titleAnim",0]],[[null,"click"],[null,"@titleAnim.done"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.edit()&&e),"@titleAnim.done"===n&&(e=!1!==t.titleAnimDone(u)&&e),e},f.lb,f.x)),e.rb(1,49152,null,0,c.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(2,0,[" ",""]))],null,function(l,n){var u=n.component;l(n,0,0,void 0),l(n,2,0,u.value)})}function B(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,8,"ion-input",[],[[24,"@titleAnim",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"blur"],[null,"keyup.enter"],[null,"keyup.escape"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,3)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,3)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.internalValue=u)&&t),"blur"===n&&(t=!1!==i.onBlur()&&t),"keyup.enter"===n&&(t=!1!==i.onEnterClick()&&t),"keyup.escape"===n&&(t=!1!==i.onEscapeClick()&&t),t},f.hb,f.t)),e.rb(1,278528,null,0,h.k,[e.t,e.u,e.k,e.F],{ngClass:[0,"ngClass"]},null),e.Eb(2,{"title-input":0}),e.rb(3,16384,null,0,c.Pb,[e.k],null,null),e.Gb(1024,null,t.f,function(l){return[l]},[c.Pb]),e.rb(5,671744,null,0,t.j,[[8,null],[8,null],[8,null],[6,t.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,t.g,null,[t.j]),e.rb(7,16384,null,0,t.h,[[4,t.g]],null,null),e.rb(8,49152,[[1,4],["input",4]],0,c.H,[e.h,e.k,e.A],null,null)],function(l,n){var u=n.component,e=l(n,2,0,"title"===u.type);l(n,1,0,e),l(n,5,0,u.internalValue)},function(l,n){l(n,0,0,void 0,e.Bb(n,7).ngClassUntouched,e.Bb(n,7).ngClassTouched,e.Bb(n,7).ngClassPristine,e.Bb(n,7).ngClassDirty,e.Bb(n,7).ngClassValid,e.Bb(n,7).ngClassInvalid,e.Bb(n,7).ngClassPending)})}function k(l){return e.Lb(0,[e.Hb(671088640,1,{input:0}),(l()(),e.jb(16777216,null,null,1,null,C)),e.rb(2,16384,null,0,h.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,v)),e.rb(4,16384,null,0,h.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,B)),e.rb(6,16384,null,0,h.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,"title"===u.type&&!u.editing),l(n,4,0,"label"===u.type&&!u.editing),l(n,6,0,u.editing)},null)}var z=e.qb({encapsulation:0,styles:[[""]],data:{}});function A(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"app-header",[["title","Editable Label"]],null,null,null,d.b,d.a)),e.rb(1,114688,null,0,g.a,[c.Hb],{title:[0,"title"]},null),(l()(),e.sb(2,0,null,null,77,"ion-content",[["padding",""]],null,null,null,f.ab,f.m)),e.rb(3,49152,null,0,c.v,[e.h,e.k,e.A],null,null),(l()(),e.sb(4,0,null,0,75,"ion-grid",[["fixed",""]],null,null,null,f.eb,f.q)),e.rb(5,49152,null,0,c.B,[e.h,e.k,e.A],{fixed:[0,"fixed"]},null),(l()(),e.sb(6,0,null,0,73,"ion-row",[],null,null,null,f.rb,f.D)),e.rb(7,49152,null,0,c.jb,[e.h,e.k,e.A],null,null),(l()(),e.sb(8,0,null,0,71,"ion-col",[["offsetLg","1"],["offsetMd","0"],["offsetSm","0"],["offsetXl","1"],["offsetXs","0"],["sizeLg","10"],["sizeMd","12"],["sizeSm","12"],["sizeXl","10"],["sizeXs","12"]],null,null,null,f.Z,f.l)),e.rb(9,49152,null,0,c.u,[e.h,e.k,e.A],{offsetLg:[0,"offsetLg"],offsetMd:[1,"offsetMd"],offsetSm:[2,"offsetSm"],offsetXl:[3,"offsetXl"],offsetXs:[4,"offsetXs"],sizeLg:[5,"sizeLg"],sizeMd:[6,"sizeMd"],sizeSm:[7,"sizeSm"],sizeXl:[8,"sizeXl"],sizeXs:[9,"sizeXs"]},null),(l()(),e.sb(10,0,null,0,11,"ion-item",[],null,null,null,f.kb,f.u)),e.rb(11,49152,null,0,c.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(12,0,null,0,2,"ion-label",[],null,null,null,f.lb,f.x)),e.rb(13,49152,null,0,c.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Editing"])),(l()(),e.sb(15,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,16)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,16)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.editing=u)&&t),t},f.X,f.j)),e.rb(16,16384,null,0,c.c,[e.k],null,null),e.Gb(1024,null,t.f,function(l){return[l]},[c.c]),e.rb(18,671744,null,0,t.j,[[8,null],[8,null],[8,null],[6,t.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,t.g,null,[t.j]),e.rb(20,16384,null,0,t.h,[[4,t.g]],null,null),e.rb(21,49152,null,0,c.s,[e.h,e.k,e.A],null,null),(l()(),e.sb(22,0,null,0,6,"ion-card",[],null,null,null,f.W,f.e)),e.rb(23,49152,null,0,c.n,[e.h,e.k,e.A],null,null),(l()(),e.sb(24,0,null,0,4,"ion-card-content",[],null,null,null,f.S,f.f)),e.rb(25,49152,null,0,c.o,[e.h,e.k,e.A],null,null),(l()(),e.sb(26,0,null,0,2,"fiv-editable-label",[["value","Not in a form"]],[[2,"editable-label-disabled",null]],null,null,k,m)),e.Gb(5120,null,t.f,function(l){return[l]},[p.a]),e.rb(28,1097728,null,0,p.a,[],{editing:[0,"editing"],value:[1,"value"]},null),(l()(),e.sb(29,0,null,0,16,"ion-card",[],null,null,null,f.W,f.e)),e.rb(30,49152,null,0,c.n,[e.h,e.k,e.A],null,null),(l()(),e.sb(31,0,null,0,14,"ion-card-content",[],null,null,null,f.S,f.f)),e.rb(32,49152,null,0,c.o,[e.h,e.k,e.A],null,null),(l()(),e.sb(33,0,null,0,7,"ion-item",[],null,null,null,f.kb,f.u)),e.rb(34,49152,null,0,c.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(35,0,null,0,5,"fiv-editable-label",[["value","Text with NgModel"]],[[2,"editable-label-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.model=u)&&e),e},k,m)),e.rb(36,1097728,null,0,p.a,[],{editing:[0,"editing"],value:[1,"value"]},null),e.Gb(1024,null,t.f,function(l){return[l]},[p.a]),e.rb(38,671744,null,0,t.j,[[8,null],[8,null],[8,null],[6,t.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,t.g,null,[t.j]),e.rb(40,16384,null,0,t.h,[[4,t.g]],null,null),(l()(),e.sb(41,0,null,0,4,"ion-item",[],null,null,null,f.kb,f.u)),e.rb(42,49152,null,0,c.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(43,0,null,0,2,"ion-label",[],null,null,null,f.lb,f.x)),e.rb(44,49152,null,0,c.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(45,0,["",""])),(l()(),e.sb(46,0,null,0,27,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Bb(l,48).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Bb(l,48).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.onSubmit()&&t),t},null,null)),e.rb(47,16384,null,0,t.n,[],null,null),e.rb(48,540672,null,0,t.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Gb(2048,null,t.a,null,[t.d]),e.rb(50,16384,null,0,t.i,[[4,t.a]],null,null),(l()(),e.sb(51,0,null,null,19,"ion-card",[],null,null,null,f.W,f.e)),e.rb(52,49152,null,0,c.n,[e.h,e.k,e.A],null,null),(l()(),e.sb(53,0,null,0,7,"ion-toolbar",[],null,null,null,f.Bb,f.N)),e.rb(54,49152,null,0,c.Cb,[e.h,e.k,e.A],null,null),(l()(),e.sb(55,0,null,0,5,"fiv-editable-label",[["formControlName","title"],["type","title"],["value","Title"]],[[2,"editable-label-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,k,m)),e.rb(56,1097728,null,0,p.a,[],{editing:[0,"editing"],value:[1,"value"],type:[2,"type"]},null),e.Gb(1024,null,t.f,function(l){return[l]},[p.a]),e.rb(58,671744,null,0,t.c,[[3,t.a],[8,null],[8,null],[6,t.f],[2,t.p]],{name:[0,"name"]},null),e.Gb(2048,null,t.g,null,[t.c]),e.rb(60,16384,null,0,t.h,[[4,t.g]],null,null),(l()(),e.sb(61,0,null,0,9,"ion-card-content",[],null,null,null,f.S,f.f)),e.rb(62,49152,null,0,c.o,[e.h,e.k,e.A],null,null),(l()(),e.sb(63,0,null,0,7,"ion-item",[],null,null,null,f.kb,f.u)),e.rb(64,49152,null,0,c.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(65,0,null,0,5,"fiv-editable-label",[["formControlName","name"],["value","Your Name"]],[[2,"editable-label-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,k,m)),e.rb(66,1097728,null,0,p.a,[],{editing:[0,"editing"],value:[1,"value"]},null),e.Gb(1024,null,t.f,function(l){return[l]},[p.a]),e.rb(68,671744,null,0,t.c,[[3,t.a],[8,null],[8,null],[6,t.f],[2,t.p]],{name:[0,"name"]},null),e.Gb(2048,null,t.g,null,[t.c]),e.rb(70,16384,null,0,t.h,[[4,t.g]],null,null),(l()(),e.sb(71,0,null,null,2,"ion-button",[["block",""],["color","primary"],["type","submit"]],null,null,null,f.Q,f.c)),e.rb(72,49152,null,0,c.l,[e.h,e.k,e.A],{color:[0,"color"],type:[1,"type"]},null),(l()(),e.Jb(-1,0,[" Login "])),(l()(),e.sb(74,0,null,0,5,"ion-card",[],null,null,null,f.W,f.e)),e.rb(75,49152,null,0,c.n,[e.h,e.k,e.A],null,null),(l()(),e.sb(76,0,null,0,3,"ion-card-content",[],null,null,null,f.S,f.f)),e.rb(77,49152,null,0,c.o,[e.h,e.k,e.A],null,null),(l()(),e.Jb(78,0,[" "," "])),e.Db(0,h.g,[])],function(l,n){var u=n.component;l(n,1,0,"Editable Label"),l(n,5,0,""),l(n,9,0,"1","0","0","1","0","10","12","12","10","12"),l(n,18,0,u.editing),l(n,28,0,u.editing,"Not in a form"),l(n,36,0,u.editing,"Text with NgModel"),l(n,38,0,u.model),l(n,48,0,u.form),l(n,56,0,u.editing,"Title","title"),l(n,58,0,"title"),l(n,66,0,u.editing,"Your Name"),l(n,68,0,"name"),l(n,72,0,"primary","submit")},function(l,n){var u=n.component;l(n,15,0,e.Bb(n,20).ngClassUntouched,e.Bb(n,20).ngClassTouched,e.Bb(n,20).ngClassPristine,e.Bb(n,20).ngClassDirty,e.Bb(n,20).ngClassValid,e.Bb(n,20).ngClassInvalid,e.Bb(n,20).ngClassPending),l(n,26,0,e.Bb(n,28).disabled),l(n,35,0,e.Bb(n,36).disabled,e.Bb(n,40).ngClassUntouched,e.Bb(n,40).ngClassTouched,e.Bb(n,40).ngClassPristine,e.Bb(n,40).ngClassDirty,e.Bb(n,40).ngClassValid,e.Bb(n,40).ngClassInvalid,e.Bb(n,40).ngClassPending),l(n,45,0,u.model),l(n,46,0,e.Bb(n,50).ngClassUntouched,e.Bb(n,50).ngClassTouched,e.Bb(n,50).ngClassPristine,e.Bb(n,50).ngClassDirty,e.Bb(n,50).ngClassValid,e.Bb(n,50).ngClassInvalid,e.Bb(n,50).ngClassPending),l(n,55,0,e.Bb(n,56).disabled,e.Bb(n,60).ngClassUntouched,e.Bb(n,60).ngClassTouched,e.Bb(n,60).ngClassPristine,e.Bb(n,60).ngClassDirty,e.Bb(n,60).ngClassValid,e.Bb(n,60).ngClassInvalid,e.Bb(n,60).ngClassPending),l(n,65,0,e.Bb(n,66).disabled,e.Bb(n,70).ngClassUntouched,e.Bb(n,70).ngClassTouched,e.Bb(n,70).ngClassPristine,e.Bb(n,70).ngClassDirty,e.Bb(n,70).ngClassValid,e.Bb(n,70).ngClassInvalid,e.Bb(n,70).ngClassPending),l(n,78,0,e.Kb(n,78,0,e.Bb(n,79).transform(u.form.value)))})}function y(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"app-editable-label",[],null,null,null,A,z)),e.rb(1,114688,null,0,i,[t.b],null,null)],function(l,n){l(n,1,0)},null)}var M=e.ob("app-editable-label",i,y,{},{},[]),I=u("M2Lx"),L=u("eDkP"),P=u("Fzqc"),j=u("v9Dh"),G=u("ZYjt"),S=u("Wf4p"),N=u("lqlK"),X=u("ZYCi"),w=u("LOpI"),O=u("dWZg"),q=u("lLAP"),x=u("4c35"),D=u("qAlS"),Z=u("La40"),E=u("UOu5"),J=u("gVIA"),V=u("0RK4"),_=u("6wuw"),T=u("isGY"),U=u("ZhfK"),Y=u("/Gdi"),F=u("GkVF"),Q=u("j1ZV"),R=u("KZIk");u.d(n,"EditableLabelPageModuleNgFactory",function(){return W});var W=e.pb(b,[],function(l){return e.yb([e.zb(512,e.j,e.db,[[8,[o.a,a.a,r.a,s.a,M]],[3,e.j],e.y]),e.zb(4608,h.o,h.n,[e.v,[2,h.A]]),e.zb(4608,t.o,t.o,[]),e.zb(4608,t.b,t.b,[]),e.zb(4608,c.b,c.b,[e.A,e.g]),e.zb(4608,c.Gb,c.Gb,[c.b,e.j,e.r]),e.zb(4608,c.Lb,c.Lb,[c.b,e.j,e.r]),e.zb(4608,I.c,I.c,[]),e.zb(4608,L.a,L.a,[L.f,L.b,e.j,L.e,L.c,e.r,e.A,h.d,P.b,[2,h.i]]),e.zb(5120,L.g,L.h,[L.a]),e.zb(5120,j.b,j.c,[L.a]),e.zb(4608,G.f,S.a,[[2,S.c],[2,S.e]]),e.zb(4608,N.a,N.a,[e.j,e.G,e.g,e.r]),e.zb(1073742336,h.c,h.c,[]),e.zb(1073742336,t.m,t.m,[]),e.zb(1073742336,t.e,t.e,[]),e.zb(1073742336,t.k,t.k,[]),e.zb(1073742336,c.Eb,c.Eb,[]),e.zb(1073742336,X.p,X.p,[[2,X.v],[2,X.n]]),e.zb(1073742336,w.b,w.b,[]),e.zb(1073742336,O.b,O.b,[]),e.zb(1073742336,I.d,I.d,[]),e.zb(1073742336,q.a,q.a,[]),e.zb(1073742336,P.a,P.a,[]),e.zb(1073742336,x.e,x.e,[]),e.zb(1073742336,D.b,D.b,[]),e.zb(1073742336,L.d,L.d,[]),e.zb(1073742336,S.e,S.e,[[2,S.b],[2,G.g]]),e.zb(1073742336,j.e,j.e,[]),e.zb(1073742336,S.g,S.g,[]),e.zb(1073742336,Z.j,Z.j,[]),e.zb(1073742336,E.a,E.a,[]),e.zb(1073742336,J.a,J.a,[]),e.zb(1073742336,V.a,V.a,[]),e.zb(1073742336,_.a,_.a,[]),e.zb(1073742336,T.a,T.a,[]),e.zb(1073742336,U.a,U.a,[]),e.zb(1073742336,Y.a,Y.a,[]),e.zb(1073742336,F.a,F.a,[]),e.zb(1073742336,Q.a,Q.a,[]),e.zb(1073742336,R.a,R.a,[]),e.zb(1073742336,b,b,[]),e.zb(1024,X.l,function(){return[[{path:"",component:i}]]},[])])})},Xqnl:function(l,n,u){"use strict";var e=u("CcnG"),t=u("jy3V"),i=u("SFCN"),b=u("AmBA"),o=u("oBZk"),a=u("ZZ/e"),r=u("Ip0R");u("2MiI"),u.d(n,"a",function(){return s}),u.d(n,"b",function(){return g});var s=e.qb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{cursor:pointer}#github[_ngcontent-%COMP%]{color:var(--ion-color-light-contrast)}"]],data:{}});function d(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"fiv-back-button",[],null,null,null,t.b,t.a)),e.rb(2,49152,null,0,i.a,[b.a],null,null)],null,null)}function g(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,19,"ion-header",[],null,null,null,o.fb,o.r)),e.rb(1,49152,null,0,a.C,[e.h,e.k,e.A],null,null),(l()(),e.sb(2,0,null,0,17,"ion-toolbar",[],null,null,null,o.Bb,o.N)),e.rb(3,49152,null,0,a.Cb,[e.h,e.k,e.A],null,null),(l()(),e.sb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.R,o.d)),e.rb(5,49152,null,0,a.m,[e.h,e.k,e.A],null,null),(l()(),e.jb(16777216,null,0,1,null,d)),e.rb(7,16384,null,0,r.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(8,0,null,0,2,"ion-title",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onTitleClicked()&&e),e},o.zb,o.L)),e.rb(9,49152,null,0,a.Ab,[e.h,e.k,e.A],null,null),(l()(),e.Jb(10,0,["",""])),(l()(),e.sb(11,0,null,0,8,"ion-buttons",[["slot","end"]],null,null,null,o.R,o.d)),e.rb(12,49152,null,0,a.m,[e.h,e.k,e.A],null,null),(l()(),e.sb(13,0,null,0,5,"a",[["href","https://fivethree.io"],["target","blank"]],null,null,null,null,null)),(l()(),e.sb(14,0,null,null,4,"ion-button",[["color","secondary"],["fill","outline"],["shape","round"]],null,null,null,o.Q,o.c)),e.rb(15,49152,null,0,a.l,[e.h,e.k,e.A],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),e.sb(16,0,null,0,1,"ion-icon",[["name","globe"],["slot","start"]],null,null,null,o.gb,o.s)),e.rb(17,49152,null,0,a.D,[e.h,e.k,e.A],{name:[0,"name"]},null),(l()(),e.Jb(-1,0,[" fivethree.io "])),e.Ab(0,0)],function(l,n){l(n,7,0,n.component.backbutton),l(n,15,0,"secondary","outline","round"),l(n,17,0,"globe")},function(l,n){l(n,10,0,n.component.title)})}}}]);