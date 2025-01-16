<template>
  <div class="mt-4">
    <h2>Sympy3DPolygon Module</h2>
    <p>
      This module provides functions to create and manipulate 3D polygonal
      objects using the SymPy computer algebra system.
    </p>
    <h3>Installation</h3>
    <p>
      You can install the module using pip:
    </p>
    <pre><code>pip install sympy3dpolygon</code></pre>
    <h3>Basic Usage</h3>
    <p>
      You can create a 3D polygonal object using the
      <code>sympy3dpolygon.Polygon3D</code> class:
    </p>
    <pre><code>from sympy3dpolygon import Polygon3D

poly = Polygon3D([(-1, -1, 0), (1, -1, 0), (1, 1, 0), (-1, 1, 0)])</code></pre>
    <p>
      You can then use the various methods of the class to manipulate and
      analyze the polygon.
    </p>
    <h3>Methods</h3>
    <ul>
      <li><code>area</code>: Returns the area of the polygon.</li>
      <li><code>centroid</code>: Returns the centroid of the polygon.</li>
      <li><code>normal</code>: Returns the normal vector of the polygon.</li>
      <li><code>perimeter</code>: Returns the perimeter of the polygon.</li>
      <li><code>volume</code>: Returns the volume of the polygon.</li>
    </ul>
  </div>
</template>
