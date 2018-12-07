<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
  import firebase from 'firebase';

    export default {
        name: "SignUp",
      data() {
        return {
          email: '',
          password: ''
        }
      },
      methods: {
        signUp: function() {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              this.$router.replace('home')
            },
            (err) => {
              alert('Oops. ' + err.message)
            }
          );
        }
      }
    }
</script>

<style scoped>
  .sign-up {
    margin-top: 0px;
  }
  input {
    margin: 20px 0;
    margin-top: 35px;
    width: 28%;
    padding: 15px;
  }

  button {
    margin-top: 20px;
    width: 10%;
    padding: 8px;
    cursor: pointer;
  }
  p {
    font-size: 28pt;
    margin-top:130px;
  }
  span {
    display: block;
    margin-top: 160px;
    font-size: 20px;
  }
</style>
