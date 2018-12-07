<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Select Payment Type</label>
      <select id="payment" name="payment" class="form-control" type="text" v-model="payment">
        <option value="null" selected disabled hidden>Choose Payment Type</option>
        <option value="Alipay">Alipay</option>
        <option value="Cash">Cash</option>
        <option value="Wechat">Wechat</option>
        <option value="Others">Others</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Select Expenditure Type</label>
      <select id="type" name="type" class="form-control" type="text" v-model="type">
        <option value="null" selected disabled hidden>Choose Expenditure Type</option>
        <option value="Repast">Repast</option>
        <option value="Shopping">Shopping</option>
        <option value="Daily Expenses">Daily Expenses</option>
        <option value="Traffic">Traffic</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Communication">Communication</option>
        <option value="Medical">Medical</option>
        <option value="Others">Others</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.amount.$error }">
      <label class="form-control-label" name="amount">Amount (Enter a number)</label>
      <input class="form__input" type="decimal" v-model.trim="amount"/>
    </div>
    <div class="error" v-if="!$v.amount.required">Amount is Required</div>
    <div class="form-group" :class="{ 'form-group--error': $v.date.$error }">
      <label class="form-control-label" name="date">Date (Select a Date)</label>
      <input class="form__input" type="date" v-model.trim="date"/>
    </div>
    <div class="error" v-if="!$v.date.required">Date is Required</div>
    <p>
      <button class="btn btn-secondary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ expenditureBtnTitle }}</button>
      <a href="#/expenditures" class="btn btn-secondary btn2" role="button">Return to Manage</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Record!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Recording...</p>
  </form>
</template>

<script>
  import Vue from 'vue'
  import VueForm from 'vueform'
  import Vuelidate from 'vuelidate'
  import { required, minLength, between } from 'vuelidate/lib/validators'

  Vue.use(VueForm, {
    inputClasses: {
      valid: 'form-control-success',
      invalid: 'form-control-danger'
    }
  })

  Vue.use(Vuelidate)

  export default {
    name: 'FormData',
    props: ['expenditureBtnTitle', 'expenditure'],
    data () {
      return {
        messagetitle: ' Record Your Expenditure Here ',
        payment: this.expenditure.payment,
        type: this.expenditure.type,
        amount: this.expenditure.amount,
        date: this.expenditure.date,
        submitStatus: null
      }
    },
    validations: {
      amount: {
        required,
        //between: between(1, 1000)
      },
      date: {
        required,
        //between: between(1, 1000)
      }
    },
    methods: {
      submit () {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
            var expenditure = {
              payment: this.payment,
              type: this.type,
              amount: this.amount,
              date: this.date
            }
            this.expenditure = expenditure
            console.log('Submitting in ExpenditureForm : ' + JSON.stringify(this.expenditure, null, 5))
            this.$emit('expenditure-is-created-updated', this.expenditure)
          }, 500)
        }
      }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .expendi-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 450px;
    font-size: 15pt;
    margin-top: 5px;
  }
  .btn1 {
    margin-right: 20px;
    margin-top: 26px;
  }
  .btn2 {
    margin-left: 20px;
    margin-top: 26px;
  }
  p {
    margin-top: 10px;
    padding: 15px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>

