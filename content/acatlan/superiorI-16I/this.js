function infoHint(){
  var hints = [
  	{ 'code' :	'Car90' ,
	  'title' :	'Cárdenas, H. et al.: Álgebra Superior. Editorial Trillas, 1990.'
	},
	{ 'code' :	'Gom07',
	  'title' :	'Gómez, C.: Introducción a la teoría intuitiva de conjuntos. Las Prensas de Ciencias, 2007.'
	},
	{ 'code' :	'Hal60',
	  'title' :	'Halmos, Paul R.: Naive Set Theory. D. Van Nostrand, 1960.'
	},
	{ 'code' :	'Hal66',
	  'title' :	'Halmos, Paul R.: Teoría intuitiva de los conjuntos. Compañía Editorial Continental, 1966.'
	},
	{ 'code' :	'Her03',
	  'title' :	'Hernández, F.: <i>Teoría de conjuntos. Una introducción</i>. Sociedad Matemática Mexicana, 2003.'
	},
	{ 'code' :	'Clas',
	  'title' :	'Teoría clásica de conjuntos',
	  'url' :	'pdfs/clasica.pdf'
	},
	{ 'code' :	'Hal1',
	  'title' :	'Notas a [Hal66] (Parte 1: Axiomas básicos)',
	  'url' :	'pdfs/notas_halmos1.pdf'
	},
	{ 'code' :	'Hal2',
	  'title' :	'Notas a [Hal66] (Parte 2: Relaciones y funciones)',
	  'url' :	'pdfs/notas_halmos2.pdf'
	},
	{ 'code' :	'Hal3',
	  'title' :	'Notas a [Hal66] (Parte 3: Números naturales)',
	  'url' :	'pdfs/notas_halmos3.pdf'
	},
  ];


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
