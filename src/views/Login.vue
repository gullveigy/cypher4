<template>
   <div class="login">
     <img alt="bts logo" src="../assets/final1.png" >
     <h3>Sign In</h3>
     <input type="text" v-model="email" placeholder="Email"><br>
     <input type="password" v-model="password" placeholder="Password"><br>
     <button @click="login">Connection</button>
     <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
   </div>
</template>

<script>
  import firebase from 'firebase';

    export default {
        name: "Login",
      data() {
        return {
          email: '',
          password: ''
        }
      },
      methods: {
        login: function() {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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


<style scoped>  /* "scoped" attribute limit the CSS to this component only */
h3 {
  margin-top: 100px;
  font-size: 30pt;
}
.login {
  margin-top: 0px;
}
input {
  margin: 20px 0;
  margin-top: 35px;
  width: 28%;
  padding: 15px;
}
img alt {
  margin-top: 0px;
}
button {
  margin-top: 20px;
  width: 10%;
  padding: 8px;
  cursor: pointer;
}
p {
  margin-top: 205px;
  font-size: 20px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
