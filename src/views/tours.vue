<template>
<div class="sidebar">
      <div class="sidebar-header logo_admin">
        <img src="../Bakka_new_logo/bakka_logo_blue.svg" alt="">
      </div>
      <ul class="sidebar-menu">
            <li @click="goToTours" class="sidebar-menu-item choosed"><a ><img src="../img/icon_airplane.svg" alt=""> Туры</a></li>
            <li @click="goToGuids" class="sidebar-menu-item"><a ><img src="../img/Icon_guids.svg" alt=""> Гиды</a></li>
            <li @click="goToReviews" class="sidebar-menu-item"><a ><img src="../img/icon_review.svg" alt=""> Отзывы</a></li>
            <li @click="goToNews_admin" class="sidebar-menu-item"><a ><img src="../img/icon_news.svg" alt=""> Новости</a></li>
            <li @click="goTofaq" class="sidebar-menu-item"><a ><img src="../img/icon_faq.svg" alt=""> Вопросы и ответы</a></li>
            <li @click="goToRequests" class="sidebar-menu-item"><a ><img src="../img/icon_request.svg" alt=""> Список заявок</a></li>
            <li @click="logout" class="sidebar-menu-item"><a><img src="../img/Icon_logout.svg" alt=""> Выйти</a></li>
          </ul>
    </div>
    <div class="list_reviews">
      <h1>В разработке...</h1>
    </div>
</template>
<script>
import axios from './axios';

export default {
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
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
</style>