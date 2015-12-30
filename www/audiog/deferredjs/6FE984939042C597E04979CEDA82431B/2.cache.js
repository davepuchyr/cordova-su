function Dg(a){this.b=a}
function eo(b,a){b.src=a}
function co(b,a){b.checked=a}
function kg(){kg=y0;mi()}
function cj(a){return CH(),a.A}
function ej(a){Bb(this,(CH(),a))}
function dj(a,b){eo((CH(),a.A),b)}
function gc(a,b){CH();DI(AH,a,1);rI(a,b)}
function Gg(a,b){this.b=a;this.c=b}
function Ag(a,b){this.b=a;yg.call(this,b)}
function _e(a){!!a.e&&Us(a.e,new $d)}
function hb(a){return Nt(a.c.Fc(a.d.d),1)}
function Zn(a){return typeof a.tabIndex!=u3?a.tabIndex:-1}
function Dh(a){var b;if(!a.c){b=new og;a.c=b}return a.c}
function Gf(a){var b;if(!a.f){b=Dh(td(a.b));a.f=b}return a.f}
function Kg(a){this.d=a;this.b=$n($doc);this.c=$n($doc)}
function An(a){while(a.lastChild){a.removeChild(a.lastChild)}}
function mg(a,b){if(b.b==a.f)return;b.b>a.f?lg(a,(aQ(),YP),b.b):lg(a,(aQ(),_P),b.b)}
function og(){kg();Tf.call(this);this.f=0;ac(this,Jg(new Kg(this)));this.d=new ej(this.b);Jn(xb(this.q),$n($doc));this.o=Lb(this,new _g(this,this),(Vi(),Ui));this.e=Lb(this,new Ag(this,this),Ui)}
function Jg(a){var b,c,d,e;c=new WL(Lg(a.b,a.c).b);Cb(c,'h100pc poi '+(new Ii,Mi(),L4)+w1);b=uH((CH(),c.A));d=rH(new sH(a.b));a.d.c=d;e=rH(new sH(a.c));a.d.b=e;b.c?zn(b.c,b.b,b.d):wH(b.b);a.d.q=c;return c}
function Lg(a,b){var c;c=new JV;dn(c.b,"<div class='poi-image'><\/div> <div class='poi-image'><\/div> <div class='poi-image'><\/div> <div class='poi-image-nav' id='");IV(c,kH(a));dn(c.b,"'><\/div> <audio autoplay='true' controls='controls' id='");IV(c,kH(b));dn(c.b,"'><\/audio>");return new WG(c.b.b)}
function lg(a,b,c){switch(b.c){case 3:if(a.f==a.i.length-1)return;Gn(a.i[a.f],N4);Gn(a.i[a.f],O4);En(a.i[a.f],P4);Gn(a.i[c],Q4);Gn(a.i[c],P4);En(a.i[c],N4);break;case 0:_e(a.k);return;case 1:bi.b&&di('dmjp: right to left; nav forward');return;case 2:if(a.f==0)return;Gn(a.i[a.f],N4);Gn(a.i[a.f],O4);En(a.i[a.f],Q4);Gn(a.i[c],Q4);Gn(a.i[c],P4);En(a.i[c],O4);}a.f=c;co(a.n[a.f],true)}
function ng(a){var b,c,d,e,f,g,i,j,k,n,o;dj(a.d,hb(a.j));a.g=a.j.b;a.f=0;c=0;g=a.g.length;for(;c<g;++c){k=a.i[c].style;ho(k,'backgroundImage',a.g[c]);ho(k,r2,(to(),x3))}for(;c<a.i.length;++c){a.i[c].style[r2]=(to(),A1)}An(a.c);if(g<2)return;a.n=Ct(GC,D0,-1,g,0);n=new AZ;b=$doc;i=$n(b);for(c=0;c<g;++c){e=new CU(c);j=(o=b.createElement('INPUT'),o.type='radio',o.name=i,o.value='on',o);f=b.createElement('label');d=$n(b);Jn(j,d);f.htmlFor=d;In(f,'GOBPLMHBAB GOBPLMHBPB');yn(a.c,j);yn(a.c,f);gc(j,new Gg(a,e));a.n[c]=j}co(a.n[0],true);ci(_u.e+'.setPoiBundle() radios dt == '+RD(ND(ED((new AZ).b.getTime()),ED(n.b.getTime())))+'ms')}
var S4='Audio',R4='com.google.gwt.media.client.',N4='in-from-bottom',O4='in-from-top',Q4='out-to-bottom',P4='out-to-top';$D(63,61,H0);_.yb=function sf(){this.b.d=Gf(sd((Ic(),Hc).b))};$D(78,71,F0,og);_.Db=function pg(a){this.j=a;!this.e&&ng(this)};_.Eb=function qg(a){a!=this.k&&!!this.k&&mf(this.k);this.k=a};_.zb=function rg(a){NT(a,new Dg(this))};_.wb=function sg(){cj(this.d).pause()};_.f=0;$D(79,80,J0,Ag);_.Gb=function Bg(a){var b,c,d;b=$doc.querySelectorAll('.poi-image');d=b.length;this.b.i=Ct(GC,D0,-1,d,0);for(c=0;c<d;++c){Et(this.b.i,c,b[c]);this.b.i[c].style[u2]=d-c+w1}this.b.c.style[u2]=d+1+w1;this.b.b.style[u2]=d+1+w1;AN(this.b.e.b);this.b.e=null;ng(this.b)};$D(81,1,I0,Dg);_.Cb=function Eg(a){var b;b=a.b;b==(aQ(),YP)?lg(this.b,b,this.b.f+1):b==_P?lg(this.b,b,this.b.f-1):lg(this.b,b,-1)};$D(82,1,{54:1},Gg);_.fb=function Hg(a){1==(CH(),mI(a.type))&&mg(this.b,this.c)};$D(83,1,{},Kg);$D(127,22,F0);_.eb=function bj(){var a;Pb(this);a=Zn((CH(),this.A));-1==a&&(this.A.tabIndex=0,undefined)};$D(126,127,F0);$D(125,126,F0);$D(124,125,F0,ej);var _u=jU(d4,'PoiView',78),GC=iU(L3,'JavaScriptObject$;',639),Xu=jU(d4,'PoiView$1',79),Yu=jU(d4,'PoiView$2',81),Zu=jU(d4,'PoiView$3',82),$u=jU(d4,'PoiView_BinderImpl$Widgets',83),cz=jU(a4,'FocusWidget',127),Sx=jU(R4,'MediaBase',126),Rx=jU(R4,S4,125),yv=jU('com.avaritia.lib.ui.client.ui.',S4,124);u1(gl)(2);