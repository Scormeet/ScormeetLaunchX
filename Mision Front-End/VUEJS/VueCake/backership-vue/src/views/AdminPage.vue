<template>
    <div class="admin">
        <div class="cards">
          <div class="row">
              <div class="col s12 m6">
                  <div class="card blue-grey darken-1" id="card">
                      <div class="card-content white-text">
                          <span class="card-title">Cantidad de Bases Disponibles</span>
                          <div class="card-content">
                              <li>Tres Leches: &ensp; 4</li>
                              <li>Fondant: &ensp;  2</li>
                              <li>Cheescake: &ensp; 5</li>
                              <li>Tiramisú: &ensp; 4</li>
                              <li>Brazo Gitano: &ensp; 1</li>
                              <li>Ópera: &ensp; 3</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div class="row">
              <div class="col s12 m6">
                  <div class="card blue-grey darken-1" id="card">
                      <div class="card-content white-text">
                          <span class="card-title">Cantidad de Sabores Disponibles</span>
                          <div class="card-content">
                            <li>Chocolate; &ensp;2</li>
                            <li>Frutos Rojos: &ensp;5</li>
                            <li>Kiwi: &ensp;9</li>
                            <li>Mango: &ensp;2</li>
                            <li>Almendras: &ensp;10</li>
                            <li>BlueBerries: &ensp;3</li>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          <div class="row">
              <div class="col s12 m6">
                  <div class="card blue-grey darken-1" id="card">
                      <div class="card-content white-text">
                          <span class="card-title">Cantidad de Adornos Disponibles</span>
                          <div class="card-content">
                            <li>Explosisón Frutal &ensp;5</li>
                            <li>Bolas de Nieve &ensp;2</li>
                            <li>Lluvia de Chispas &ensp;9</li>
                            <li>Río de Chocolate &ensp;1</li>
                            <li>Tormenta Glass &ensp;5</li>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tabla">
            <table>
                <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Base</th>
                      <th>Sabores</th>
                      <th>Adornos</th>
                      <th>Descripción</th>
                  </tr>
                </thead>
        
                <tbody>
                  <tr>
                    <td>Alvin Kamara</td>
                    <td>Tiramisú</td>
                    <td>Kiwi, Mango</td>
                    <td>Río de Chocolare, Tormenta Glass</td>
                    <td>Forma de Corazon</td>
                  </tr>
                  <tr>
                    <td>Valentin Brunn</td>
                    <td>Brazo Gitano</td>
                    <td>Frutos Rojos</td>
                    <td>Explosisón Frutal, Bolas de Nieve</td>
                    <td>Mensaje: Feliz Aniversario</td>
                  </tr>
                  <tr>
                    <td>Isaac Alarcon</td>
                    <td>Tres Leches</td>
                    <td>BlueBerries, Frutos Rojos</td>
                    <td>Lluvia de Chispas</td>
                    <td>Mascara de Spider-Man</td>
                  </tr>
                  <tr>
                    <td>Ryan Oliphant</td>
                    <td>Ópera</td>
                    <td>Almendras, Chocolate</td>
                    <td>Tormenta Glass</td>
                    <td>Mensaje: Que me besé el cumplañero</td>
                  </tr>
                  <tr>
                    <td>Ezekiel Eliott</td>
                    <td>Cheescake</td>
                    <td>Kiwi, Mango, Frutos Rojos</td>
                    <td>Explosisón Frutal</td>
                    <td>-</td>
                  </tr>
                  
                </tbody>
              </table>        
        </div>
    </div>
</template>

<script>
export default {
  name: 'AdminPage',

}
</script>

<style scoped>  
    #card{
            width: 300px;       
        }
        .cards{
            display: grid;
            gap: 1rem;
            grid-auto-flow: column;
            float: left;
            margin-top: 5%;
            margin-left: 5%;
       }

       .tabla{
           padding-left: 6%;
       }
</style>