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
