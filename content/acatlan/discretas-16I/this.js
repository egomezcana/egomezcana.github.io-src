function infoHint(){
  var hints = [
  	{ 'code' :	'Jon99' ,
	  'title' :	'Jonhsonbaugh, Richard: Matemáticas discretas. Prentice Hall, 1999.'
	},
	{ 'code' :	'KBR96',
	  'title' :	'Kolman, Bernard; Busby, Robert C., Ross, Sharon: Estructuras de matemáticas discretas para la computación.' +
	    		'Prentice Hall, 1986.'
	},
	{ 'code' :	'Fra87',
	  'title' :	'Fraleigh, John:  Álgebra abstracta. Addison Wesley, 1987'
	},
	{ 'code' :	'DP02',
	  'title' :	'Davey, B.A.; Priestley H.A.: Introduction to lattices and order. Cambridge University Press, 2002.'
	},
	{ 'code' :	'DP02',
	  'title' :	'Birkhoff, Garret; Mac Lane, Saunders: A survey of modern algebra. A.K. Peters, 1997.'
	},
	{ 'code' :	'Prel',
	  'title' :	'Conceptos preliminares',
	  'url' :	'pdfs/preliminares.pdf'
	},
	{ 'code' :	'Tres',
	  'title' :	'Tres tipos de relaciones',
	  'url' :	'pdfs/tres_relaciones.pdf'
	},
	{ 'code' :	'OrRe',
	  'title' :	'De la teoría del orden a la teoría de retículas',
	  'url' :	'pdfs/orden_reticula.pdf'
	},
	{ 'code' :	'Reti',
	  'title' :	'Algunos tipos de retículas',
	  'url' :	'pdfs/reticulas.pdf'
	},
	{ 'code' :	'Grup',
	  'title' :	'Grupos y semigrupos',
	  'url' :	'pdfs/grupos.pdf'
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

window.onload = function () {
  infoHint();
}
