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
            <li @click="goTofaq" class="sidebar-menu-item"><a ><img src="../img/icon_faq.svg" alt=""> Вопросы и ответы</a></li>
            <li @click="goToRequests" class="sidebar-menu-item choosed"><a ><img src="../img/icon_request.svg" alt=""> Список заявок</a></li>
            <li @click="logout" class="sidebar-menu-item"><a><img src="../img/Icon_logout.svg" alt=""> Выйти</a></li>
          </ul>
        </div>

        <div class="list_reviews">
            <div class="row">
            <div class="col text_review">
                <h1>Список заявок</h1>
            </div>
            </div>
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Номер</th>
              <th>Дата заявки</th>
              <th>Статус</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in requests" :key="request.id">
              <td>{{ request.name }}</td>
              <td>{{ request.phone_number }}</td>
              <td>{{ formatDate(request.created_at) }}</td>
              <td>
                <span :class="getStatusClass(request.status)">
                  {{ getStatusText(request.status) }}
                </span>
              </td>             
              <td><button @click="openRequest(request.id)" class="change_button">Открыть</button> <br>
                  <button @click="deleteRequest(request.id)" class="delete_button">Удалить</button></td>
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
                requests:[]
            }
        },
        created() {
            this.fetchRequests()
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
                async openRequest(requestId) {
                    this.$router.push({ name: 'request', query: { id: requestId } });
                },
                async addReview() {
                    this.$router.push({ name: 'add_review'});
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
                async fetchRequests() {
            try{
                const response = await axios.get('https://bakka.kz/api/contact-request/');
                this.requests = response.data.results
              }catch(error) {
                console.error("error")
              }
            },
            formatDate(dateString) {
                const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
                const date = new Date(dateString);
                return date.toLocaleDateString('ru-RU', options);
            },
            async deleteRequest(requestId){
              if(confirm("Вы уверены что хотите удалить?")) {
                try{
                  await axios.delete(`https://bakka.kz/api/contact-request/${requestId}/`);
                  this.requests = this.requests.filter(request => request.id != requestId);
                  alert('Удалено!')
                }catch(error) {
                  alert('Ошибка')
                }
              }
            },
            getStatusText(status) {
              switch (status) {
                case 1:
                  return 'Новая заявка';
                case 2:
                  return 'Не доступен';
                case 3:
                  return 'Завершено';
                default:
                  return 'Неизвестный статус';
              }
            },
            getStatusClass(status) {
              switch (status) {
                case 1:
                  return 'status-new';
                case 2:
                  return 'status-unavailable';
                case 3:
                  return 'status-completed';
                default:
                  return '';
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
  .status-new {
  background-color: green;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

.status-unavailable {
  background-color: #D84949;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

.status-completed {
  background-color: #116ACC;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

    </style>