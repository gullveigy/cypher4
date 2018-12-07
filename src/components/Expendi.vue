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
     <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
     <div class="container mt-3 mt-sm-5">
       <div class="row justify-content-center">
         <div class="col-md-6">
           <expenditure-form :expenditure="expenditure" expenditureBtnTitle="Record Expenditure" @expenditure-is-created-updated="submitExpenditure"></expenditure-form>
         </div><!-- /col -->
       </div><!-- /row -->
     </div><!-- /container -->
  </div>
</template>

<script>
  import ExpenditureService from '@/services/ExpenditureService'
  import ExpenditureForm from '@/components/ExpenditureForm'

  export default {
    data () {
      return {
        expenditure: {payment: 'Alipay',  type: 'Shopping',  amount: 0.0, date: ''},
        messagetitle: ' Record Expenditure '
      }
    },
    components: {
      'expenditure-form': ExpenditureForm
    },
    methods: {
      submitExpenditure: function (expenditure) {
        ExpenditureService.postExpenditure(expenditure)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .hero {
    height: 100vh;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
