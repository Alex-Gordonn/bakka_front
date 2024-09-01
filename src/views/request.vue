<template>
    <div class="sidebar" id="sidebar">
      <router-view />
      <div class="sidebar-header logo_admin">
        <img src="../Bakka_new_logo/bakka_logo_blue.svg" alt="" />
      </div>
      <ul class="sidebar-menu">
              <li @click="goToTours" class="sidebar-menu-item"><a ><img src="../img/icon_airplane.svg" alt=""> Туры</a></li>
              <li @click="goToGuids" class="sidebar-menu-item"><a ><img src="../img/Icon_guids.svg" alt=""> Гиды</a></li>
              <li @click="goToReviews" class="sidebar-menu-item"><a ><img src="../img/icon_review.svg" alt=""> Отзывы</a></li>
              <li @click="goToNews_admin" class="sidebar-menu-item"><a ><img src="../img/icon_news.svg" alt=""> Новости</a></li>
              <li @click="goTofaq" class="sidebar-menu-item"><a ><img src="../img/icon_faq.svg" alt=""> Вопросы и ответы</a></li>
              <li @click="goToRequests" class="sidebar-menu-item choosed"><a ><img src="../img/icon_request.svg" alt=""> Список заявок</a></li>
              <li @click="logout" class="sidebar-menu-item"><a><img src="../img/Icon_logout.svg" alt=""> Выйти</a></li>
            </ul>
    </div>
  
    <div class="list_reviews">
      <div class="row">
        <div class="col text_review">
          <h1>Заявка</h1>
        </div>
      </div>
      <div class="add_news">
        <div class="row">
          <div class="col">
            <h3>Имя: {{ requests.name }}</h3>
            <h3>Номер телефон: {{ requests.phone_number }}</h3>
            <label for="rating" class="status">
              <h3>Статус</h3>
              <select v-model="requests.status" name="status" id="status">
                <option value="2">Звонил</option>
                <option value="3">Не доступен</option>
              </select>
            </label>
          </div>
        </div>
        <button @click="submitRequest">Обновить</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from './axios';
  
  export default {
    data() {
      return {
        requests: {
          id: '',  
          name: '',
          phone_number: '',
          status: 2
        },
      };
    },
    created() {
      // Получаем ID отзыва из параметров маршрута
      const requestId = this.$route.query.id;
      if (requestId) {
        this.loadReview(requestId);
      }
    },
    methods: {
      async loadReview(requestId) {
        try {
          // GET запрос для получения данных отзыва по ID
          const response = await axios.get(`https://bakka.kz/api/contact-request/${requestId}/`);
          if (response.status === 200) {
            const data = response.data;
            this.requests.id = data.id;
            this.requests.name = data.name;
            this.requests.phone_number = data.phone_number;
            this.requests.status = data.status;
          }
        } catch (error) {
          console.error('Ошибка при загрузке:', error);
          alert('Не удалось загрузить данные.');
        }
      },
      async submitRequest() {
        try {
          const formData = new FormData();
          formData.append('status', this.requests.status);
          formData.append('name', this.requests.name);
          formData.append('phone_number', this.requests.phone_number);

  
          // Выполняем PUT запрос для обновления отзыва
          const response = await axios.put(`https://bakka.kz/api/contact-request/${this.requests.id}/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          if (response.status === 200) {
            alert('Успешно обновлен!');
            this.$router.push({ name: 'requests' });
          } else {
            alert('Произошла ошибка при обновлении.');
          }
        } catch (error) {
          console.error('Ошибка при обновлении:', error);
          alert('Ошибка при отправке. Попробуйте еще раз.');
        }
      },
      logout() {
        this.$root.logout();
        localStorage.removeItem('authToken');
        this.$router.push('/');
      },
      async goToReviews() {
                  this.$router.push({ name: 'reviews' });
                  },
                  async goToRequests() {
                      this.$router.push({ name: 'requests'});
                  },
                  async goToGuids() {
                      this.$router.push({ name: 'guids'});
                  },
                  async goToNews_admin() {
                      this.$router.push({ name: 'news_admin'});
                  },
                  async goTofaq() {
                      this.$router.push({ name: 'faq'});
                  },
                  async goToTours() {
                      this.$router.push({ name: 'tours'});
                  },
      
    },
  };
  </script>
  
  
    
    
      <style>
      .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100%;
            background-color: #F6F8FA;
            color: #fff; 
            padding-top: 50px; 
            border-right: 1px solid #D9DDE7;
          }
          
          .sidebar-header {
            padding: 20px;
            text-align: center;
          }
          
          .sidebar-menu {
            list-style: none;
            padding: 0;
            margin: 0;
            color: black;
          }
          .sidebar-menu img {
            width: 20px;
          }
          .sidebar-menu-item {
            padding: 10px 20px;
            font-size: 18px;
          }
          
          .sidebar-menu-item a{
              color: white;
              text-decoration: none;
          }
          
          .sidebar-menu-item:hover {
            background-color: #dbe2e9;
          }
          
          .choosed {
              background-color: #fff;
              border-top: 1px solid #D9DDE7;
              border-bottom: 1px solid #D9DDE7;
          }
          .choosed:hover {
              background-color: #fff;
          }
          .logo_admin img{
              width: 150px;
          }
          .list_reviews {
        margin-left: 260px;
      }
    
      table {
      border-collapse: collapse;
      width: 100%;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-top: 20px;
    }
    
    td, th {
      border: 1px solid #dee2e6;
      text-align: left;
      padding: 12px;
    }
    
    th {
      background-color: #f8f9fa;
      color: #343a40;
    }
    
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    .list_reviews img {
      width: 80px;
      border-radius: 15px;
    }
    .list_reviews button {
      padding: 7px;
      width: 100px;
      margin-top: 5px;
      border-radius: 5px;
      color: white;
      border: none;
    }
    .delete_button {
      background-color: #D84949;
    }
    .change_button {
      background-color: #116ACC;
    }
    .add_news {
      text-align: right;
      margin-right: 20px;
    }
    .add_news button {
      width: 200px;
      padding: 12px;
      background-color: #116ACC;
    }
    .add_news .col {
      text-align: left;
    }
    .add_news {
      margin-top: 30px;
      background-color: #F6F8FA;
      padding: 25px;
      border-radius: 5px;
    }
    .add_news label {
      margin-top: 10px;
    }
    .add_news select {
      width: 50px;
    }
    .add_news input {
      border-radius: 5px;
      width: 500px;
    }
    .add_news select {
      border-radius: 5px;
    }
    .content {
      text-align: left;
      margin-top: 20px;
    }
    .content textarea {
      width: 800px;
      height: 150px;
      border-radius: 5px;
    }
    .status select {
        width: 120px;
    }
      </style>