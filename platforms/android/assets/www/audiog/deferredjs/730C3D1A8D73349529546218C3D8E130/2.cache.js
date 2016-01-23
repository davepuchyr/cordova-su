function Bl(a){bn(a)}
function Dg(a){this.b=a}
function Gg(a){this.b=a}
function _n(b,a){b.src=a}
function $n(b,a){b.checked=a}
function ig(){ig=t0;Xh()}
function Wi(a){return xH(),a.A}
function Ll(a,b){return dn(a,b)}
function Xi(a,b){_n((xH(),a.A),b)}
function Yi(a){zb(this,(xH(),a))}
function Jg(a,b){this.b=a;this.c=b}
function Ag(a,b){this.b=a;yg.call(this,b)}
function ec(a,b){xH();yI(vH,a,1);mI(a,b)}
function Ze(a){!!a.f&&Qs(a.f,new Yd)}
function mh(a){var b;if(!a.c){b=new ng;a.c=b}return a.c}
function Ef(a){var b;if(!a.f){b=mh(rd(a.b));a.f=b}return a.f}
function Ng(a){this.d=a;this.b=Wn($doc);this.c=Wn($doc)}
function wn(a){while(a.lastChild){a.removeChild(a.lastChild)}}
function Vn(a){return typeof a.tabIndex!=v3?a.tabIndex:-1}
function dn(a,b){var c=$wnd.setInterval(function(){a()},b);return c}
function kg(a,b){a.e=b;if(a.f)return;Xi(a.d,b);om((am(),new Gg(a)),300)}
function lg(a,b){if(b.b==a.g)return;b.b>a.g?jg(a,(XP(),TP),b.b):jg(a,(XP(),WP),b.b)}
function om(b,c){am();var d=function(){var a=p1(km)(b);!a&&Bl(arguments.callee.token)};d.token=Ll(d,c)}
function ng(){ig();Rf.call(this);this.g=0;$b(this,Mg(new Ng(this)));this.d=new Yi(this.b);Fn(vb(this.q),Wn($doc));this.o=Jb(this,new dh(this,this),(Ni(),Mi));this.f=Jb(this,new Ag(this,this),Mi)}
function Mg(a){var b,c,d,e;c=new RL(Og(a.b,a.c).b);Ab(c,'h100pc poi '+(new Ai,Ei(),L4)+v1);b=pH((xH(),c.A));d=mH(new nH(a.b));a.d.c=d;e=mH(new nH(a.c));a.d.b=e;b.c?vn(b.c,b.b,b.d):rH(b.b);a.d.q=c;return c}
function Og(a,b){var c;c=new EV;$m(c.b,"<div class='poi-image'><\/div> <div class='poi-image'><\/div> <div class='poi-image'><\/div> <div class='poi-image-nav' id='");DV(c,fH(a));$m(c.b,"'><\/div> <audio autoplay='false' controls='controls' id='");DV(c,fH(b));$m(c.b,"'><\/audio>");return new RG(c.b.b)}
function jg(a,b,c){switch(b.c){case 3:if(a.g==a.j.length-1)return;Cn(a.j[a.g],N4);Cn(a.j[a.g],O4);An(a.j[a.g],P4);Cn(a.j[c],Q4);Cn(a.j[c],P4);An(a.j[c],N4);break;case 0:Ze(a.k);return;case 1:Mh.b&&Oh('dmjp: right to left; nav forward');return;case 2:if(a.g==0)return;Cn(a.j[a.g],N4);Cn(a.j[a.g],O4);An(a.j[a.g],Q4);Cn(a.j[c],Q4);Cn(a.j[c],P4);An(a.j[c],O4);}a.g=c;$n(a.n[a.g],true)}
function mg(a,b){var c,d,e,f,g,i,j,k,n,o,p;a.i=b;if(a.f)return;a.g=0;d=0;i=b.length;for(;d<i;++d){n=a.j[d].style;co(n,'backgroundImage',b[d]);co(n,s2,(po(),y3));En(a.j[d],'poi-image')}for(;d<a.j.length;++d){a.j[d].style[s2]=(po(),z1)}wn(a.c);if(i<2)return;a.n=yt(DC,y0,-1,i,0);o=new vZ;c=$doc;j=Wn(c);for(d=0;d<i;++d){f=new xU(d);k=(p=c.createElement('INPUT'),p.type='radio',p.name=j,p.value='on',p);g=c.createElement('label');e=Wn(c);Fn(k,e);g.htmlFor=e;En(g,'GFDDDQFBAB GFDDDQFBPB');un(a.c,k);un(a.c,g);ec(k,new Jg(a,f));a.n[d]=k}$n(a.n[0],true);Nh(Yu.e+'.setImageUrls() radios dt == '+OD(KD(BD((new vZ).b.getTime()),BD(o.b.getTime())))+'ms')}
var S4='Audio',R4='com.google.gwt.media.client.',N4='in-from-bottom',O4='in-from-top',Q4='out-to-bottom',P4='out-to-top';XD(63,61,C0);_.yb=function qf(){this.b.e=Ef(qd((Gc(),Fc).b))};XD(78,71,A0,ng);_.Db=function og(a){kg(this,a)};_.Eb=function pg(a){mg(this,a)};_.Fb=function qg(a){a!=this.k&&!!this.k&&kf(this.k);this.k=a};_.zb=function rg(a){IT(a,new Dg(this))};_.wb=function sg(){Wi(this.d).pause()};_.g=0;XD(79,80,E0,Ag);_.Hb=function Bg(a){var b,c,d;b=$doc.querySelectorAll('.poi-image');d=b.length;this.b.j=yt(DC,y0,-1,d,0);for(c=0;c<d;++c){At(this.b.j,c,b[c]);this.b.j[c].style[v2]=d-c+v1}this.b.c.style[v2]=d+1+v1;this.b.b.style[v2]=d+1+v1;vN(this.b.f.b);this.b.f=null;kg(this.b,this.b.e);mg(this.b,this.b.i)};XD(81,1,D0,Dg);_.Cb=function Eg(a){var b;b=a.b;b==(XP(),TP)?jg(this.b,b,this.b.g+1):b==WP?jg(this.b,b,this.b.g-1):jg(this.b,b,-1)};XD(82,1,{},Gg);_.Ib=function Hg(){Wi(this.b.d).play();return false};XD(83,1,{54:1},Jg);_.fb=function Kg(a){1==(xH(),hI(a.type))&&lg(this.b,this.c)};XD(84,1,{},Ng);XD(126,22,A0);_.eb=function Vi(){var a;Nb(this);a=Vn((xH(),this.A));-1==a&&(this.A.tabIndex=0,undefined)};XD(125,126,A0);XD(124,125,A0);XD(123,124,A0,Yi);var Yu=eU(e4,'PoiView',78),DC=dU(M3,'JavaScriptObject$;',637),Tu=eU(e4,'PoiView$1',79),Uu=eU(e4,'PoiView$2',81),Vu=eU(e4,'PoiView$3',82),Wu=eU(e4,'PoiView$4',83),Xu=eU(e4,'PoiView_BinderImpl$Widgets',84),_y=eU(b4,'FocusWidget',126),Qx=eU(R4,'MediaBase',125),Px=eU(R4,S4,124),wv=eU('com.avaritia.lib.ui.client.ui.',S4,123);p1($k)(2);