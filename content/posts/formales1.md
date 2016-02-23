Title: Series formales de potencia 1
Slug: formales1
Date: 2016-02-22
Category: blog
Tags: mathjax
Status: draft

En el proceso de revisión de una tesis para la que
recientemente fui nombrado sinodal (¿?) me topé con
el tema. Había algunos detalles quisquillosos que resolver
y que resultan profundamente interesante delinearlos.
El objetivo de la publicación es simplemente ordenar
estas idea.
Sin más preámbulo, se considerará desde ahora \( R\)
como un anillo conmutativo y por cuestiones puramente
sentimentales, para mi los anillos vienen acompañados de
un elemento unitario (sentimentalismo categórico).
Se construirá sobre este anillo el denominado anillo
de las series formales de potencia.

  **Definición 1.**  Una función \( \mathbb{N} \to R \) se dirá una
  *sucesión sobre \( R\)*. Al conjunto de todas
  las sucesiones sobre \(R\), se le denotará como
  \( R[[x]]\).

Para una sucesión \(a\) sobre \(R\), se acostumbra
escribir \(a_k = a(k)\). Se acostumbra también, escribir
\[ a = (a_0,a_1, \dots )\]
para considerar a una sucesión como
*una tupla con un número infinito de componentes*.
Sin embargo, existe una caracterización en la que tenemos
más interés de momento. Necesitamos definir un par de
operaciones antes de continuar.

  **Definición 2.**  Para sucesiones \(a\) y \(b\) sobre \(R\), definimos
  \[ (a + b)_k = a_k + b_k \]
  y
  \[ (a \cdot b)_k = \sum_{i=0}^ka_{k-i}b_{i}\]

Bajo está definición, no es difícil verificar que
\( (R[[x]],+,\cdot) \) es un anillo conmutativo.
A este anillo se le conoce como el *anillo la
series formales de potencia*. La razón de es esto es
que podemos definir una sucesión muy particular,
*la indeterminada*, como
\[ x = (0,1,0,\ldots).\]
Esta sucesión satisface
\[ (x^i)_k = \delta_{ik},\]
lo que nos permite escribir cada sucesión
\( a = (a_0, a_1, \ldots)\) en \( R\) como
\[ a = \sum_{i=0}^{\infty}a_ix^i.\]
Esto es un simple formalismo, nada se habla acerca
de la convergencia de la suma solamente hemos encontrado una
forma de expresar una sucesión como si de una suma
infinita se tratara pero esto es solamente de *forma*.

  **Proposición 3.**  Sea \( a = \sum_{i=0}^{\infty}s_ix^i\) una serie
  formal de potencias en \( R\). Entonces, \( a\) es una
  unidad en \( R\left[[x]\right]\) si y sólo si \( a_0\) es
  una unidad en \( R\).


  **Demostración.**  Supongamos que \( a\) es una unidad, en ese caso debe existir
  otra serie formal \( b = \sum_{i=0}b_ix^i \) de forma
  que \( ab = 1\), o en otras palabras que
  \( (a b)_k = \delta_{0k}\); en ese caso \( a_0 b_0 = 1\) por
  lo que debemos concluir que \( a_0\) es una unidad.
  Si suponemos ahora que \( a_0\) es una unidad, entonces
  existe \( u \in R\) tal que \( a_0 u= 1\),  definiremos la
  serie formal  \( b\) de manera recursiva
  \[ b_0 = u\]
  \[ b_{k} = -u \sum_{i=1}^{k}a_ib_{k-i} \]
  y afirmamos que ésta satisface \( a b = 1 \). En efecto
  \[ (ab)_0 = a_0b_0 = a_0u = 1\]
  y para valores \( k\geq 1\),
  de acuerdo a la definición que se provee
  \[  -a_0b_k = \sum_{i=1}^{k}a_ib_{k-i} \]
  por lo que tenemos
    \begin{align*}
    (ab)_k &= \sum_{i=0}^{k}a_{i}b_{k-i} \\
    & = a_0b_k+ \sum_{i=1}^{k}a_{i}b_{k-i} \\
    & = 0
    \end{align*}
  como afirmamos. En ese caso la serie formal de potencia
  \( a\) presenta como inversa a la serie formal \( b\) por
  lo que resulta una unidad en \( R\left[[x]\right]\)
  como buscábamos.

La proposición anterior da una interesante caracterización
de algunas series. Por ejemplo, es común afirmar en una
discusión análitica que
\[ \frac{1}{1-x} = 1 + x + x^2 + \dots;\]
es notable que a la sombra de este resultado, que sea
eso lo que sucede precisamente en \( R\left[ [x] \right]\).
Debemos primero identificar la sucesión
\[ 1 - x = (1,-1,0,0,\dots)\]
la cual, de acuerdo a la propisición tiene inversa, la
cual puede ser calculada usando la prueba de ésta como
\[ (1-x)^{-1} = (1, 1, 1, \dots),\]
la cual representa a la serie que intuitivamente conocemos.
