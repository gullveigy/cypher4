<template>
  <div id="app1" class="hero">
     <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
     <div class="container mt-3 mt-sm-5">
       <div class="row justify-content-center">
         <div class="col-md-6">
           <template v-if="childDataLoaded">
           <expenditure-form :expenditure="expenditure" expenditureBtnTitle="Update Expenditure" @expenditure-is-created-updated="updateExpenditure"></expenditure-form>
           </template>
         </div><!-- /col -->
       </div><!-- /row -->
     </div><!-- /container -->
  </div>
</template>

<script>
  import ExpenditureService from '@/services/expenditureservice'
  import ExpenditureForm from '@/components/ExpenditureForm'

  export default {
    data () {
      return {
        expenditure: {},
        childDataLoaded: false,
        temp: {},
        messagetitle: ' Update Expenditure Record '
      }
    },
    components: {
      'expenditure-form': ExpenditureForm
    },
    created () {
      this.getExpenditure()
    },
    methods: {
      getExpenditure: function () {
        ExpenditureService.fetchExpenditure(this.$router.params)
          .then(response => {
            this.temp = response.data
            this.expenditure = this.temp[0]
            this.childDataLoaded = true
            console.log('Getting Expenditure in Edit: ' + JSON.stringify(this.expenditure, null, 5))
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      updateExpenditure: function (expenditure) {
        console.log('Before PUT ' + JSON.stringify(expenditure, null, 5))
        ExpenditureService.putExpenditure(this.$router.params, expenditure)
          .then(response => {
            console.log(response)
            console.log('AFTER PUT ' + JSON.stringify(expenditure, null, 5))
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
