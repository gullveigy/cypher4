<template>
  <div class="hero">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/home"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/expenditures"><i class="fa fa-list" style="padding: 5px"> Manage Expenditures</i></b-nav-item>
          <b-nav-item to="/expendi"><i class="fa fa-money" style="padding: 5px"> Record Expenditure</i></b-nav-item>
          <b-nav-item to="/chart"><i class="fa fa-line-chart" style="padding: 5px"> Chart</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

      <img alt="bts logo" src="../assets/final1.png" >

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Online Accounting Web App</i></b>
          <p>Managing money is equivalent to managing everything.</p>
        </td>
      </tr>
    </table>

    <p>
    <a href="#/expenditures" class="btn btn-secondary btn1" role="button">Go for Your Recoding!</a>
    </p>
    <p>
      <a href="#/contact" class="btn btn-secondary btn2" role="button">Contact Us</a>
    </p>
  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
    margin-top:120px;
  }
  td lead {
    margin-top: 35px;
  }
  td p {
    margin-top: 35px;
  }
  img alt {
    margin-top:60px;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>


