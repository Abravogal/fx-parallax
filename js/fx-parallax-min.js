/**
 * LICENCIA...: CC BY-NC-ND 4.0 | Atribucion-NoComercial-SinDerivar 4.0 Inter.
 * PROYECTO...: FX PARALLAX.
 * FECHA......: V.2.1.0 | 03/04/2016.
 * AUTOR......: Alfonso | www.abravogal.com
 * _____________________________________________________________________________
 *
 * TITULO.....:   FX PARALLAX.
 * DESCRIPCION: - Genera un efecto parallax en las imagenes de fondo.
 */

(function(){function f(){for(var a=0;a<g.length;a++){var c=g[a],b=c.offsetHeight+window.innerHeight/2,e=d.scroll()-c.offsetTop,b="auto "+Math.ceil(Math.abs(b))+"px",e="center "+(-Math.ceil(e*d.fx)+"px");d.movil()&&(b="cover",e="center");d.css(c,e,b)}}var g=document.getElementsByClassName("fxParallax"),d={fx:.5,scroll:function(){return document.body.scrollTop||document.documentElement.scrollTop},css:function(a,c,b){a.style.backgroundSize=b;a.style.backgroundPosition=c;a.style.backgroundRepeat="no-repeat"},movil:function(){return 1024>window.innerWidth}};f();window.addEventListener("scroll",function(){f()});window.addEventListener("resize",function(){f()})})();