<template>
    <div class="sidebar" id="sidebar">
        <router-view/>
          <div class="sidebar-header logo_admin">
            <img src="../Bakka_new_logo/bakka_logo_blue.svg" alt="">
          </div>
          <ul class="sidebar-menu">
            <li @click="goToTours" class="sidebar-menu-item"><a ><img src="../img/icon_airplane.svg" alt=""> Туры</a></li>
            <li @click="goToGuids" class="sidebar-menu-item"><a ><img src="../img/Icon_guids.svg" alt=""> Гиды</a></li>
            <li @click="goToReviews" class="sidebar-menu-item"><a ><img src="../img/icon_review.svg" alt=""> Отзывы</a></li>
            <li @click="goToNews_admin" class="sidebar-menu-item"><a ><img src="../img/icon_news.svg" alt=""> Новости</a></li>
            <li @click="goTofaq" class="sidebar-menu-item choosed"><a ><img src="../img/icon_faq.svg" alt=""> Вопросы и ответы</a></li>
            <li @click="goToRequests" class="sidebar-menu-item"><a ><img src="../img/icon_request.svg" alt=""> Список заявок</a></li>
            <li @click="logout" class="sidebar-menu-item"><a><img src="../img/Icon_logout.svg" alt=""> Выйти</a></li>
          </ul>
        </div>

        <div class="list_reviews">
            <div class="row">
            <div class="col text_review">
                <h1>Вопросы и ответы</h1>
            </div>
            <div class=" col add_review_button">
                <button @click="addFaq()" class="justify-content-end">Добавить</button>
            </div>
            </div>
        <table>
          <thead>
            <tr>
              <th>Вопрос</th>
              <th>Ответ</th>
              <th>Дата публикации</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="faq in faqs" :key="faq.id">
              <td>{{ faq.question }}</td>
              <td>{{ faq.answer }}</td>
              <td>{{ formatDate(faq.created_at) }}</td>
              <td><button @click="changeFaq(faq.id)" class="change_button">Изменить</button> 
                  <button @click="deleteFaq(faq.id)" class="delete_button">Удалить</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <script>
    import axios from './axios';
    
    export default {
        data() {
            return {
                faqs:[]
            }
        },
        created() {
            this.fetchFaq()
        },
        methods: {
            logout() {
                  this.$root.logout();
                  localStorage.removeItem('authToken');
                  this.$router.push('/');
                },
                goToReviews() {
                this.$router.push({ name: 'reviews' });
                },
                async changeFaq(faqId) {
                    this.$router.push({ name: 'change_faq', query: { id: faqId } });
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
                async addFaq() {
                  this.$router.push({ name: 'add_faq'});
                },
                async fetchFaq() {
            try{
                const response = await axios.get('https://bakka.kz/api/faq/');
                this.faqs = response.data.results
              }catch(error) {
                console.error("error")
              }
            },
            formatDate(dateString) {
                const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
                const date = new Date(dateString);
                return date.toLocaleDateString('ru-RU', options);
            },
            async deleteFaq(faqId){
              if(confirm("Вы уверены что хотите удалить?")) {
                try{
                  await axios.delete(`https://bakka.kz/api/faq/${faqId}/`);
                  this.faqs = this.faqs.filter(faq => faq.id != faqId);
                  alert('Удалено!')
                }catch(error) {
                  alert('Ошибка')
                }
              }
            },
        }
    }
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
          cursor: pointer;
        }
        
        .sidebar-menu-item a{
            color: white;
            text-decoration: none;
            cursor: pointer;
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
  .add_review_button {
    text-align: right;
    margin-right: 20px;
  }
  .add_review_button button {
    width: 150px;
    padding: 12px;
    background-color: #116ACC;
  }
    </style>