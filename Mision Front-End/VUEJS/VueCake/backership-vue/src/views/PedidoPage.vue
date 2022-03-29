<template>
  <div class="pedido">
      <img src="../assets/Bakership.png" class="logo" width="400" height="300">
    <h4 class="title">Hora de Realizar un pedido!</h4>
    <div id="userdata" class="row">
        <form class="col s12">
          <h6>Ingrese sus Datos Generales</h6>
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate">
              <label for="first_name">Nombre</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate">
              <label for="last_name">Apellido</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="telefono" type="number" class="validate">
              <label for="telefono">Télefono</label>
            </div>
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
            <h6>¿Como quiere su pastel?</h6>
            <div class="input-field col s12">
              <input id="description" type="text" class="validate">
              <label for="description">Descripción del pastel</label>
            </div>
          </div>
          <p>Selecciona tu Base</p>
          <div class="basechecker">
              <div class="row1">
                  <p>
                      <label>
                          <input name="group1" type="radio" checked />
                          <span>Tres Leches</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>Fondant</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>Cheescake</span>
                        </label>
                    </p>
                </div>
                <div class="row2">   
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>Tiramisú</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>Brazo Gitano</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>Ópera</span>
                        </label>
                    </p>
                </div>
            </div>
            <br><br><br><br><br><br>
            <p>Selecciona los sabores que deseas en tu cubierta</p>
            <div class="sabrow1">
                <div class="switch">
                    <p>Chocolate</p>
                    <label>
                      No
                      <input type="checkbox">
                      <span class="lever"></span>
                      Sí
                    </label>
                  </div>
                <div class="switch">
                    <p>Frutos Rojos</p>
                    <label>
                      No
                      <input type="checkbox">
                      <span class="lever"></span>
                      Sí
                    </label>
                  </div>
                <div class="switch">
                    <p>Kiwi</p>
                    <label>
                      No
                      <input type="checkbox">
                      <span class="lever"></span>
                      Sí
                    </label>
                  </div>
            </div>
            <div class="sabrow2">
                <div class="switch">
                    <p>Mango</p>
                    <label>
                        No
                        <input type="checkbox">
                        <span class="lever"></span>
                        Sí
                    </label>
                </div>
                <div class="switch">
                    <p>Almendras</p>
                    <label>
                        No
                        <input type="checkbox">
                        <span class="lever"></span>
                        Sí
                    </label>
                </div>
                <div class="switch">
                    <p>BlueBerries</p>
                    <label>
                        No
                        <input type="checkbox">
                        <span class="lever"></span>
                        Sí
                    </label>
                </div>
            </div>
            <br><br><br><br><br><br><br><br><br><br><br>
            <p>Selecciona tus Adornos</p>
            <div class="adornos">    
                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>Explosisón Frutal</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>Bolas de Nieve</span>
                    </label>
                </p>
                <p>
                    <label>
                  <input type="checkbox"/>
                  <span>Lluvia de Chispas</span>
                </label>
              </p>
              <p>
                  <label>
                      <input type="checkbox"/>
                      <span>Río de Chocolate</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>Tormenta de Glass</span>
                    </label>
                </p>
                
            </div>

            <br><br><br><br><br><br><br><br><br><br><br>
            <a class="waves-effect waves-light btn">
                <input type="submit">
            </a>
            <a class="waves-effect waves-light btn">
                <input type="reset">
            </a>
            </form>
        </div>
  </div>
</template>

<script>

export default {
  name: 'PedidoPage',

}
</script>

<style scoped>
  .logo{
            float: right;
        }
        .title{
            padding-left: 2%;
        }
        #userdata{
            padding-top: 2%;
            padding-left: 1%;
            float: left;
            width: 600px;
        }

        .row1, .row2, .sabrow1, .sabrow2{
            padding-right: 10%;
            float: left;
        }

        .adornos{
            float: left;
        }

        .nav-wrapper{
            background-color:darkcyan;
        }
</style>

