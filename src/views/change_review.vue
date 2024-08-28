<template>
    <div class="sidebar" id="sidebar">
        <router-view/>
          <div class="sidebar-header logo_admin">
            <img src="../Bakka_new_logo/bakka_logo_blue.svg" alt="">
          </div>
          <ul class="sidebar-menu">
            <li @click="" class="sidebar-menu-item"><a >Туры</a></li>
            <li @click="" class="sidebar-menu-item"><a >Гиды</a></li>
            <li @click="goToReviews" class="sidebar-menu-item choosed"><a >Отзывы</a></li>
            <li @click="" class="sidebar-menu-item"><a >Новости</a></li>
            <li @click="" class="sidebar-menu-item"><a >Вопросы и ответы</a></li>
            <li @click="" class="sidebar-menu-item"><a >Список заявок</a></li>
            <li @click="logout" class="sidebar-menu-item"><a>Выйти</a></li>
          </ul>
        </div>

        <div class="list_reviews">
            <div class="row">
            <div class="col text_review">
                <h1>Отзывы</h1>
            </div>
            </div>

            {{ reviews.name }}
      </div>
    </template>
    <script>
    import axios from './axios';
    
    export default {
        data() {
            return {
                reviews:[]
            }
        },
        created() {
            this.fetchReviews()
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
                async fetchReviews() {
                  const reviewId = this.$route.query.id;
            try{
                const response = await axios.get(`https://bakka.kz/api/reviews/${reviewId}/`);
                this.reviews = response.data
              }catch(error) {
                console.error("error")
              }
            },
            formatDate(dateString) {
                const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
                const date = new Date(dateString);
                return date.toLocaleDateString('ru-RU', options);
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
    width: 150px;
    padding: 12px;
    background-color: #116ACC;
  }
    </style>