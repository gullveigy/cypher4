<template>
  <div id="app1" class="hero">
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
        expenditure: {email: '1804094746@qq.com', payment: 'Alipay',  type: 'Shopping',  amount: '', date: ''},
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
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
