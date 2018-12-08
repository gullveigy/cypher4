<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Accounting Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/expenditures"><i class="fa fa-list" style="padding: 5px"> Manage Expenditures</i></b-nav-item>
          <b-nav-item to="/expendi"><i class="fa fa-money" style="padding: 5px"> Record Expenditure</i></b-nav-item>
          <b-nav-item to="/chart"><i class="fa fa-globe" style="padding: 5px"> Chart</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- routes will be rendered here -->

    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: 	#FFF0F5;
    margin-top: 0px;
    background:  url("./assets/loveyourselftear.jpg") repeat center top fixed;
  }
  button
  {
    margin:5px;
  }
  .b-nav-item {
    color: white;
    font-size: 30px;
  }
  .VueTables__child-row-toggler {
    width: 16px;
    height: 16px;
    line-height: 16px;
    display: block;
    margin: auto;
    text-align: center;
  }

  .VueTables__child-row-toggler--closed::before {
    content: "+";
  }

  .VueTables__child-row-toggler--open::before {
    content: "-";
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
