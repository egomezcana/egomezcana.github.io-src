title: Contraejemplos: Categorías con productos infinitos
category: blog
slug: contra2
tags: Categorías,espacios métricos,contraejemplos,mathjax-AMScd
status: published
date: 10-9-2016

Muchas de las categorías más comunes tienen productos finitos. La
pregunta que muchas veces nos acosa es: ¿Existen categorías con todos
los productos finitos pero no que tengan algunos productos infinitos? La
respuesta es sí, existen esas categorías. Usaremos la categoría de los
espeacio métricos, $ \mathbf{Met}$, para mostrar que esto es posible. El
resultado que exhibiremos es en realidad peor: La existencia de
productos finitos no conduce a la existencia productos contables.

Comencemos notando que $\mathbf{Met}$ tiene a todos los productos
finitos y en particular tiene un objeto terminal $1=\{\ast\}$. Este
objeto es simplemente el espacio métrico con un elemento el cual para
cualquier espacio métrico $X$ y cualquier elemento $x_0 \in X$, admite
un morfismo métrico $ \kappa_{x_0} \colon \ast \mapsto x_0 $.

**Definición.** Tomaremos $2_{k}$ como el espacio métrico formado por
$ \{0,1\}$ como su conjunto base y con métrica $$d_k(0,1) = k.$$

Vamos a considerar la secuencia de espacios métricos
$$\{2_k\}_{k \in \mathbb{N}}.$$ Si la categoría tuviera todos los
productos infinitos entonces tendría el producto de la secuencia
anterior. Supongamos que este es el caso y que el producto es el objeto
$P$ junto a los morfimos $\pi_k \colon P \to 2_k$. Además, para cada $k$
podemos tomar los morfismos $\kappa_{0,k} \colon \ast \mapsto 0$ de
forma que $1$ y estos morfismos forman un diagrama de producto y lo
mismo sucede con los morfismos $\kappa_{1,k} \colon \ast \mapsto 1$.
Esto implica que existen morfismos $f,g \colon 1 \to P$ únicos de forma
que el siguiente diagrama conmuta

$$\begin{CD}
    1 @>\kappa_{0,k}>>    2_k \\
    @VfVV     @| \\
    P @> \pi_k >>    2_k \\
    @AgAA    @| \\
    1 @>\kappa_{1,k}>>    2_k
  \end{CD}$$

Con las funciones $f$ y $g$ definiremos los elementos de $a,b \in
P$ tomando estos como $a = f(\ast)$ y $b = g(\ast)$, para los que
siempre podremos encontrar un natural $n$ que satisface
$$n > d_P(a,b).$$ Lo cual es contradictorio pues tendríamos para todo
$k$ $$k = d_k(0,1)
  =  d_k((\pi_k \circ f)(\ast), (\pi_k \circ f)(\ast))
  \leq d_P(a,b) < n.$$ Debemos entonces concluir que no es posible
encontrar un objeto $P$ que sea el producto de la secuencia de espacios
métricos que indicamos. En conclusión:

**Teorema.** La categoría $ \mathbf{Met}$ no tiene todos los productos
infinitos.

