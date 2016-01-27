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
para considerar a una sucesión como *una tupla con un número infinito de componentes*. Sin embargo, existe una caracterización más importante
que es la que nos interesa en este momento. Necesitamos definir un par de operaciones antes de continuar.

> **Definición 2**. Para sucesiones \(a\) y \(b\) sobre \(R\), definimos
> \[ (a + b)_k = a_k + b_k \]
> y
> \[ (a \cdot b)_k = \sum_{i=0}a_{k-i}b_{i}\]

