
function infoHint(){
  var hints = [
  	{ 'code' :	'Spi92' ,
	  'title' :	'Spivak, Michael: Cálculo Infinitesimal. Editorial Reverté, segunda ed., 1992.'
	},
  	{ 'code' :	'Spi12' ,
	  'title' :	'Spivak, Michael: Cálculo Infinitesimal. Editorial Reverté, tercera ed., 2012.'
	},
	{ 'code' :	'Apo84',
	  'title' :	'Apostol, Tom M.: Cálculo con funciones de una variable, con una introducción al Álgebra Lineal. Editorial Reverté, 1984. '
	},
	{ 'code' :	'KKCS89',
	  'title' :	'Kudriávtsev, L. D., Kutásov, A. D., Chejlov, V. I., y Shabunin, M. I.: Problemas de análisis matemático. Editorial Mir, Moscú, 1989.'
	},
	{ 'code' :	'Prol',
	  'title' :	'Notas al prólogo de [Spi92]',
	  'url' :	'pdfs/prologo.pdf'
	},
	{ 'code' :	'Int1',
	  'title' :	'Intermezzo 1: Algunas pruebas por inducción',
	  'url' :	'pdfs/intermezzo1.pdf'
	},
	{ 'code' :	'Int2',
	  'title' :	'Intermezzo 2: Funciones trigonométricas',
	  'url' :	'pdfs/intermezzo2.pdf'
	}
  ]


  //Crafting hints
  var l = hints.length;
  var cls,elements,hint,m;
  for (var i=0; i<l; i++){
    hint = hints[i]
    cls = hint['code'].toLowerCase();
    els = document.getElementsByClassName(cls);
    m = els.length;
    for (var j=0; j<m; j++){
      el = els[j];
      el.title = hint['title'];
      el.style.fontWeight = 'bold';
      el.innerHTML = '[' + hint['code'] + ']';
      if (hint['url']){
	el.href = hint['url'];
      }
    }
  }
}
