<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
     <div id="app1">
       <v-client-table :columns="columns" :data="expenditures" :options="options">
         <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteExpenditure(props.row._id)"></a>
         <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editExpenditure(props.row._id)"></a>
       </v-client-table>
     </div>
  </div>
</template>

<script>
  import ExpenditureService from '@/services/ExpenditureService'
  import Vue from 'vue'
  import VueTables from 'vue-tables-2'

  Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

  export default {
    name: 'Expenditures',
    data () {
      return {
        messagetitle: ' Expenditures List ',
        expenditures: [],
        props: ['_id'],
        errors: [],
        columns: ['_id', 'payment', 'date', 'type', 'amount', 'edit', 'remove'],
        options: {
          perPage: 10,
          filterable: ['payment', 'date','type'],
          sortable: ['amount','date'],
          headings: {
            _id: 'ID',
            payment: 'Payment',
            amount: 'Amount',
            date: 'Date',
            type: 'Type'
          },
          orderBy: {
            columns: ['amount','date']
          }
        }
      }
    },
    // Fetches Donations when the component is created.
    created () {
      this.loadExpenditures()
    },
    methods: {
      loadExpenditures: function () {
        ExpenditureService.fetchExpenditures()
          .then(response => {
            // JSON responses are automatically parsed.
            this.expenditures = response.data
            console.log(this.expenditures)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      editExpenditure: function (id) {
        this.$router.params = id
        this.$router.push('edit')
      },
      deleteExpenditure: function (id) {
        this.$swal({
          title: 'Are you totaly sure?',
          text: 'You can\'t Undo this action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'OK Delete it',
          cancelButtonText: 'Cancel',
          showCloseButton: true
          // showLoaderOnConfirm: true
        }).then((result) => {
          console.log('SWAL Result : ' + result.value)
          if (result.value === true) {
            ExpenditureService.deleteExpenditure(id)
              .then(response => {
                // JSON responses are automatically parsed.
                this.message = response.data
                console.log(this.message)
                this.loadExpenditures()
                // Vue.nextTick(() => this.$refs.vuetable.refresh())
                this.$swal('Deleted', 'You successfully deleted this Expenditure record ' + JSON.stringify(response.data, null, 5), 'success')
              })
              .catch(error => {
                this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
                this.errors.push(error)
                console.log(error)
              })
          } else {
            console.log('SWAL Else Result : ' + result.value)
            this.$swal('Cancelled', 'Return to Your Expenditure Records', 'info')
          }
        })
      }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .vue-message {
    text-align: left;
    font-size: 17px;
    margin-left: 30px;
  }
  /*.st-sort-ascent:before{*/
  /*content: '\25B2';*/
  /*}*/
  /*.st-sort-descent:before{*/
  /*content: '\25BC';*/
  /*}*/
  /*th:nth-child(0) {*/
  /*text-align: left;*/
  /*}*/
</style>
