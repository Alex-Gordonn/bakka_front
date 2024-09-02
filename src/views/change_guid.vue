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
              <li @click="goTofaq" class="sidebar-menu-item"><a ><img src="../img/icon_faq.svg" alt=""> Вопросы и ответы</a></li>
              <li @click="goToRequests" class="sidebar-menu-item"><a ><img src="../img/icon_request.svg" alt=""> Список заявок</a></li>
              <li @click="logout" class="sidebar-menu-item"><a><img src="../img/Icon_logout.svg" alt=""> Выйти</a></li>
            </ul>
    </div>
  
    <div class="list_reviews">
      <div class="row">
        <div class="col text_review">
          <h1>Гид</h1>
        </div>
      </div>
      <div class="add_guid">
        <div class="row">
          <div class="col">
            <label for="name">
              Имя <br />
              <input v-model="guid.name" type="text" name="name" id="name" />
            </label><br>
            <label for="age">
              Возраст <br />
              <input v-model="guid.age" type="number" name="age" id="age" />
            </label><br>
            <label for="role">
              Должность <br />
              <input v-model="guid.role" type="text" name="role" id="role" />
            </label>
            <br />
            <label for="raiting">
              Рэйтинг <br />
              <select class="rating_select" v-model="guid.rating" name="rating" id="rating">
                <option value="1">1 звезда</option>
                <option value="2">2 звезда</option>
                <option value="3">3 звезда</option>
                <option value="4">4 звезда</option>
                <option value="5">5 звезда</option>
              </select>
            </label><br>
            <label for="education">
              Образование <br />
              <select class="education" v-model="guid.education" name="education" id="education">
                <option value="1">Cредняя школа</option>
                <option value="2">Бакалавр</option>
                <option value="3">Магистр</option>
                <option value="4">Докторантура</option>
                <option value="5">Другое</option>
              </select>
            </label><br>
            <label for="language">
              Языки <br />
              <select multiple v-model="guid.language" name="language" id="language">
                <option value="1">Казахский</option>
                <option value="2">Русский</option>
                <option value="3">Английский</option>
              </select>
            </label>
          </div>
          <div class="col file">
            <label for="file">Фото гида<br>
            <input type="file" id="file" @change="handleFileUpload" />
            </label>
          </div>
        </div>
        <button @click="submitGuid">Обновить</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from './axios';
  
  export default {
    data() {
      return {
        guid: {
          name: '',
          age: '',
          role: '',
          education: 1,
          rating: 1,
          language: 0,
          file: null,
        },
      };
    },
    created() {
      // Получаем ID отзыва из параметров маршрута
      const guidId = this.$route.query.id;
      if (guidId) {
        this.loadReview(guidId);
      }
    },
    methods: {
      async loadReview(guidId) {
        try {
          // GET запрос для получения данных отзыва по ID
          const response = await axios.get(`https://bakka.kz/api/guides/${guidId}/`);
          if (response.status === 200) {
            const data = response.data;
            // Заполняем данные формы
            this.guid.id = data.id;
            this.guid.name = data.name;
            this.guid.age = data.age;
            this.guid.role = data.role;
            this.guid.education = data.education;
            this.guid.rating = data.rating;
            this.guid.language = data.language;

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
          this.guid.file = file;
        } else {
          this.guid.file = null;
        }
      },
      async submitGuid() {
        try {
          const formData = new FormData();
          formData.append('name', this.guid.name);
          formData.append('age', this.guid.age);
          formData.append('role', this.guid.role);
          formData.append('education', this.guid.education);
          formData.append('rating', this.guid.rating);
          formData.append('language', this.guid.language);
  
          if (this.guid.file) {
            formData.append('image', this.guid.file); // Используйте 'image' или нужный ключ для файла
          }
  
          // Выполняем PUT запрос для обновления отзыва
          const response = await axios.put(`https://bakka.kz/api/guides/${this.guid.id}/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          if (response.status === 200) {
            alert('Успешно обновлен!');
            this.$router.push({ name: 'guids' });
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
      </style>