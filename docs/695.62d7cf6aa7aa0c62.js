"use strict";(self.webpackChunkgraphql=self.webpackChunkgraphql||[]).push([[695],{6695:(N,h,s)=>{s.r(h),s.d(h,{AuthModule:()=>I});var m=s(6895),p=s(6438),i=s(4006),t=s(4650),Z=s(2557),c=s(4144),u=s(9549),g=s(9101),f=s(7392);function x(r,d){1&r&&(t.ynx(0),t._uU(1," Email format is invalid "),t.BQk())}function C(r,d){1&r&&(t.ynx(0),t._uU(1," Email is required "),t.BQk())}function b(r,d){if(1&r&&(t.TgZ(0,"mat-error"),t.YNc(1,x,2,0,"ng-container",8),t.YNc(2,C,2,0,"ng-container",8),t.qZA()),2&r){const l=t.oxw();let o,e;t.xp6(1),t.Q6J("ngIf",null==(o=l.loginCredt.get("email"))||null==o.errors?null:o.errors.pattern),t.xp6(1),t.Q6J("ngIf",null==(e=l.loginCredt.get("email"))||null==e.errors?null:e.errors.required)}}function w(r,d){1&r&&(t.TgZ(0,"mat-error"),t._uU(1," Password field is required "),t.qZA())}function y(r,d){1&r&&(t.ynx(0),t._uU(1," Email format is invalid "),t.BQk())}function k(r,d){1&r&&(t.ynx(0),t._uU(1," Email is required "),t.BQk())}function T(r,d){if(1&r&&(t.TgZ(0,"mat-error"),t.YNc(1,y,2,0,"ng-container",8),t.YNc(2,k,2,0,"ng-container",8),t.qZA()),2&r){const l=t.oxw();let o,e;t.xp6(1),t.Q6J("ngIf",null==(o=l.loginCredt.get("email"))||null==o.errors?null:o.errors.pattern),t.xp6(1),t.Q6J("ngIf",null==(e=l.loginCredt.get("email"))||null==e.errors?null:e.errors.required)}}function A(r,d){1&r&&(t.TgZ(0,"mat-error"),t._uU(1," Password field is required "),t.qZA())}function q(r,d){1&r&&(t.TgZ(0,"mat-error"),t._uU(1," Passwords do not match. "),t.qZA())}const U=[{path:"",component:(()=>{class r{constructor(l,o,e){this._auth=l,this.router=o,this._fb=e,this.hide=!0,this.emailErrorMessages={required:"Email is required",invalid:"Invalid email format"},console.log(this._auth.isLoggedIn()),this.loginCredt=this._fb.group({email:[null,[i.kI.required,i.kI.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")]],password:[null,i.kI.required]})}ngOnInit(){this._auth.isLoggedIn()&&this.router.navigate(["home"])}login(){this._auth.login(this.loginCredt.controls.email.value,this.loginCredt.controls.password.value),this.loginCredt.reset()}forgot(){this._auth.forgotPassword(this.loginCredt.controls.email.value)}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(Z.e),t.Y36(p.F0),t.Y36(i.qu))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-login"]],decls:29,vars:7,consts:[[1,"auth",2,"display","flex","justify-content","center","align-items","center","height","100dvh","position","relative"],[1,"auth__content",2,"width","30%","padding","32px","box-shadow","1px 1px 6px rgba(0,0,0,0.4)",3,"formGroup"],[2,"display","flex","justify-content","center"],["src","./assets/logo.svg","alt","LOGO"],[2,"text-align","center","font-weight","900"],[2,"display","flex","flex-direction","column"],["appearance","outline",1,"example-full-width",2,"margin-bottom","16px"],["matInput","","placeholder","Email Addresss...","formControlName","email","id","email","name","email"],[4,"ngIf"],["appearance","outline",1,"example-full-width"],["onpaste","return false;","ondrop","return false;","autocomplete","off","matInput","","placeholder","Password","formControlName","password","id","password","name","password",3,"type"],["matSuffix","",3,"click"],["type","button","mat-flat-button","","color","primary",2,"width","100%","margin-top","56px",3,"disabled","click"],[2,"display","flex","justify-content","space-between","margin-top","32px"],[1,"text-red-600",3,"routerLink"],[2,"cursor","pointer",3,"click"]],template:function(o,e){if(1&o&&(t.TgZ(0,"section",0)(1,"form",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"h1",4),t._uU(5,"Sign In"),t.qZA(),t.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Email"),t.qZA(),t._UZ(10,"input",7),t.YNc(11,b,3,2,"mat-error",8),t.qZA(),t.TgZ(12,"mat-form-field",9)(13,"mat-label"),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",10),t.TgZ(16,"mat-icon",11),t.NdJ("click",function(){return e.hide=!e.hide}),t._uU(17),t.qZA(),t.YNc(18,w,2,0,"mat-error",8),t.qZA()(),t.TgZ(19,"button",12),t.NdJ("click",function(){return e.login()}),t._uU(20,"Login"),t.qZA(),t.TgZ(21,"div",13)(22,"p"),t._uU(23," Click "),t.TgZ(24,"a",14),t._uU(25,"here"),t.qZA(),t._uU(26," to register "),t.qZA(),t.TgZ(27,"p",15),t.NdJ("click",function(){return e.forgot()}),t._uU(28,"Forgot your passsword (Wont work rn :p)"),t.qZA()()()()),2&o){let n,a;t.xp6(1),t.Q6J("formGroup",e.loginCredt),t.xp6(10),t.Q6J("ngIf",(null==(n=e.loginCredt.get("email"))?null:n.invalid)&&(null==(n=e.loginCredt.get("email"))?null:n.touched)||(null==(n=e.loginCredt.get("email"))?null:n.dirty)),t.xp6(4),t.Q6J("type",e.hide?"password":"text"),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==(a=e.loginCredt.get("password"))||null==a.errors?null:a.errors.required),t.xp6(1),t.Q6J("disabled",e.loginCredt.invalid),t.xp6(5),t.Q6J("routerLink","register")}},dependencies:[m.O5,p.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,c.Nt,u.KE,u.hX,u.TO,u.R9,g.lW,f.Hw],styles:[".auth{background:url(waves.4e726e112fb3f971.svg) no-repeat;background-size:cover}  .auth__content{background:rgb(255,255,255);box-shadow:0 8px 32px #1f26875e;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.18);border-radius:8px;color:#000}  .auth   .mat-form-field.mat-focused .mat-form-field-ripple{background-color:#fff}"]})}return r})()},{path:"register",component:(()=>{class r{constructor(l,o){this._auth=l,this._fb=o,this.hide=!0,this.c_hide=!0,this.loginCredt=this._fb.group({email:[null,[i.kI.required,i.kI.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")]],password:[null,i.kI.required],c_password:[null,i.kI.required]},{validators:this.matchPassword("password","c_password")})}register(){this.loginCredt.valid?this._auth.register(this.loginCredt.controls.email.value,this.loginCredt.controls.password.value):alert("Please fix the errors in the form"),this.loginCredt.reset()}matchPassword(l,o){return e=>{const a=e.controls[o];a.errors&&!a.errors.mustMatch||a.setErrors(e.controls[l].value!==a.value?{mustMatch:!0}:null)}}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(Z.e),t.Y36(i.qu))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-register"]],decls:34,vars:10,consts:[[1,"auth",2,"display","flex","justify-content","center","align-items","center","height","100dvh","position","relative"],[1,"auth__content",2,"width","30%","padding","32px","box-shadow","1px 1px 6px rgba(0,0,0,0.4)",3,"formGroup"],[2,"display","flex","justify-content","center"],["src","../../../../assets/logo.svg","alt","LOGO"],[2,"text-align","center","font-weight","900"],[2,"display","flex","flex-direction","column"],["appearance","outline",1,"example-full-width",2,"margin-bottom","16px"],["matInput","","placeholder","Email Addresss...","formControlName","email","id","email","name","email"],[4,"ngIf"],["onpaste","return false;","ondrop","return false;","autocomplete","off","matInput","","placeholder","Password","formControlName","password","id","password","name","password",3,"type"],["matSuffix","",3,"click"],["appearance","outline",1,"example-full-width"],["onpaste","return false;","ondrop","return false;","autocomplete","off","matInput","","placeholder","Password","formControlName","c_password","id","c_password","name","c_password",3,"type"],["type","button","mat-flat-button","","color","primary",2,"width","100%","margin-top","56px",3,"disabled","click"],[2,"display","flex","justify-content","space-between","margin-top","32px"],[1,"text-red-600",3,"routerLink"]],template:function(o,e){if(1&o&&(t.TgZ(0,"section",0)(1,"form",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"h1",4),t._uU(5,"Register"),t.qZA(),t.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Email"),t.qZA(),t._UZ(10,"input",7),t.YNc(11,T,3,2,"mat-error",8),t.qZA(),t.TgZ(12,"mat-form-field",6)(13,"mat-label"),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",9),t.TgZ(16,"mat-icon",10),t.NdJ("click",function(){return e.hide=!e.hide}),t._uU(17),t.qZA(),t.YNc(18,A,2,0,"mat-error",8),t.qZA(),t.TgZ(19,"mat-form-field",11)(20,"mat-label"),t._uU(21,"Confirm Password"),t.qZA(),t._UZ(22,"input",12),t.TgZ(23,"mat-icon",10),t.NdJ("click",function(){return e.c_hide=!e.c_hide}),t._uU(24),t.qZA()(),t.YNc(25,q,2,0,"mat-error",8),t.qZA(),t.TgZ(26,"button",13),t.NdJ("click",function(){return e.register()}),t._uU(27,"Register"),t.qZA(),t.TgZ(28,"div",14)(29,"p"),t._uU(30," Click "),t.TgZ(31,"a",15),t._uU(32,"here"),t.qZA(),t._uU(33," to go back to login "),t.qZA()()()()),2&o){let n,a,_;t.xp6(1),t.Q6J("formGroup",e.loginCredt),t.xp6(10),t.Q6J("ngIf",(null==(n=e.loginCredt.get("email"))?null:n.invalid)&&(null==(n=e.loginCredt.get("email"))?null:n.touched)||(null==(n=e.loginCredt.get("email"))?null:n.dirty)),t.xp6(4),t.Q6J("type",e.hide?"password":"text"),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==(a=e.loginCredt.get("password"))||null==a.errors?null:a.errors.required),t.xp6(4),t.Q6J("type",e.c_hide?"password":"text"),t.xp6(2),t.Oqu(e.c_hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==(_=e.loginCredt.get("c_password"))||null==_.errors?null:_.errors.mustMatch),t.xp6(1),t.Q6J("disabled",e.loginCredt.invalid),t.xp6(5),t.Q6J("routerLink","/auth")}},dependencies:[m.O5,p.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,c.Nt,u.KE,u.hX,u.TO,u.R9,g.lW,f.Hw],styles:[".auth{background:url(waves.4e726e112fb3f971.svg) no-repeat;background-size:cover}  .auth__content{background:rgb(255,255,255);box-shadow:0 8px 32px #1f26875e;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.18);border-radius:8px;color:#000}  .auth   .mat-form-field.mat-focused .mat-form-field-ripple{background-color:#fff}"]})}return r})()}];let J=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#r=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(U),p.Bz]})}return r})(),I=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#r=this.\u0275inj=t.cJS({imports:[m.ez,J,i.UX,i.u5,c.c,g.ot,f.Ps]})}return r})()}}]);