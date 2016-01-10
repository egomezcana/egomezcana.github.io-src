Title: Hola Mundo (o de como terminó funcionando este blog)
Date: 2016-1-2
Category: Blog
Tags: mathjax-AMScd
Slug: hola-mundo
Summary: Primera entrada del blog donde se explican algunos ajustes que se realizaron a la plantilla original y cómo se integró MathJax.

Todavía no decido que haré con este blog. Es interesante sin embargo que uno puede realizar notas
para recordarlas después, y una que me interesa lo suficiente es como conseguí que el blog funcionara, algo así
como un «hola mundo». Bueno, tonteras de lado, debía responder primero qué necesitaba para el blog. Dos cosas
me parecieron primordiales, la primera era  usar alguna variante de \( \TeX \) y la segunda tener el control del 
cómputo para la generación de contenido. A estas dos características les encontré solución usando MathJax y Pelican.
Pero elegir las herramientas no fue tan sencillo. 

MathJax por un lado tiene algo de indeseable, es lento e interpreta el código en el cliente quitando parte del control
del contenido. Tiene sin embargo una enorme ventaja: Madurez. Encontraste, KaTeX, el motor de Khan Academy, 
es increíblemente veloz pero no cuenta con suficientes extensiones, el proyecto, sin embargo, tiene buena pinta y quedé
con ganas de experimentar con él.

Al principio, un generador de contenido estático, aparte de Pelican, llamó mi atención: Hakyll. Hakyll, escrito es Haskell, me parecía 
algo más natural pero su curva de aprendizaje resultaba mucho más alta (considerando, claro, que mi fluidez en Haskell no es 
precisamente aparatosa). Pelican por otro lado, está implementado en Python, un lenguaje sencillo que a veces deja algunos sin sabores, pero
del cual conozco los suficientes detalles y el cual es lo suficientemente simple. Preferí lo malo por conocido.

Pelican resultó sencillo de encontrar e instalar, a mí me bastó buscar en los repositorios de Debian. 
Por simplicidad y como tenía un sitio montado ahí, decidí usar las páginas de GitHub.  Pelican usa archivos base para generar los 
las páginas que se van distribuir y los colecciona en el directorio *output*. Para poder simplificar la generación de contenido,
creé un nuevo repositorio con el nombre `egomezcana.github.io-src` y es sobre la base de este que inicialicé
Pelican, después cloné el repositorio `egomezcana.github.io` sobre la carpeta *output* como un submódulo de Git. Lo
anterior lo conseguí usando el siguiente código:

	cd pelican-web
	git clone https://github.com/egomezcana/egomezcana.github.io-src.git
	git submodule add  https://github.com/egomezcana/egomezcana.github.io.git output

Una vez hecho esto, basta inicializar Pelican ejecutando:

	pelican-quickstart

Lo anterior dispara una serie de preguntas para configurar el sitio, quizá las más relevantes de entre todas:

	> Do you want to specify a URL prefix? e.g., http://example.com   (Y/n) n
	> Do you want to upload your website using GitHub Pages? (y/N)

De las otras, todas fueron rutina y la instalación quedó terminada en este paso. Me bastó modificar
el archivo `pelicanconf.py` para cambiar los temas, el nombre del blog, etc. para dejar todo en orden.
Una vez que todo parecía en orden, los archivos para el blog se generaron usando:
	
	make html
	make serve

Lo anterior, aparte de generar los archivos necesarios, abre el puerto 8000 en el servidor local y
permite visualizar el sitio. Una vez que todo parecía en orden, era necesario publicar

	make publish

En este punto sólo quedaba realizar el primer `commit` que en este caso es un poco más sofisticado:

	cd output
	git add .
	git commit -m "Plantilla iniciada"
	git push
	cd ..
	git add .
	git commit -m "Plantilla iniciada"
	git push -u origin master

Inmediatamente después, el blog ya podía ser consultado en línea. Realmente fue simple.

Agregar MathJax al blog no fue miel sobre hojuelas. En principio existe un plugn-in para usar
\(\TeX / \LaTeX\) con Pelican, pero requería la versión 3.6.0 y en estos días me falta ímpetu 
para contradecir a las versiones de los repositorios de Debian, sólo me quedo ingeniármelas. 
Descubrí que las plantillas de Pelican son muy sencillas y su motor, Jinja, lo es más. Una de las 
plantillas lleva el nombre de `article.html` la cual contiene la estructura de como se construye el 
articulo en base a los archivos .md o .rst, bastaba
agregar en este archivo el vínculo para conectar MathJax y que las expresiones se interpretaran adecuadamente.
Sin embargo, no me parecía aceptable cargar MathJax en cada artículo, no es un script precisamente ligero. 
Noté que la plantilla recibía las etiquetas así que decidí utilizarlas para condicionar la carga de MathJax y no sólo eso, 
sino cualquier librería que se requiriera en el artículo. Para conseguir esto, agregué el siguiente código en el 
`{% block head %}` de  `article.html`:

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

Lo único que realiza lo anterior es atrapar las cadenas que indican las etiquetas del artículo,
usando el lenguaje de la plantilla, guardándolas en un arreglo al cual se le pregunta si contiene 
alguna que empiece con `mathjax`, si existe una de esa naturaleza, se realiza la carga del script de 
MathJax. Además, si la etiqueta contiene guiones, los separa y los considera librerías que se agregan 
finalmente al archivo de configuración de MathJax. Por ejemplo, si una de las etiquetas es `mathjax-AMScd`, 
la carga de MathJax se realiza solicitando, además, la librería `AMScd.js` que permite el uso de diagramas conmutativos 
(lo cual es una verdadera maravilla). También, para evitar que el procesamiento de markdown afecte el contenido 
escrito en \(\TeX\), es necesario instalar la extensión de `python-markdown` llamada `math` 
(no es oficial, es de terceros) la cual se puede conseguir de manera muy sencilla con `pip` ejecutando

	pip install python-markdown-math

y modificando el archivo `pelicanconf.py` para incluirla en el procesamiento de markdown,
agregando la linea

	MD_EXTENSIONS = { 'math' : {} }

Con esto, los caracteres que indican expresiones matemáticas no son tomados en cuenta durante el
procesamiento de markdown y son posteriormente interpretados por MathJax una vez que la página se ha
cargado completamente. Para ser un remiendo de una tarde, la solución anterior no funciona nada mal.

Por supuesto, lo anterior tiene sus problemas. Usar MathJax implica delegar el procesamiento del contenido
al cliente del cual no tenemos control alguno, pero dada la naturaleza del problema 
(¡y que hay diagramas conmutativos!), el intercambio parece razonable. Quizá en un futuro se pueda dar otra 
solución, no me parece tan descabellado pensar que el procesador de markdown de Python se encargue del trabajo 
que realiza MathJax pero eso involucra leer una larga documentación y buscar si el proceso ya está integrado en 
alguna librería. Una día de estos...


Por cierto. Santos diagramas conmutativos batman:
\[
\begin{CD}
A     @>f>>  B\\
@VVhV        @VViV\\
C     @>g>>  D
\end{CD}
\]


