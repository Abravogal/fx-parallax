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

(function ()
{
/* __________________________________________________________________________

    VARIABLES GLOBALES.
   __________________________________________________________________________ */

  var parallax = document.getElementsByClassName("fxParallax");
  var cofg     =
      {
        "fx"     : 0.5,

        "scroll" : function ()
                   {
                     return document.body.scrollTop ||
                            document.documentElement.scrollTop;
                   },

        "css"    : function (obj, cssPos, cssSize)
                   {
                     obj.style.backgroundSize     = cssSize;
                     obj.style.backgroundPosition = cssPos;
                     obj.style.backgroundRepeat   = "no-repeat";
                   },

        "movil"  : function () {return (window.innerWidth < 1024);}
      };


/* __________________________________________________________________________

    INICIALIZACION.
   __________________________________________________________________________ */

  fxParallax();

/* __________________________________________________________________________

    EVENTO.
   __________________________________________________________________________ */

  window.addEventListener("scroll", function () { fxParallax(); });
  window.addEventListener("resize", function () { fxParallax(); });


/* __________________________________________________________________________

    FUNCION PARA GENERAR EL EFECTO PARALLAX.
   __________________________________________________________________________ */

  function fxParallax()
  {
    for (var i = 0; i < parallax.length; i++)
    {
      var obj  = parallax[i];
      var objH = obj.offsetHeight + (window.innerHeight / 2);
      var objT = cofg.scroll() - obj.offsetTop;

      var cssSize = "auto " + Math.ceil(Math.abs(objH)) + "px";
      var cssPos  = "center " + (-(Math.ceil((objT) * cofg.fx)) + "px");

      if (cofg.movil())
      {
        cssSize = "cover";
        cssPos  = "center";
      }

      cofg.css(obj, cssPos, cssSize);
    }
  }

})();