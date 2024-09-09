<template>
<!--Nav bar-->
<nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <!--logo-->
            <a class="navbar-brand "  href="#"><img src="../Bakka_new_logo/bakka_logo_gradient.svg" alt="" width="146.65px" height="46.37px"></a>
            <!--logo-->
            <!--Toogle botton-->
            <button class="navbar-toggler shodow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <!--Toogle botton-->
            <!--slide bar-->
            <div class="slidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <!--Slider header-->
              <div class="offcanvas-header text-white border-bottom">
                <a class="navbar-brand fs-20"  href="#"><img src="../img/logo.png" alt="" width="146.65px" height="46.37px"></a>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
            <!--Sidevar body-->
              <div class="offcanvas-body nav_links">
                  <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 ul_nav">
                    <li class="nav-item">
                      <a class="nav-link lng-onas" aria-current="page" href="#info_block">{{ t('onas') }}</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link lng-tourst" href="#tours">{{ t('tourst') }}</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link lng-hadj" href="#tours">{{ t('hadj') }}</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link lng-umra" href="#tours">{{ t('umra') }}</a>
                    </li>
                  </ul>
                  <select class="change-lng" v-model="currentLang" @change="changeLanguage">
                    <option value=kz>Каз</option>
                    <option value=ru>Рус</option>
                  </select>
                    <ul class="navbar-nav justify-content-end sviaz">
                      <li><p class="lng-number_text phone_number_bai">{{ t('number_text') }}</p></li>
                      <li><p><img src="../img/phone_icon.svg" alt="">+7 (707) 059-30-30</p></li>
                    </ul>
                </div>   
            </div>
          </div>
        </nav>
        <!--Nav bar-->
        <div class="main">
            <div class="all_news container">
                <!--Новости-->
        <div class="news">
    <div class="container">
      <div class="row news_tittle">
        <div class="col ">
          <h1>{{ t('news_tittle') }}</h1>
        </div>
      </div>

      <div class="row news_row">
        <div v-for="newsItem in newsList" :key="newsItem.id" class="col-md-6 mb-4">
          <div class="card">
            <img :src="newsItem.image" class="card-img-top news_image" alt="news image">
            <div class="card-body">
              <h5 class="card-title">{{ newsItem.title }}</h5>
              <p class="card-text">{{ truncateText(newsItem.content, 100) }}</p>
              <div class="row">
                <div class="col date_news">
                  <p>{{ formatDate(newsItem.created_at) }}</p>
                </div>
              <div class="col button_read">
                <button @click="read_news(newsItem.id)" class="justify-content-end">{{ t('read_news') }} <img src="../img/read_news.svg" alt=""></button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        <!--Новости end-->
            </div>
        </div>
</template>
<script>
import axios from 'axios';
import { langArr } from './lang.js';

    
export default {
  data() {
    return {
      faqList: [],
      newsList: [],
      reviews: [],
      headingText: 'Часто задаваемые вопросы',
      sectionTitle: 'Вопросы и ответы',
      currentLang: 'kz',
      langArr,
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
        t(key) {
          return this.langArr[key][this.currentLang];
        },
        changeLanguage() {
          window.location.hash = this.currentLang;
          window.location.reload();
        },
        async fetchFaq() {
      try {
        const response = await axios.get('https://bakka.kz/api/faq/');
        this.faqList = response.data.results;
      } catch (error) {
        console.error('Ошибка при загрузке данных FAQ:', error);
      }
    },
    goToNews() {
          this.$router.push({ name: 'news' });
          },
    async fetchNews() {
      try {
        const response = await axios.get('https://bakka.kz/api/news/');
        this.newsList = response.data.results.filter(news => news.is_published);
    } catch (error) {
        console.error('Ошибка при загрузке новостей:', error);
      }
    },
    truncateText(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + '...';
      }
      return text;
    },
    formatDate(dateString) {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', options);
    },
    async fetchReviews() {
      try {
        const response = await axios.get('https://bakka.kz/api/reviews/');
        this.reviews = response.data.results;
      } catch (error) {
        console.error('Ошибка при загрузке отзывов:', error);
      }
    },
    async read_news(newsId) {
        this.$router.push({ name: 'read_news', query: { id: newsId } });
      },
      },

  }
</script>