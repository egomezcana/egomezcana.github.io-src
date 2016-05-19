title: Series formales de potencia: Definiciones y un ejemplo 
category: blog
slug: formales1
tags: Series formales,anillos,mathjax
status: published
date: 10-mar-2016

Hay una idea muy interesante cuando se estudia el anillo de series
formales de potencia: La existencia de unidades. Estas unidades nos
permiten dar una versión algebraica de la aproximación de algunas
funciones sin necesidad de hablar de convergencia.

Consideraremos para esto $ R$ como un anillo conmutativo y por
cuestiones puramente sentimentales, asumiremos que los anillos siempre
vienen acompañados de un elemento unitario (sentimentalismo categórico).
Se construirá sobre este anillo el denominado anillo de las series
formales de potencia.

**Definición.** Una función $ \mathbb{N} \to R $ se dirá una *sucesión
sobre $ R$*. Al conjunto de todas las sucesiones sobre $R$, se le
denotará como $ R[[x]]$.

Para una sucesión $a$ sobre $R$, se acostumbra escribir $a_k = a(k)$. Es
también contrumbre representar a la sucesión como una tupla con infinito
números de entradas: $$a = (a_0,a_1, \dots ).$$ Sin embargo, existe una
caracterización en la que tenemos más interés de momento. Necesitamos
definir un par de operaciones antes de continuar.

**Definición.** [OP] Para sucesiones $a$ y $b$ sobre $R$, definimos
$$(a + b)_k = a_k + b_k$$ y $$(a \cdot b)_k = \sum_{i=0}^ka_{k-i}b_{i}$$

Bajo está definición, no es difícil verificar que $ (R[[x]],+,\cdot) $
es un anillo conmutativo. Además, podemos distinguir a un elemento
particular de este conjunto, denominado *la indeterminada*, como
$$x = (0,1,0,\ldots).$$ Para ésta, definimos también $ x^0 = 1$,
$ x^1 = x$ y de manera recusriva $ x^{m+1} = x \cdot x^m $.

**Proposición.** Para cualquier pareja de enteros no negativos $ j$ y
$ k$ se cumple: $$(x^j)_k = \delta_{jk}.$$

**Demostración.** Procedemos por inducción sobre $ j$. Por definición
$ x^0 = 1$ por lo que el resultado sigue. Supongamos
$ (x^j)_k = \delta_{jk}$ para cualquier $ k$, entonces

$$\begin{aligned}
    (x^{j+1})_k &= (x \cdot x^{j})_k \\
    &= \sum_{i=0}^{k} x_{k-i}(x^{j})_{i} \\
    &= \sum_{i=0}^{k} x_{k-i}\delta_{ji} \\
    &= x_{k-j} \\
  \end{aligned}$$

Ademas, $ x_{k-j} = \delta_{1(k-j)} = \delta_{(j+1)k}$, de lo que
$ (x^{j+1})_k = \delta_{(j+1)k}$. Lo anterior es lo que buscábamos y por
inducción la proposición sigue. Q.E.D.

La proposición anterior, se puede usar para garantizar que todos los
elementos de $ R\left[ [x] \right]$ se pueden expresar como
“combinaciones lineales” del conjunto $$\{1,x,x^2,\dots,x^n,\dots\}.$$
Este hecho nos permite escribir una sucesión cualquiera sobre $ R$,
$$a = (a_0, a_1, \ldots)$$ como $$a = \sum_{i=0}^{\infty}a_ix^i.$$ Esto
es un simple formalismo, nada se habla acerca de la convergencia de la
suma y solamente hemos encontrado una forma de expresar una sucesión en
términos peculiares. Por la que se denomina a $ R\left[ [x] \right]$
como *el anillo las series formales de potencia*.

**Proposición.** [PR] Sea $ a = \sum_{i=0}^{\infty}a_ix^i$ una serie
formal de potencias en $ R$. Entonces, $ a$ es una unidad en
$ R\left[[x]\right]$ si y sólo si $ a_0$ es una unidad en $ R$.

**Demostración.** Supongamos que $ a$ es una unidad, en ese caso debe
existir otra serie formal $ b = \sum_{i=0}b_ix^i $ de forma que
$ ab = 1$, o en otras palabras que $ (a b)_k = \delta_{0k}$; en ese caso
$ a_0 b_0 = 1$ por lo que debemos concluir que $ a_0$ es una unidad.

Si suponemos ahora que $ a_0$ es una unidad, entonces existe $ u \in R$
tal que $ a_0 u= 1$, definiremos la serie formal $ b$ de manera
recursiva $$b_0 = u$$ $$b_{k} = -u \sum_{i=1}^{k}a_ib_{k-i}$$ y
afirmamos que ésta satisface $ a b = 1 $. En efecto
$$(ab)_0 = a_0b_0 = a_0u = 1$$ y para valores $ k\geq 1$, de acuerdo a
la definición que se provee $$-a_0b_k = \sum_{i=1}^{k}a_ib_{k-i}$$ por
lo que tenemos

$$\begin{aligned}
    (ab)_k &= \sum_{i=0}^{k}a_{i}b_{k-i} \\
        & = a_0b_k+ \sum_{i=1}^{k}a_{i}b_{k-i} \\
    & = 0
  \end{aligned}$$

como afirmamos. En ese caso, la serie formal de potencia $ a$ presenta
como inversa a la serie formal $ b$ por lo que resulta una unidad en
$ R\left[[x]\right]$ como buscábamos. Q.E.D.

**Ejemplo.** Es común afirmar en una discusión analítica que
$$\frac{1}{1-x} = 1 + x + x^2 + \dots$$ siendo la sucesión de la derecha
una aproximación polinomial a la función de la izquierda. Para dar
sentido a esta expresión se requiere dar un elaborado argumento de
convergencia. Sin embargo, a la sombra del resultado anterior, la
sucesión $ (1-x)$ cumple con las hipótesis por lo que debe poseer una
inversa en $ R\left[ [x] \right]$, la cual puede ser calculada
identificando $$1 - x = (1,-1,0,0,\dots)$$ lo cual resulta en obtener
$$(1-x)^{-1} = (1, 1, 1, \dots),$$ lo cual se acostumbra representar
como $$\frac{1}{1-x} = 1 + x + x^2 + \dots.$$ Es sorprendente que la
definición [OP] haga posible hablar de manera simbólica de objetos sin
mencionar siquiera la convergencia.

