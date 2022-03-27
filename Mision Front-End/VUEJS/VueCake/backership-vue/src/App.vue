<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" id="navtitle" class="brand-logo">Bakership</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Menú</router-link></li>
        <li><router-link to="/about">Hacer Pedido</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#navtitle{
  padding-left: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
