title: Recurrencia 2: Ecuaciones en diferencias y el teorema de recursión
category: blog
slug: recursion
tags: ecuaciones en diferencias, relaciones de recurrencia,recursión,mathjax
status: published
date: 9-may-2016

Curioseando un poco más con las analogías entre los problemas de
ecuaciones diferenciales y ecuaciones en diferencias, me encontré con
una versión del teorema de recursión que consigue solucionar el problema
asociado a las ecuaciones en diferencia.

**Teorema.** [Teorema de recursión] Sea $ A$ un conjunto,
$ g \colon A \times \mathbb{N} \to A$ una función y $ a$ un elemento de
$ A$. Entonces, existe una única función $ f \colon \mathbb{N} \to A$ de
forma que $$f(0) = a$$ y $$f(n+1)=g\left( f(n),n \right).$$

**Demostración.** Vamos a probar primero que existe un subconjunto
$ f \subset \mathbb{N} \times A $ el cual resulta una función. Para esto
definimos el conjunto
$$\mathcal{C} = \left\{ X \subset \mathbb{N} \times A \mid (0,a) \in X \text{ y } (n,x)\in X\text{ implica }(n+1,g(x,n))\in X \right\}.$$
Como $ \mathbb{N} \times A$ es un subconjunto de si mismo y contiene
todas las parejas posibles, entonces
$ \mathbb{N} \times A \in \mathcal{C}$ lo que nos permite concluir que
el conjunto $ \mathcal{C} $ es no vacío. Entonces, definimos
$$f = \bigcap \mathcal{C}$$ y afirmamos que satisface la propiedad que
define a $ \mathcal{C} $. En efecto, como $ (0,a)$ está en todos los
elementos de $ \mathcal{C}$ entonces debe ser un miembro de la
intersección y por tanto $ (0,a) \in f$. Ademas, si $ (n,x) \in f $,
entonces para cada $ X \in \mathcal{C} $ la pareja $ (n,x) \in X $ y en
ese caso $ (n+1,g(x,n))\in X $ de lo que podemos deducir que
$ (n+1,g(x,n)) \in f $. En otras palabras $ f \in \mathcal{C} $.
También, por la forma en que hemos definido a $ f$, si
$ v\in \mathcal{C} $ debemos tener $ f \subseteq v $. Esta propiedad va
a garantizar que $ f$ resulta ser una función lo cual mostraremos por
inducción.

Por definición $ (0,a) \in f$ garantizando que existe al menos un
elemento relacionado con $ 0$ en $ f$. Basta mostrar que ese elemento es
el único posible. Para esto, supongamos primero que $ (0,b)$ es un
elemento de $ f$ de forma que $ a \neq b$. Entonces, el conjunto
definido como $ v = f \backslash\{(0,b)\}$ debe ser un subconjunto
propio $ f$ que además satisface las condiciones para ser un elemento de
$ \mathcal{C}$. En efecto, por definición $ (0,a) \in v$ y, si
$ (n,x) \in v $, entonces $ (n,x) \in f $ por lo que
$ (n+1,g(x,n)) \in f $ pero $ (n+1,g(x,n))\neq (0,b) $ lo cual implica
que $ (n+1,g(x)) \in v$. Sin embargo, esto es una contradicción pues,
como se afirma en el párrafo anterior, $ f \subseteq v$. Entonces
$ a = b$ como se buscaba.

Supongamos ahora el resultado para $ n$, i.e., existe un elemento $ b$
de forma que $ (n,b) \in f$ siendo éste el único con dicha propiedad. Lo
anterior implica que $ (n+1,g(b,n)) \in f$, por lo que existe un
elemento relacionado con $ n+1$ en $ f$ y debemos mostrar que éste es el
único con esta propiedad. Si suponemos que $ (n+1,c) \in f$ pero
$ g(b,n) \neq c$, procedemos definiendo $ v = f \backslash\{(n+1,c)\}$
el cual es un subconjunto propio de $ f$ y un elemento de
$ \mathcal{C} $. En efecto, si $ (m,z) \in v $ entonces $ (m,z) \in f $
y tenemos dos posibilidades: $ m = n $ o $ m \neq n $. Para la primera,
al tener $ (n,z) \in f $, la hipótesis de inducción garantiza que
$ z = b $ y podemos afirmar sin más que
$ (m+1,g(z,m)) = (n+1,g(b,n)) \neq (n+1,c) $. Para la segunda, debemos
tener que $ m+1 \neq n+1 $ y $ (m+1,g(z,m)) \neq (n+1,c) $. En
cualquiera de los casos, es posible concluir $ (m+1,g(z,m)) \in v $ al
ser $ (m+1,g(z,m)) \neq (n+1,c)  $. Lo anterior afirma precisamente que
$ v \in \mathcal{C} $. Esto es por supuesto una contradicción pues
$ f \subseteq v $, de acuerdo al primer párrafo de esta demostración.
Debemos entonces concluir que $ g(b,n) = c$ como buscábamos.

Por inducción, los resultados de los párrafos anteriores garantizan que
para cada $ n$ en los naturales, existe un único elemento de $ A$ que lo
acompaña en $ f$. Esto es lo mismo que decir que $ f$ es una función de
acuerdo con la definición como relación. Resta probar que $ f $ cumple
las propiedades que pide el teorema. De entrada, por la definición de
$ \mathcal{C} $, tenemos $ (0,a) \in f$ lo cual se expresa como
$ f(0) = a $. Ahora, $ f(n) $ debe cumplir que $ (n, f(n)) \in f $ y
como $ f \in \mathcal{C} $, entonces $ (n+1, g(f(n),n)) \in f $ o lo que
es lo mismo $ f(n+1) = g(f(n),n) $. Con esto hemos mostrado que existe
una función con las propiedades citadas.

Supongamos ahora que $ f_1$ es una función que cumple con las mismas
propiedades. Mostraremos que $ f_1 = f$ usando de nueva cuenta
inducción. Para el caso base es inmediato que $$f_1(0) = a = f(0).$$
Supongamos ahora $ f_1(n) = f(n)$, en ese caso
$$f_1(n+1) = g(f_1(n),n) = g(f(n),n) = f(n+1).$$ Lo anterior muestra que
$ f_1 = f$ mostrando que $ f$ es la única función con las propiedades
que buscamos. Q.E.D.

El teorema de recursión, así plateado, no parece resolver el problema
que hemos definido [aquí]({filename}/posts/recurrencia.md) como
ecuaciones en diferencias. Sin embargo, no es difícil modificarlo para
obtener lo que buscamos.

**Teorema.** Sea $ A$ un conjunto,
$ g \colon A^{k} \times \mathbb{N} \to A$ una función, y sean también
$ a_0,a_1,\dots,a_{k-2}$ y $ a_{k-1}$ elementos cualquiera de $ A$.
Entonces, existe una única función $ f \colon \mathbb{N} \to A$ de forma
que $ f(0) = a_0$, $ f(1) = a_1$, …, $ f(k-1) = a_{k-1}$ y para todo
número natural $ n$ $$f(n+k) = g\left( f(n),\dots,f(n+k-1),n \right)$$

**Demostración.** Sea $ b_0 = (a_0,\dots,a_{k-1})$ y sea también
$ G \colon A^{k} \times \mathbb{N} \to A^{k}$ la función definida como
$$G(x_0,\dots,x_{k-1},n) = (x_1,\dots,x_{k-1}, g\left( x_0,\dots,x_{k-1},n\right)).$$
Según el teorema de recursión, existe una única función
$ h \colon \mathbb{N} \to A^{k}$ de forma que $$h(0) = b_0$$ y
$$h(n+1) = G(h(n),n).$$ Usando esta función, definimos entonces
$ f \colon \mathbb{N} \to A$ de la siguiente manera: $$f(n) = 
    \begin{cases}
      a_n & n < k \\
      g(h(n-k),n-k) & n \geq k
    \end{cases}.$$ Afirmamos que esta función satisface, para todo
natural $ n$, $$h(n) = (f(n), \dots, f(n+k-1)).$$ En efecto, podemos
observar que $$h(0) = (a_0,\dots,a_{k-1}) = (f(0),\dots,f(k-1)).$$ y si
suponemos que $h(n) = (f(n), \dots, f(n+k-1))$, entonces

$$\begin{aligned}
    h(n+1) &= G(h(n),n) \\
       &= \left( f(n+1),\dots,f(n+k-1), g(h(n),n) \right) \\
       &= \left( f(n+1),\dots,f(n+k-1), f(n+k) \right).
  \end{aligned}$$

Usando inducción, lo anterior muestra lo que afirmamos. Ahora, con esa
información, se desprende inmediatamente que

$$\begin{aligned}
    f(n+k) &= g(h(n),n) \\
    &= g(f(n),\dots,f(n+k-1),n),
  \end{aligned}$$

lo que garantiza la existencia de la función con las propiedades que
afirma el teorema.

Por último, supongamos que $ f_1$ es una función con las mismas
propiedades. Usando inducción probaremos que son iguales y para eso
basta mostrar para todo natural $ n$ que $$f_1(n+k) = f(n+k).$$ Para el
caso base, debemos observar que
$$f_1(k) = g(f(0),\dots,f(n+k-1),0) = f(k)$$ y si $ f_1(m+k) = f(m+k)$
para todo $ m \leq n$, entonces

$$\begin{aligned}
    f_1(n+1+k) &= g(f_1(n+1),\dots,f_1(n+k),n+1) \\
     &= g(f(n+1),\dots,f(n+k),n+1) \\
     &= f(n+1+k).
  \end{aligned}$$

Por inducción fuerte, tenemos $ f_1 = f$, mostrando que $ f$ es la única
función con las propiedades citadas. Q.E.D.

El anterior teorema se puede ver como una versión del teorema de
recursión (de hecho, los enunciados son equivalentes) con la
peculiaridad de dar una respuesta positiva al problema de las ecuaciones
en diferencia. Bajo la mirada adecuada, es la versión discreta del
teorema de Picard-Lindelöf y a diferencia de éste, las soluciones se
pueden garantizar de manera general a base de dar condiciones iniciales.
Esto implicaría que cualquier método que consiguiera encontrar una
solución para una ecuación en diferencias, encontraría la única solución
posible indicada en el teorema.

