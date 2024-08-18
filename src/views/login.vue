<template>
    <body>
    <div class="form-container">
      <h3>Почта</h3>
      <input class="form-input" v-model="email" type="text" placeholder="Email">
      <h3>Пароль</h3>
      <input class="form-input" v-model="password" type="password" placeholder="Password">
      <button class="form-button" @click="submitForm">Войти</button>
    </div>
    </body>
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
body {
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}
.form-container {
    background-color: #22303A;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-container h3 {
    color: #D1B06B;
    font-size: 1.2em;
    margin-bottom: 10px;
    text-align: left;
}

.form-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    background-color: #3A688A;
    color: #fff;
    font-size: 1em;
}

.form-input::placeholder {
    color: #D1B06B;
}

.form-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #D1B06B;
    color: #22303A;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.form-button:hover {
    background-color: #b59353;
}

</style>
