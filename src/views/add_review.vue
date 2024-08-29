<template>
    <div class="sidebar" id="sidebar">
      <router-view />
      <div class="sidebar-header logo_admin">
        <img src="../Bakka_new_logo/bakka_logo_blue.svg" alt="" />
      </div>
      <ul class="sidebar-menu">
            <li @click="goToTours" class="sidebar-menu-item"><a ><img src="../img/icon_airplane.svg" alt=""> Туры</a></li>
            <li @click="goToGuids" class="sidebar-menu-item"><a ><img src="../img/Icon_guids.svg" alt=""> Гиды</a></li>
            <li @click="goToReviews" class="sidebar-menu-item choosed"><a ><img src="../img/icon_review.svg" alt=""> Отзывы</a></li>
            <li @click="goToNews_admin" class="sidebar-menu-item"><a ><img src="../img/icon_news.svg" alt=""> Новости</a></li>
            <li @click="goToQa" class="sidebar-menu-item"><a ><img src="../img/icon_qa.svg" alt=""> Вопросы и ответы</a></li>
            <li @click="goToRequests" class="sidebar-menu-item"><a ><img src="../img/icon_request.svg" alt=""> Список заявок</a></li>
            <li @click="logout" class="sidebar-menu-item"><a><img src="../img/Icon_logout.svg" alt=""> Выйти</a></li>
          </ul>
    </div>
  
    <div class="list_reviews">
      <div class="row">
        <div class="col text_review">
          <h1>Отзывы</h1>
        </div>
      </div>
      <div class="add_review">
        <div class="row">
          <div class="col">
            <label for="name">
              Имя <br />
              <input v-model="review.name" type="text" name="name" id="name" />
            </label>
            <br />
            <label for="rating">
              Рэйтинг <br />
              <select v-model="review.rating" name="rating" id="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
          <div class="col file">
            <label for="file">Фото человека <br>
            <input type="file" id="file" @change="handleFileUpload" />
            </label>
          </div>
        </div>
        <div class="content">
          <label for="content">
            Комментарий <br />
            <textarea v-model="review.content" name="content" id="content"></textarea>
          </label>
        </div>
        <button @click="submitReview">Отправить отзыв</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from './axios';
  
  export default {
    data() {
      return {
        review: {
          name: '',
          rating: 1,
          content: '',
          file: null,
        },
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.review.file = file;
        } else {
          this.review.file = null; // Убедитесь, что файл правильно обрабатывается
        }
      },
      async submitReview() {
        try {
          const formData = new FormData();
          formData.append('name', this.review.name);
          formData.append('rating', this.review.rating);
          formData.append('content', this.review.content);
  
          if (this.review.file) {
            formData.append('image', this.review.file); // Используйте 'image' или нужный ключ для файла
          }
  
          const response = await axios.post('https://bakka.kz/api/reviews/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          if (response.status === 201) {
            alert('Отзыв успешно отправлен!');
            this.clearForm();
          } else {
            alert('Произошла ошибка при отправке отзыва.');
          }
        } catch (error) {
          console.error('Ошибка при отправке отзыва:', error);
          alert('Ошибка при отправке. Попробуйте еще раз.');
        }
      },
      clearForm() {
        this.review.name = '';
        this.review.rating = 1;
        this.review.content = '';
        this.review.file = null;
        document.querySelector('input[type="file"]').value = null;
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
                async goToQa() {
                    this.$router.push({ name: 'qa'});
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
  .add_review {
    text-align: right;
    margin-right: 20px;
  }
  .add_review button {
    width: 200px;
    padding: 12px;
    background-color: #116ACC;
  }
  .add_review .col {
    text-align: left;
  }
  .add_review {
    margin-top: 30px;
    background-color: #F6F8FA;
    padding: 25px;
    border-radius: 5px;
  }
  .add_review label {
    margin-top: 10px;
  }
  .add_review select {
    width: 50px;
  }
  .add_review input {
    border-radius: 5px;
  }
  .add_review select {
    border-radius: 5px;
  }
  .file {
  }
  .content {
    text-align: left;
    margin-top: 20px;
  }
  .content textarea {
    width: 500px;
    height: 100px;
    border-radius: 5px;
  }
    </style>