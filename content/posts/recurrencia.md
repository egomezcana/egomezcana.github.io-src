title: El problema de las relaciones de recurrencia
category: blog
slug: recurrencia
tags: ecuaciones en diferencias,relaciones de recurrencia,mathjax
status: published
date: 3-May-2016
summary: Una breve exploración de la formulación de una ecuación en diferencias como problema y en analogía a una ecuación diferencial.

Curioseando un poco en temas de matemáticas discretas, encontré poca
información acerca de como definir correctamente una relación de
recurrencia también llamada ecuación en diferencias. Me pareció útil
establecer una analogía entre las ecuaciones diferenciales y las
ecuaciones en diferencias, usando como punto de partida las primeras
como problema.

**Definición.** Sea $ g \colon \mathbb{R}^{k+2} \to \mathbb{R}$. *Una
ecuación diferencial ordinaria* es el problema de encontrar una función
$ f \colon I \subseteq \mathbb{R} \to \mathbb{R}$ en $ I$, de forma que
para todo $ x$ en el dominio de $ f$
$$g\left( f^{(0)}(x),\dots,f^{(k)}(x),x \right) = 0.$$ La ecuación
anterior se dice estar *en forma implícita*; en contraste, la ecuación
se dice estar *en forma explícita*, si para una función
$ g \colon \mathbb{R}^k \to \mathbb{R}$, podemos expresar el problema
como$$f^{(k)}(x) = g\left( f^{(0)}(x),\dots,f^{(k-1)}(x),x \right).$$

Usando esta definición como base e inspiración, podemos formular un
problema discreto análogo. Habrá que admitir, de momento, que los reales
juegan un rol importante en la formulación.

**Definición.** Sea
$ g \colon \mathbb{R}^{k+1} \times \mathbb{N} \to \mathbb{R}$. *Una
ecuación en diferencias ordinaria* es el problema de encontrar una
sucesión $ f \colon \mathbb{N} \to \mathbb{R}$ de forma que para todo
$ n \in \mathbb{N}$, $$g(f(n), f(n+1), \dots, f(n+k-1),n) = 0.$$ La
ecuación anterior se dice estar *en forma implícita*; en contraste se
dice estar *en forma explícita*, si para una función
$ g \colon \mathbb{R}^k \times \mathbb{N} \to \mathbb{R}$, podemos
expresar el problema como $$f(n+k)=g( f(n), \dots, f(n+k-1),n).$$

El problema definido así, es la versión discreta de una ecuación
diferencial ordinaria. Una inspección más detenida nos deja ver que los
reales juegan un rol importante en las ecuaciones diferenciales por toda
la estructura que acarrean, sin embargo en el caso discreto parecen ser
inconsecuentes a menos que se quiera resolver el caso continuo a través
de una aproximación usando el caso discreto. Parece entonces razonable
librarnos de $ \mathbb{R}$ y establecer un caso más general.

**Definición.** Sea $ A$ conjunto cualquiera y sea
$ g \colon A^{k+1} \times \mathbb{N} \to A$. *Una ecuación en
diferencias ordinaria sobre $ A$* es el problema de encontrar una
sucesión $ f \colon \mathbb{N} \to A$ de forma que para todo
$ n \in \mathbb{N}$, $$g(f(n), \dots, f(n+k),n) = 0.$$

La igualdad $ g(f(n), \dots, f(n+k),n) = 0$ establece una relación entre
las entradas de la sucesión $ f$ y ésta parece la razón del término
*relación de recurrencia*. Planteado así, y aunque las expresiones
*ecuación en diferencias* y *relación de recurrrencia* son prácticamente
intercambiables, resultan ligeramente distintas.

**Ejemplo.** La ecuación $$f(n+1) = (n+1)f(n)$$ con condición inicial
$ f(0)=1$ tiene como solución al factorial.

**Ejemplo.** La ecuación $$f(n+2) = f(n+1) + f(n)$$ con condiciones
iniciales $ f(0) = 1$ y $ f(1) = 1$ tiene como solución a la sucesión de
Fibonacci.

Continuando con la analogía, podemos ir todavía más lejos definiendo
“una ecuación en diferencias parciales” tomando sucesiones dobles como
las potenciales soluciones.

**Definición.** Sea
$ g \colon A^{(k+1)(l+1)} \times \mathbb{N}^2 \to \mathbb{A}$. *Una
ecuación en diferencias parciales en dos variables sobre $ A$* es el
problema de encontrar una doble sucesión $ u \colon \mathbb{N}^2 \to A$
de forma que para todo $ n,m \in \mathbb{N}$,
$$g\left(u(n+k)(m+l),\dots,u(n,m),n,m\right) = 0.$$

**Ejemplo.** La ecuación en diferencias parciales
$$u(n+1)(m+1) = -nu(n,m+1) + u(n,m)$$ con condiciones iniciales
$ u(0,0) = 1$ y $ u(0,n) = u(n,0) = 0$ tiene como solución a los números
de Stirling del primer tipo.

Sería interesante poder derivar alguna clase de teoremas de existencia y
unicidad para las ecuaciones en diferencias parecidos al de
Picard-Lindelöf.

