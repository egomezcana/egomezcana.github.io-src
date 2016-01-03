Title: Hola Mundo y de como terminó funcionando este blog
Date: 2016-1-2
Category: Blog
Tags: mathjax-AMScd
Slug: hola-mundo
Summary: Primera entrada del blog donde se explican algunos ajustes que se realizaron a la plantilla original y cómo se integró MathJax.

Todavía no decido que haré con este blog. Es interesante sin embargo que uno puede realizar notas
para recordarlas después y una que me interesa suficiente es como conseguí que el blog funcionara, algo así
como una "meta-entrada". Bueno, tonteras de lado, me pregunté primero ¿qué necesitaba para el blog? Necesitaba realmente dos cosas
la primera que pudiera usar \( \TeX \) y la otra que yo tuviera tener el control del cómputo para la generación de contenido. 
A estas dos características les encontré solución usando MathJax y Pelican. Pero elegir las herramientas no fue tan sencillo. 
Al principio, dos generadores para sitios de contenido estático llamaron mi atención en base a los lenguajes en los que están 
implementados: Hakyll, además de Pelican. Me inclinaba más a utilizar Hakyll, pero su curva de aprendizaje resultaba mucho más alta
(considerando, claro, que mi fluidez en Haskell no es precisamente alta) y Pelican por otro lado, está implementado en Python, 
un lenguaje sencillo que a veces deja algunos sin sabores. Preferí lo malo por conocido.

Pelican resultó sencillo de encontrar e instalar, a mí me bastó buscar en los repositorios de Debian. 
Por simplicidad y como tenía un sitio montado ahí, decidí usar las gh-pages.  Pelican usa archivos base para generar los 
archivos que se van distribuir y los colecciona en el directorio *output*. Para poder simplificar la generación de contenido,
creé un nuevo repositorio con el nombre `egomezcana.github.io-src` y es sobre la base de este que inicialicé
Pelican, después cloné el repositorio `egomezcana.github.io` sobre la carpeta *output* como un submódulo de Git. Lo
anterior lo conseguí usando el siguiente código.

	cd pelican-web
	git clone https://github.com/egomezcana/egomezcana.github.io-src.git
	git submodule add  https://github.com/egomezcana/egomezcana.github.io-src.git output

Una vez hecho esto, basta inicializar Pelican ejecutando:

	pelican-quickstart

Lo anterior dispara una serie de preguntas para configurar el sitio, quizá las más relevantes de entre todas:

	> Do you want to specify a URL prefix? e.g., http://example.com   (Y/n) n
	> Do you want to upload your website using GitHub Pages? (y/N)

De las otras, todas fueron rutina y la instalación quedó terminada en este paso. Basta modificar
el archivo `pelicanconf.py` para cambiar los temas, el nombre del blog, etc. Una vez que todo
parece en orden se generan los archivos para el blog usando:
	
	make html && make serve

Lo anterior genera los archivos necesarios y abre el puerto 8000 en el servidor local para visualizar
el sitio. Una vez que todo quedó en orden, sólo quedaba realizar el primer `commit` que en este caso
es un poco más sofisticado:

	cd output
	git add .
	git commit -m "Plantilla iniciada"
	git push
	cd ..
	git add .
	git commit -m "Plantilla iniciada"
	git push -u origin master

Inmediatamente después, el blog ya podía ser consultado.

Agregar MathJax al blog fue un poco más elaborado. En principio existe un plugn-in para usar
\(\TeX / \LaTeX\) con Pelican, pero requería la versión 3.6.0 y fata ímpetu de contradecir a Debian
y su versionado, sólo me quedo ingeniármelas. Descubrí que las plantillas de Pelican son muy sencillas y su motor
lo es más. Una de las plantillas lleva el nombre de `article.html` la cual
contiene la estructura de como se construye el articulo en base a los archivos .md o .rst, bastaba
agregar en este archivo el vínculo para conectar MathJax y que las expresiones se mostraran adecuadamente 
pero estaba en contra de que siempre se cargara MathJax. Noté que la plantilla recibía las etiquetas así que
decidí utilizarlas para condicionar la carga de MathJax y no sólo eso, sino cualquier librería
que se requiriera en el artículo. Para conseguir esto, agregué el siguiente código entre las
etiquetas `{% block head %}` y `{% endblock %}` de `article.html`:

	<script type="text/javascript">

	  var callMath = function (libs){
	    var l = libs.length;
	    var libsJS = [];
	    for(var i=1; i<l; i++){
	            lib = libs[i];
	            libsJS.push(lib + '.js');
	    }
	    window.MathJax = {
	        TeX: {
	            extensions: libsJS
	        },
	        extensions: ["tex2jax.js","AssistiveMML.js"],
	        showMathMenu: false
	    };

	    var head = document.getElementsByTagName("head")[0], script;
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    script.src  = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML";
	    head.appendChild(script);
	  }

	  tags = [{% for tag in article.tags %} "{{ tag }}",  {% endfor %}];
	  var l = tags.length;
	  var mathjax = false;
	  for(var i=0; i<l; i++){
	    tag = tags[i];
	    if (tag.slice(0,7) === 'mathjax'){
	      libs = tag.split('-');
	      callMath(libs);
	    }
	  }
	</script>

Lo único que realiza lo anterior, es atrapar las cadenas que indican las etiquetas del artículo 
en un arreglo al cual se le pregunta si contiene alguna que empiece con `mathjax`, si existe una
de esa naturaleza, se realiza la carga del script de MathJax. Además, si la etiqueta
contiene guiones, los separa y los pasa como librerías que se agregan al archivo de configuración
de MathJax. Por ejemplo, si una de las etiquetas es `mathjax-AMScd`, la carga de MathJax se realiza
solicitando, además, la librería `AMScd.js` que permite el uso de diagramas conmutativos (lo cual es una
verdadera maravilla). También, para evitar que el procesamiento de markdown afecte el contenido escrito en \(\TeX\)
requerí instalar la extensión de `python-markdown` llamada `math` (no es oficial, es de terceros) la cual se 
puede conseguir de manera muy sencilla con `pip` ejecutando

	pip install python-markdown-math

y modificando el archivo `pelicanconf.py` para incluir la linea

	MD_EXTENSIONS = { 'math' : {} }

Con esto, los caracteres que indican expresiones matemáticas no son tomados en cuenta por markdown
y procesados posteriormente por MathJax tal cual fueron escritos. Para ser un remiendo de una tarde,
la solución anterior no funciona nada mal.

Por supuesto, no todo es miel sobre hojuelas. Usar MathJax implica delegar el procesamiento del contenido
a servidores externos, pero dada la naturaleza del problema (¡y que hay diagramas conmutativos!), el
intercambio parece razonable. Quizá en un futuro lo pueda solucionar, no me parece tan complicado 
pensar que el procesador de markdown de python se encargue del trabajo de MathJax pero eso involucra leer
una larga documentación. Una día de estos...


P.D. Santos diagramas conmutativos:
\[
\begin{CD}
A     @>f>>  B\\
@VVhV        @VViV\\
C     @>g>>  D
\end{CD}
\]


