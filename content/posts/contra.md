title: Contraejemplos: Categorías balanceadas
category: blog
slug: contra
tags: Categorías,espacios métricos,contraejemplos,mathjax
status: published
date: 5-5-2016

Si algo me ha perturbado en aprender teoría de categorías, es la
abrumadora cantidad de definiciones que hay y de las que en un umbral de
absoluta ignorancia, pocos contraejemplos conozco. Una de ellas, es el
concepto de categoría balanceada.

**Definición.** Una categoría $ \mathcal{C}$ se dice *balanceada* si
cualquier morfismo $ f \colon A \to B$ en la categoría que sea al mismo
tiempo un monomorfismo y epimorfismo es un isomorfismo.

Muchas categorías bien conocidas son balanceadas: $ \mathbf{Set}$,
$ \mathbf{Pos}$, $ \mathbf{Grp}$, etc. Se necesita sentarse a pensar si
habrá categorías no balanceadas y un ejemplo bastante lindo resulta la
categoría $ \mathbf{Met}$ formada por los espacios métricos como sus
objetos y los morfismos métricos como sus morfismos.

**Definición.** Sean $ A$ y $ B$ espacios métricos y sea
$ f \colon A \to B$. Entonces, $ f$ se dice *un morfismo métrico* si
$$d_B(f(x),f(y)) \leq d_A(x,y).$$

Para determinar si es o no balanceada necesitamos caracterizar los
isomorfismos, lo mismo que los monomorfismos y epimorfismos en
$ \mathbf{Met}$.

**Lema.** Sean $ A$ y $ B$ espacios métricos y sea $ f \colon A \to B$
un morfismo métrico. Entonces, $ f$ es un isomorfismo si y sólo si $ f$
es biyectiva y una isometría.

**Demostración.** Por un lado, si $ f$ es un isomorfimo, entonces es
invertible y su inversa es un morfismo métrico. Esto implica que

$$\begin{aligned}
    d_A(x,y) &= d_A\left( f^{-1}(f(x)), f^{-1}(f(y)) \right) \\
        &\leq d_B(f(x),f(y)) \\
    & \leq d_A(x,y)
  \end{aligned}$$

por tanto $ d_A(x,y) = d_B(f(x),f(y))$. Lo anterior muestra que $ f$ es
una isometría como buscábamos. Ahora, si $ f$ es biyectiva y una
isometría, entonces su inversa debe ser de igual forma una isometría y
por tanto un morfismo métrico; en otras palabras es un isomorfismo en
$ \mathbf{Met}$. Q.E.D.

**Lema.** Sean $ A$ y $ B$ espacios métricos y sea $ f \colon A \to B$
un morfismo métrico. Entonces, $ f$ es un monomorfismo si $ f$ es
inyectiva.

**Demostración.** Al ser $ f$ inyectiva, $ f \circ g_1 = f \circ g_2$
implica que $ g_1 = g_2$, resultando un monomorfismo. Q.E.D.

**Lema.** Sean $ A$ y $ B$ espacios métricos y sea $ f \colon A \to B$
un morfismo métrico. Entonces $ f$ es un epimorfismo si el conjunto
$ \mathrm{im}(f)$ es denso.

**Demostración.** Supongamos que $ g_1,g_2 \colon B \to C$ son morfismos
métricos de forma que $ g_1 \circ f = g_2 \circ f$. Debemos probar que
$ g_1 = g_2$ y para conseguir esto, tomamos $ x \in B$ y
$ \varepsilon>0$ y afirmamos que $ d_C(g_1(x),g_2(x)) < \varepsilon$. En
efecto, como la imagen es densa, entonces existe $ y \in A$ de forma que
$$d_B(f(y),x) < \frac{\varepsilon}{2},$$ de esta forma podemos tomar
$ z = g_1(f(a)) = g_2(f(a))$ y en consecuencia

$$\begin{aligned}
    d_C(g_1(x),g_2(x)) &\leq d_C(g_1(x), z) + d_C(z,g_2(x)) \\
    &\leq d_B(x,f(y)) + d_B(f(y),x) \\
    &< \varepsilon,
  \end{aligned}$$

mostrando con esto nuestra afirmación. Ahora, como la elección de
$ \varepsilon$ fue arbitraria, podemos concluir que
$ d_C(g_1(x),g_2(x)) = 0$ o en otras palabras $ g_1(x) = g_2(x)$. Siendo
la elección de $ x$ arbitraria, podemos también concluir que
$ g_1 \circ f = g_2 \circ f$ implica $ g_1 = g_2$ mostrando que $ f$ es
un epimorfismo. Q.E.D.

Basta ahora considerar la inclusión
$ i \colon \mathbb{Q} \to \mathbb{R}$ la cual es un morfismo métrico.
Como es inyectiva, lo anterior nos permite concluir que debe ser un
monomorfismo, además la imagen de $ i$ es densa y en consecuencia un
epimorfismo. Sin embargo, $ i$ no es biyectiva por lo que no puede ser
un isomorfismo. Esto quiere decir que existen morfismos métricos que
resultan monomorfismos y epimorfismos pero no isomorfismos. En otras
palabras:

**Teorema.** La categoría $ \mathbf{Met}$ no es balanceada.

