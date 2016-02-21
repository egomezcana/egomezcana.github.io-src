Title: Series formales de potencia. Operaciones Formales.
Date: 2016-1-26
Slug: formales1
Category: Blog
Summary: Exploración sobre la derivación e integración formal sobre las series formales de potencia.
Status: draft
Tags: mathjax

En el proceso de revisión de una tesis para la que recientemente fui nombrado sinodal (¿?) me topé con el tema. Había algunos
detalles quisquillosos que el texto dejaba fuera pero que resulta profundamente interesante delinearlos. El objetivo
de la publicación es simplemente ordenar estas idea.

Sin más preámbulo, se considerará desde ahora \( R\) como un anillo conmutativo (por cuestiones puramente sentimentales, para mi los anillos
vienen acompañados de un elemento unitario (sentimentalismo categórico) y se construirá sobre este anillo el denominado
anillo de las series formales de potencia.

> **Definición 1**. Una función \( \mathbb{N} \to R \) se dirá una *sucesión sobre \( R\)*. Al conjunto de todas las sucesiones sobre \(R\),
> se le denotará como \( R[[x]]\).

Para una sucesión \(a\) sobre \(R\), se acostumbra escribir \(a_k = a(k)\). Se acostumbra también, escribir
\[ a = (a_0,a_1, \dots )\]
para considerar a una sucesión como *una tupla con un número infinito de componentes*. Sin embargo, existe una caracterización en
la que tenemos más interés de momento. Necesitamos definir un par de operaciones antes de continuar.

> **Definición 2**. Para sucesiones \(a\) y \(b\) sobre \(R\), definimos
> \[ (a + b)_k = a_k + b_k \]
> y
> \[ (a \cdot b)_k = \sum_{i=0}^ka_{k-i}b_{i}\]

Bajo está definición, no es difícil verificar que \( (R[[x]],+,\cdot) \) es un anillo conmutativo. 
A este anillo se le conoce como el *anillo la series formales de potencia*. La razón de es esto es que podemos definir
una sucesión muy particular, *la indeterminada* como
\[ x = (0,1,0,\ldots).\]
Esta sucesión satisface
\[ (x^n)_k = \delta_{nk},\]
lo que nos permite escribir cada sucesión \( s = (s_0, s_1, \ldots)\) en \( R\) como
\[ s = \sum_{k=0}^{\infty}s_kx^k.\]
Esto es un simple formalismo, nada se habla acerca de la convergencia de la suma solamente hemos encontrado una
forma de expresar una sucesión como si de una suma infinita se tratara pero esto es solamente de *forma*.

> **Proposición 1**. Sea \( s = \sum_{k=0}^{\infty}s_kx^k\) una serie formal de potencias en \( R\). Entonces,
> \( s\) es una unidad si y sólo si \( s_0\) es una unidad en \( R\).

> *Demostración*. Supongamos que \( s\) es una unidad, en ese caso debe existir otra serie formal \( t\)
> de forma que \( s t = \mathbf{1}\) o en otras palabras que \( (s t)_k = \delta_{0k}\) en ese caso
> \( s_0 t_0 = 1\) por lo que debemos concluir que \( s_0\) es una unidad.
> 
> Si suponemos ahora que \( s_0\) es una unidad, entonces existe \( r \in R\) tal que \( s_0 r= 1\),
> definiremos la serie formal  \( t\) de manera recursiva
> \[ t_0 = r\]
> \[ t_{k+1} = -r \sum_{i=1}^{k+1}s_it_{k-i+1} \]
> y afirmamos que ésta satisface \( s t = \mathbf{1}\). En efecto \( (st)_0 = s_0t_0 = s_0r = 1\) y
> para valores \( n\geq 1\), debemos tener
> \[ (st)_n = \sum_{k=0}^{n}s_kt_{n-k}\] 

