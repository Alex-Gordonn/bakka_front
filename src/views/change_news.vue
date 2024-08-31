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
              <li @click="goToNews_admin" class="sidebar-menu-item choosed"><a ><img src="../img/icon_news.svg" alt=""> Новости</a></li>
              <li @click="goToQa" class="sidebar-menu-item"><a ><img src="../img/icon_qa.svg" alt=""> Вопросы и ответы</a></li>
              <li @click="goToRequests" class="sidebar-menu-item"><a ><img src="../img/icon_request.svg" alt=""> Список заявок</a></li>
              <li @click="logout" class="sidebar-menu-item"><a><img src="../img/Icon_logout.svg" alt=""> Выйти</a></li>
            </ul>
    </div>
  
    <div class="list_reviews">
      <div class="row">
        <div class="col text_review">
          <h1>Новости</h1>
        </div>
      </div>
      <div class="add_news">
        <div class="row">
          <div class="col">
            <label for="name">
              Название <br />
              <input v-model="news.title" type="text" name="title" id="title" />
            </label>
            <br />
            <label for="rating">
              Добавить также в ленте? <br />
              <select v-model="news.is_published" name="is_published" id="is_published">
                <option value="true">Да</option>
                <option value="false">Нет</option>
              </select>
            </label>
          </div>
          <div class="col file">
            <label for="file">Фото новости<br>
            <input type="file" id="file" @change="handleFileUpload" />
            </label>
          </div>
        </div>
        <div class="content">
          <label for="content">
            Новость <br />
            <textarea v-model="news.content" name="content" id="content"></textarea>
          </label>
        </div>
        <button @click="submitNews">Обновить новость</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from './axios';
  
  export default {
    data() {
      return {
        news: {
          id: null,
          title: '',
          is_published: true,
          content: '',
          file: null,
        },
      };
    },
    created() {
      // Получаем ID отзыва из параметров маршрута
      const newsId = this.$route.query.id;
      if (newsId) {
        this.loadReview(newsId);
      }
    },
    methods: {
      async loadReview(newsId) {
        try {
          // GET запрос для получения данных отзыва по ID
          const response = await axios.get(`https://bakka.kz/api/news/${newsId}/`);
          if (response.status === 200) {
            const data = response.data;
            // Заполняем данные формы
            this.news.id = data.id;
            this.news.title = data.title;
            this.news.is_published = data.is_published;
            this.news.content = data.content;
            // Примечание: Файл изображения не загружается напрямую в input type="file", но его можно показать, если нужно.
          }
        } catch (error) {
          console.error('Ошибка при загрузке новости:', error);
          alert('Не удалось загрузить данные новости.');
        }
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.news.file = file;
        } else {
          this.news.file = null;
        }
      },
      async submitNews() {
        try {
          const formData = new FormData();
          formData.append('title', this.news.title);
          formData.append('is_published', this.news.is_published);
          formData.append('content', this.news.content);
  
          if (this.news.file) {
            formData.append('image', this.news.file); // Используйте 'image' или нужный ключ для файла
          }
  
          // Выполняем PUT запрос для обновления отзыва
          const response = await axios.put(`https://bakka.kz/api/news/${this.news.id}/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          if (response.status === 200) {
            alert('Новость успешно обновлен!');
            this.$router.push({ name: 'news_admin' });
          } else {
            alert('Произошла ошибка при обновлении новости.');
          }
        } catch (error) {
          console.error('Ошибка при обновлении новости:', error);
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
      </style>