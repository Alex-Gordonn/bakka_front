<template>
    <div class="form-container">
      <h3>Login</h3>
      <input class="form-input" v-model="email" type="text" placeholder="Email">
      <h3>Password</h3>
      <input class="form-input" v-model="password" type="password" placeholder="Password">
      <button class="form-button" @click="submitForm">Submit</button>
    </div>
</template>

<script>
//chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials
import {useRouter} from 'vue-router';
import axios from 'axios';

export default {
  setup() {
      const router = useRouter();
      return { router };
    },  
  data() {
return {
        email: '',
        password: '',
      };
    },
    methods: {
      async submitForm() {
        const data = {
          email: this.email,
          password: this.password,
        };
  
        try {
          const response = await axios.post('https://bakka.kz/api/auth/token/', data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (response.data && response.data.access) {
            localStorage.setItem('authToken', response.data.access);
            this.router.push('/admin');
          } else {
            console.error('Токен аутентификации не получен');
            alert('Не правильно!')
          }
        } catch (error) {
          console.error(error.response ? error.response.data : error);
          alert('Не правильно!')
        }
      }
    }
}
</script>

<style scoped>
.form-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #FFB800;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; 
  }
  
  .form-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .form-button:hover {
    background-color: #0056b3;
  }
</style>
