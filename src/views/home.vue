<template>
    <body>
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
        <!--Main block-->
        <div class="main">
        <div data-wow-duration:30s class="main_block wow animate__animated animate__fadeIn">
          <div class="container"> 
            <img src="../Bakka_new_logo/bakka_logo_white.svg" alt="" class="logo2">
            <h1>{{ t('mekkaandmedina') }}</h1>
            <h5>{{ t('bakkatravel') }}</h5>
            <button onclick="window.location.href = '#tours'">{{ t('choose_tour') }}</button>
          </div>
        </div>
        <div class="second_main_block">
          <div class="container">
            <div class="row">
              <div class="col wow animate__animated animate__fadeInLeft" id="main_image"><img src="../img/main_image1.png" alt=""></div>
              <div class="col wow animate__animated animate__fadeInUp" id="main_image"><img src="../img/main_image2.png" alt=""></div>
              <div class="col wow animate__animated animate__fadeInRight" id="main_image"><img src="../img/main_image3.png" alt=""></div>
            </div>
          </div>
        </div>
        <!--Main block end-->
        <!--Info block-->
        <div class="info_block">
        <div class="container" id="info_block">        
          <!--indo block 1-->
        <div class="info_block_comp">
          <img src="../Bakka_new_logo/bakka_logo_gold.svg" alt="">
          <p class="lng-options">{{t('options')  }}</p>
        </div>
        </div>
        </div>
    
          <!--indo block 1-->
            
            <!--info block 2
          <div class="info_block2">
            <div class="container">
              <div class="row">
                <div class="col col_img col-6 wow animate__animated animate__fadeInLeftBig">
                  <img src="img/Vertikal_logo.svg" alt="">
                </div>
                <div class="col wow animate__animated animate__fadeInRightBig col_option col-6">
                  <h2>BAKKA TRAVEL</h2>
                  <p class="lng-options"></p>
                </div>
              </div>
            </div>
          </div>-->
        <!--info block 2 end-->
            <div class="second_part">
              <div class="container">
                <h3 class="wow animate__animated animate__fadeInRightBig lng-our_advantages">{{ t('our_advantages') }}</h3>
                <div class="row">
                  <div class="col1 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/Icon1.svg" alt="">
                    <h6 class="lng-first_block_h6">{{ t('first_block_h6') }}</h6>
                    <p class="lng-first_block_p">{{ t('first_block_p') }}</p>
                  </div>
                  <div class="col1 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/Icon2.svg" alt="">
                    <h6 class="lng-second_block_h6">{{ t('second_block_h6') }}</h6>
                    <p class="lng-second_block_p">{{ t('second_block_p') }}</p>
                  </div>
                  <div class="col1 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/Icon3.svg" alt="">
                    <h6 class="lng-third_block_h6">{{ t('third_block_h6') }}</h6>
                    <p class="lng-third_block_p">{{ t('third_block_p') }}</p></div>
                  <div class="col1 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/Icon4.svg" alt="">
                    <h6 class="lng-fourth_block_h6">{{ t('fourth_block_h6') }}</h6>
                    <p class="lng-fourth_block_p">{{ t('fourth_block_p') }}</p></div>
                </div>
                    <div class="row">
                  <div class="col1 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/Icon5.svg" alt="">
                    <h6 class="lng-fifth_block_h6">{{ t('fifth_block_h6') }}</h6>
                    <p class="lng-fifth_block_p">{{ t('fifth_block_p') }}</p></div>
                  <div class="col1 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/Icon6.svg" alt="">
                    <h6 class="lng-sixth_block_h6">{{ t('sixth_block_h6') }}</h6>
                    <p class="lng-sixth_block_p">{{ t('sixth_block_p') }}</p></div>
                  <div class="col1 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/Icon7.svg" alt="">
                    <h6 class="lng-seventh_block_h6">{{ t('seventh_block_h6') }}</h6>
                    <p class="lng-seventh_block_p">{{ t('seventh_block_p') }}</p></div>
                  <div class="col1 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/Icon8.svg" alt="">
                    <h6 class="lng-eighth_block_h6">{{ t('eighth_block_h6') }}</h6>
                    <p class="lng-eighth_block_p">{{ t('eighth_block_p') }}</p></div>
                    </div>
              </div>
            </div>
        <!--Info block end-->
    
        
    
        <!--Our tours-->
        <div class="our_tours">
          <div class="container">
            <h3 class="wow animate__animated animate__fadeInLeft lng-our_tours_text">{{ t('our_tours_text') }}</h3>
              <div class="blocks">
                <div class="row">
                  <div class="col-6 left_part">
                      <div class="row">
                        <div class="col-6 wow animate__animated animate__zoomIn" id="min_block1">
                          <img class="icon_info" src="../img/umra_icon.png" alt="">
                          <h6 class="lng-umra_text">{{ t('umra_text') }}</h6>
                          <p class="lng-umra_options">{{ t('umra_options') }}</p>
                          <button class=" lng-details1" data-bs-toggle="modal" data-bs-target="#exampleModal">{{ t('details1') }}</button>
                        </div>
                        <div class="col-6 wow animate__animated animate__zoomIn" id="min_block2">
                          <img class="icon_info" src="../img/Kaaba.png" alt="">
                          <h6 class="lng-hadj_text">{{ t('hadj_text') }}</h6>
                          <p class="lng-hadj_options">{{ t('hadj_options') }}</p>
                          <button class="lng-details2" data-bs-toggle="modal" data-bs-target="#exampleModal">{{ t('details2') }}</button>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 wow animate__animated animate__zoomIn" id="min_blocks_12">
                          <img class="icon_info" src="../img/Fire.png" alt="">
                          <h6 class="lng-hot_tours">{{ t('hot_tours') }}</h6>
                          <p class="lng-hot_tours_options">{{ t('hot_tours_options') }}</p>
                          <button class="lng-details3" data-bs-toggle="modal" data-bs-target="#exampleModal">{{ t('details3') }}</button>
                        </div>
                      </div>
                  </div>
                  <div class="col-6 wow animate__animated animate__zoomIn" id="big_logo">
                    <h1>BAKKA TRAVEL</h1>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!--Our tours end-->
    
       <!--
        Modal
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 lng-attention" id="exampleModalLabel">Примечение</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body lng-function_next">
                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary lng-close" data-bs-dismiss="modal">Закрыть</button>      </div>
            </div>
          </div>
        </div>
        Modal end-->
    
        <!--Paket tours-->
        <div class="paket_tours" id="tours">
          <div class="container">
            <h3 class="paket_tours_text animate__animated animate__fadeInLeft lng-paket_tours_text">{{ t('paket_tours_text') }}</h3>
              <div class="paket_tours_none">
                <div class="row pakets">
                  <div class="col-4 paketter with-border-gradient wow animate__animated animate__slideInUp" id="pakets1">
                        <h3>Lux</h3>
                        <h4>{{ t('date_tour1') }}</h4>
                        <hr>
                        <h4 class="text_left price_text lng-price_text1">{{ t('price_text1') }}</h4>
                        <h4 class="text_right price">1490 $ | 719.000 ₸</h4>
                        <div style="clear: left;"></div>
                        <div class="book_consult">
                        <button class="lng-book2 book" @click="goToTourInfo()" type="button">{{ t('consultation') }}</button>            
                      </div>
                      </div>
                <div class="col-4 with-border-gradient wow animate__animated animate__slideInUp" id="pakets2">
                  <h3>Lux</h3>
                  <h4>{{ t('date_tour2') }}</h4>
                        <hr>
                        <h4 class="text_left price_text lng-price_text2">{{ t('price_text2') }}</h4>
                        <h4 class="text_right price ">1490 $ | 719.000 ₸</h4>
                        <div style="clear: left;"></div>
                        <div class="book_consult">
                        <button class="lng-book2 book" @click="goToTourInfo()" type="button">{{ t('consultation') }}</button>            
                        </div>
                  </div>
                  <div class="col-4 with-border-gradient wow animate__animated animate__slideInUp" id="pakets3">
                  <h3>Lux</h3>
                  <h4>{{ t('date_tour3') }}</h4>
                            <hr>
                            <h4 class="text_left price_text lng-price_text3">{{ t('price_text3') }}</h4>
                            <h4 class="text_right price">1490 $ | 719.000 ₸</h4>
                            <div style="clear: left;"></div>
                            <div class="book_consult">
                            <button class="lng-book2 book" @click="goToTourInfo()" type="button">{{ t('consultation') }}</button>            
                          </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <!--Paket tours end-->
    
        <!--Paket tours carousel-->
        <div class="paket_tours_carousel">
          <div class="container">
            <div class="wrapper2">
              <div class="item2">
                <div class="card" style="width: 350px;">
                  <div class="col-4 paketter with-border-gradient wow animate__animated animate__slideInUp" id="pakets1">
                    <h3>Lux</h3>
                    <h4>{{ t('date_tour1') }}</h4>
                    <div class="places"><h6>{{ t('all_places') }}</h6><h6>{{ t('places') }}</h6></div>
                    <hr>
                    <img class="text_left icon_tours" src="../img/calendar.svg" alt="">
                        <h5 class="text_left lng-duration1">{{ t('duration1') }}</h5>
                        <p class="text_right lng-duration1_option">{{ t('duration1_option') }}</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/plane.svg" alt=""><h5 class="text_left lng-way1">{{ t('way1') }}</h5>
                        <p class="text_right">Алматы - Медина</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/location.svg" alt=""><h5 class="text_left lng-al_haram1">{{ t('al_haram1') }}</h5>
                        <p class="text_right">4 км</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/food.svg" alt=""><h5 class="text_left lng-food1">{{ t('food1') }}</h5>
                        <p class="text_right">Буфет</p>
                        <div style="clear: left;"></div>
                        
                        <img class="text_left icon_tours" src="../img/hotel.svg" alt=""><h5 class="text_left lng-hotel1">{{ t('hotel1') }}</h5>
                    <div class="hotel_stars">
                    <img src="../img/Star.svg" alt="">
                    <img src="../img/Star.svg" alt="">
                    <img src="../img/Star.svg" alt="">
                    </div>
                    <div style="clear: left;"></div>
                    <hr>
                    <h4 class="text_left price_text lng-price_text1_carousel1">{{ t('price_text1_carousel1') }}</h4>
                    <h4 class="text_right price">400 $ | 230.000 ₸</h4>
                    <div style="clear: left;"></div>
                    <div class="book_consult">
                            <button class="lng-book2 book" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('book2') }}</button>
                            <button class="lng-book2 consultation" @click="goToTourInfo()" type="button">{{ t('consultation') }}</button>            
                          </div>             
                  </div>
                </div>
              </div>
              <div class="item2">
                <div class="card" style="width: 350px;">
                  <div class="col-4 paketter with-border-gradient wow animate__animated animate__slideInUp" id="pakets2">
                    <h3>Lux</h3>
                    <h4>{{ t('date_tour2') }}</h4>
                    <div class="places"><h6>{{ t('all_places') }}</h6><h6>{{ t('places') }}</h6></div>
                    <hr>
                    <img class="text_left icon_tours" src="../img/calendar.svg" alt="">
                        <h5 class="text_left lng-duration1">{{ t('duration1') }}</h5>
                        <p class="text_right lng-duration1_option">{{ t('duration1_option') }}</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/plane.svg" alt=""><h5 class="text_left lng-way1">{{ t('way1') }}</h5>
                        <p class="text_right">Алматы - Медина</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/location.svg" alt=""><h5 class="text_left lng-al_haram1">{{ t('al_haram1') }}</h5>
                        <p class="text_right">4 км</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/food.svg" alt=""><h5 class="text_left lng-food1">{{ t('food1') }}</h5>
                        <p class="text_right">Буфет</p>
                        <div style="clear: left;"></div>
                        
                        <img class="text_left icon_tours" src="../img/hotel.svg" alt=""><h5 class="text_left lng-hotel1">{{ t('hotel1') }}</h5>
                    <div class="hotel_stars">
                    <img src="../img/Star.svg" alt="">
                    <img src="../img/Star.svg" alt="">
                    <img src="../img/Star.svg" alt="">
                    </div>
                    <div style="clear: left;"></div>
                    <hr>
                    <h4 class="text_left price_text lng-price_text2_carousel2">{{ t('price_text1_carousel1') }}</h4>
                    <h4 class="text_right price">400 $ | 230.000 ₸</h4>
                    <div style="clear: left;"></div>
                    <div class="book_consult">
                            <button class="lng-book2 book" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('book2') }}</button>
                            <button class="lng-book2 consultation" @click="goToTourInfo()" type="button">{{ t('consultation') }}</button>            
                          </div>             
                  </div>
                </div>
              </div>
              <div class="item2">
                <div class="card" style="width: 350px;">
                  <div class="col-4 paketter with-border-gradient wow animate__animated animate__slideInUp" id="pakets3">
                    <h3>Lux</h3>
                    <h4>{{ t('date_tour3') }}</h4>
                    <div class="places"><h6>{{ t('all_places') }}</h6><h6>{{ t('places') }}</h6></div>
                    <hr>
                    <img class="text_left icon_tours" src="../img/calendar.svg" alt="">
                        <h5 class="text_left lng-duration1">{{ t('duration1') }}</h5>
                        <p class="text_right lng-duration1_option">{{ t('duration1_option') }}</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/plane.svg" alt=""><h5 class="text_left lng-way1">{{ t('way1') }}</h5>
                        <p class="text_right">Алматы - Медина</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/location.svg" alt=""><h5 class="text_left lng-al_haram1">{{ t('al_haram1') }}</h5>
                        <p class="text_right">4 км</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/food.svg" alt=""><h5 class="text_left lng-food1">{{ t('food1') }}</h5>
                        <p class="text_right">Буфет</p>
                        <div style="clear: left;"></div>
                        
                        <img class="text_left icon_tours" src="../img/hotel.svg" alt=""><h5 class="text_left lng-hotel1">{{ t('hotel1') }}</h5>
                    <div class="hotel_stars">
                    <img src="../img/Star.svg" alt="">
                    <img src="../img/Star.svg" alt="">
                    <img src="../img/Star.svg" alt="">
                    </div>
                    <div style="clear: left;"></div>
                    <hr>
                    <h4 class="text_left price_text lng-price_text3_carousel3">{{ t('price_text1_carousel1') }}</h4>
                    <h4 class="text_right price">400 $ | 230.000 ₸</h4>
                    <div style="clear: left;"></div>
                    <div class="book_consult">
                            <button class="lng-book2 book" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('book2') }}</button>
                            <button class="lng-book2 consultation" @click="goToTourInfo()" type="button">{{ t('consultation') }}</button>            
                          </div>            
                    </div>
                </div>
              </div>
          </div>
        </div>
        </div>
        <!--Paket tours carousel end-->
    
        <!--form bootstrap-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 lng-form_text_boot" id="exampleModalLabel">{{ t('form_text_boot') }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form method="post" @submit.prevent="submitForm"  name="contact-form">
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label lng-form_name">{{ t('form_name') }}</label>
                <input v-model="formData.name" type="text" placeholder="Ваше имя"  class="form-control" id="your-name" name="your-name">
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label lng-form_number">{{ t('form_number') }}</label>
                <input v-model="formData.phone_number" type="text" id="your-number" placeholder="Номер телефона" name="your-number" class="form-control">
              </div>
              <input type="submit" id="submit" value="Отправить"  class="submit_boot" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">
            </form>
          </div>
        </div>
      </div>
    </div>
    
        <!--form bootstrap end-->
  
  
        <!-- Gids -->
  <div class="gids">
    <div class="container">
      <h3 class="wow animate__animated animate__fadeInLeft">{{ t('our_gids') }}</h3>
      <p class="wow info_gids animate__animated animate__fadeInLeft">{{ t('our_gids_options') }}</p>
      <div class="wrapper">
        <div v-for="guide in guides" :key="guide.id" class="item">
          <div class="card" style="width: 18rem;">
            <img :src="guide.image" class="card-img-top img_gid" alt="guide image">
            <div class="card-body">
              <div class="stars_gid">
                <img v-for="n in guide.rating" :key="n" src="../img/Star.svg" alt="star">
              </div>
              <h5 class="card-title">{{ guide.name }}</h5>
              <h5 class="card-title">{{ guide.age }} лет</h5>
              <p class="card-text">{{ guide.role }}</p>
              <p class="card-text">{{t('education')}} {{educationLevel(guide.education) }}</p>
              <p class="card-text">{{t('languages')}} {{ languagesSpoken(guide.language) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Gids end -->
        <!--Application soon-->
        <div class="app">
          <div class="container">
            <div class="row">
              <div class="col texts">
                <div>
                  <h1 class="wow animate__animated animate__fadeInLeft lng-soon_in_phone">{{ t('soon_in_phone') }}</h1>
                  <p class="wow animate__animated animate__fadeInLeft lng-soon_in_phone_option">{{ t('soon_in_phone_option') }}</p>
                  <button class="wow animate__animated animate__fadeInLeft instagram_button" onclick="window.location.href = 'https://instagram.com/bakka_travel';">Подписаться <img src="../img/subcribe_insta.svg" alt=""></button>
                </div>
              </div>
              <div class="col iphones">
                <img class="wow animate__animated animate__slideInUp" src="../img/phone.png" alt="">
              </div>
              <div class="iphones2">
                <img src="../img/phone.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <!--Application soon end-->
        <!-- Отзывы -->
  <div class="container feedbacks">
    <h3 class="wow animate__animated animate__fadeInLeft">{{ t('review') }}</h3>
    <div class="row">
      <div v-for="review in reviews" :key="review.id" class="reviews col-md-6 mb-4">
        <div class="card wow animate__animated animate__fadeInLeft">
          <div class="card-body">
            <div class="row">
              <div class="col name_review">
                <img :src="review.image" alt="">
            <h5 class="card-title">{{ review.name }}</h5>
            </div>
            <div class="col date_review">
              <p class="justify-content-end">{{ formatDate(review.created_at) }}</p>
            </div>
            </div>
            <p class="card-text">{{ review.content }}</p>
            <img v-for="n in review.rating" :key="n" src="../img/Star.svg" alt="star">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Отзывы end -->
        <!--Новости-->
        <div class="news">
    <div class="container">
      <div class="row">
        <div class="col wow animate__animated animate__fadeInLeft">
          <h1>{{ t('news_tittle') }}</h1>
        </div>
        <div class="col button_news wow animate__animated animate__fadeInLeft">
          <button @click="goToNews" class="justify-content-end ">{{ t('all_news') }} <img src="../img/see_news.svg" alt=""></button>
        </div>
      </div>

      <div class="row news_row">
        <div v-for="newsItem in newsList" :key="newsItem.id" class="col-md-6 mb-4 wow animate__animated animate__fadeInLeft">
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
        <!--question and answer-->
        <div class="qua_ans">
    <div class="container">
      <h2 class="wow animate__animated animate__fadeInLeft qua_text2">{{ t('qua_text') }}</h2>
      <div class="row">
        <div class="col-4 text_in_qua">
          <h2 class="wow animate__animated animate__fadeInLeft">{{ t('qua_text') }}</h2>
        </div>
        <div class="col-8 qua">
          <div class="accordion wow animate__animated animate__fadeInRight" id="accordionExample">
            <div v-for="(item, index) in faqList" :key="item.id" class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#collapse' + index"
                  :aria-controls="'collapse' + index"
                >
                  {{ item.question }}
                </button>
              </h2>
              <div
                :id="'collapse' + index"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">{{ item.answer }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        <!--question and answer end-->
        <!--Form-->
<div class="form" id="form">
  <div class="container">
    <div class="row">
      <div class="col form1 wow animate__animated animate__fadeInLeft">
        <h2 class="lng-form_text">{{t('form_text')}}</h2>
        <p class="lng-form_option">{{ t('form_option') }}</p>
        <form @submit.prevent="submitForm" name="contact-form">
          <input v-model="formData.name" type="text" id="your-name" name="your-name" placeholder="Ваше имя" required>
          <input v-model="formData.phone_number" type="text" id="your-number" name="your-number" placeholder="Номер телефона" required>
          <input type="submit" id="submit" value="Отправить" data-bs-target="#exampleModal2">
        </form>
        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{{ t('confedencial') }}</button>
      </div>
      <div class="col form2 wow animate__animated animate__fadeInRight">
        <h1>BAKKA TRAVEL</h1>
      </div>
    </div>
  </div>
</div>
</div>
<!--Form end-->

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Политика конфиденциальности</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Политика конфиденциальности
            1) Определения
    
    Интернет проект www.hickmet.kz (далее – URL, «мы») серьезно относится к вопросу конфиденциальности информации своих клиентов и посетителей сайта www.hickmet.kz (далее – «вы», «посетители сайта»). Персонифицированной мы называем информацию, содержащую персональные данные (например: ФИО, логин или название компании) посетителя сайта, а также информацию о действиях, совершаемых вами на сайте URL. (например: заказ посетителя сайта с его контактной информацией). Анонимными мы называем данные, которые невозможно однозначно идентифицировать с конкретным посетителем сайта (например: статистика посещаемости сайта).
    
    2) Использование информации
    Мы используем персонифицированную информацию конкретного посетителя сайта исключительно для обеспечения ему качественного оказания услуг и их учета. Мы не раскрываем персонифицированных данных одних посетителей сайта URL другим посетителям сайта. Мы никогда не публикуем персонифицированную информацию в открытом доступе и не передаем ее третьим лицам. Исключением являются лишь ситуации, когда предоставление такой информации уполномоченным государственным органам предписано действующим законодательством Республики Казахстан. Мы публикуем и распространяем только отчеты, построенные на основании собранных анонимных данных. При этом отчеты не содержат информацию, по которой было бы возможным идентифицировать персонифицированные данные пользователей услуг. Мы также используем анонимные данные для внутреннего анализа, целью которого является развитие продуктов и услуг URL
    
    3) Ссылки
    Сайт www.hickmet.kz может содержать ссылки на другие сайты, не имеющие отношения к нашей компании и принадлежащие третьим лицам. Мы не несем ответственности за точность, полноту и достоверность сведений, размещенных на сайтах третьих лиц, и не берем на себя никаких обязательств по сохранению конфиденциальности информации, оставленной вами на таких сайтах.
    
    4) Ограничение ответственности
    Мы делаем все возможное для соблюдения настоящей политики конфиденциальности, однако, мы не можем гарантировать сохранность информации в случае воздействия факторов находящихся вне нашего влияния, результатом действия которых станет раскрытие информации. Сайт www.hickmet.kz и вся размещенная на нем информация представлены по принципу «как есть” без каких-либо гарантий. Мы не несем ответственности за неблагоприятные последствия, а также за любые убытки, причиненные вследствие ограничения доступа к сайту URL или вследствие посещения сайта и использования размещенной на нем информации.
    
    5) Контакты
    По вопросам, касающимся настоящей политики, просьба обращаться по адресу coo@hickmet.k
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Принимаю</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="btn-up btn-up_hide"></div>
    
        <!--footer-->
          <div class="footer"> 
            <div class="container">
               <div class="row">
                <div class="col-5">
                  <img class="logo_for_footer" src="../Bakka_new_logo/bakka_logo_gold.svg" alt="">
                  <p>© Copyright 2024 BAKKA TRAVEL</p>
                </div>
                <div class="col-7">
                  <div class="row">
                    <div class="col-6 texts_infoot">
                      <h4>Компания</h4>
                      <a class="lng-onas2" href="#info_block">{{ t('onas2') }}</a><br>
                      <a class="lng-paket_tours_text2" href="#tours">{{ t('paket_tours_text2') }}</a><br>
                    </div>
                    <div class="col-6 texts_infoot">
                      <h4 class="lng-tourst2">{{ t('tourst2') }}</h4>
                      <a class="lng-umra2" href="#tours">{{ t('umra2') }}</a><br>
                      <a class="lng-hadj2" href="#tours">{{ t('hadj2') }}</a><br>
                    </div>
                  </div>
                </div>
               </div>
               <div class="row map">
                  <div class="col-5 without_map">
                    <div class="row">
                      <div class="col">
                        <h4 class="lng-sviazivat">{{ t('sviazivat') }}</h4>
                        <p><img src="../img/phone_icon.svg" alt="">+7 (707) 059-30-30</p>
                        <a href="https://www.instagram.com/bakka_travel/"><img class="soc_icons" src="../img/insta_icon.png" alt=""></a>
                        <a href="https://api.whatsapp.com/send/?phone=%2B77051851321&text&type=phone_number&app_absent=0"><img class="soc_icons" src="../img/wp_icon.png" alt=""></a>
                        <div class="text_office">
                          <h4>Офис</h4>
                          <div class="p_foot">
                            <img class="text_left icon_tours" src="../img/location_icon.svg" alt=""><p class="lng-street text_left">{{ t('street') }}</p><br>
                          </div>
                          <div style="clear: left;"></div>
                          <button onclick="window.location.href = 'https://2gis.kz/almaty/firm/70000001025586524?m=76.845925%2C43.342585%2F16'">Открыть <img src="../img/2GIS_logo.svg" alt=""></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-7 google_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.6514792818743!2d76.84332587623722!3d43.342481571118604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38831548fecbdfe1%3A0xd428d5b04bd64857!2z0JzQtdGH0LXRgtGMIOKAnNCQ0LvRjC3QkNC30LjQvOKAnQ!5e0!3m2!1sru!2skz!4v1697372336957!5m2!1sru!2skz" width="100%" height="250px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
               </div>
               <br>
            </div>
          </div>
        <!--footer end-->
      </body>
    </template>
    
    <script>
    import axios from 'axios';

    
    export default {
      data() {
        return {
          faqList: [],
          newsList: [],
          reviews: [],
          guides: [],
          formData: {
        name: '',
        phone_number: '',
        status: 1
      },
          headingText: 'Часто задаваемые вопросы',
          sectionTitle: 'Вопросы и ответы',
          currentLang: 'kz',
          langArr: {
            bakkatravel: {
              kz: "Өміріңіздегі ең маңызды саяхатты бізбен бірге жасаңыз!",
              ru: "Соверши самое главное путешествие в своей жизни вместе с нами!",
            },
            onas: {
              kz: "Біз туралы",
              ru: "О нас",
            },
            mekkaandmedina: {
              kz: "Мекке мен Мединаға турлар",
              ru: "Туры в Мекку и Медину",
            },
            tourst: {
              kz: "Турлар",
              ru: "Туры",
            },
            hadj: {
              kz: "Қажылық",
              ru: "Хадж",
            },
            umra: {
              kz: "Умра",
              ru: "Умра",
            },
            number_text : {
            kz : "Байланыс номері",
            ru : "Свяжитесь с нами",
        },
            choose_tour: {
              kz: "Турды таңдау",
              ru: "Выбрать тур",
            },
            options : {
            kz : "BAKKA Travel-әлемдегі мұсылмандар үшін жетекші туроператорлардың бірі.2006 жылдан бастап біз Ислам туризмін, мұсылмандар үшін қасиетті Мекке мен сәулелі Мединаға қажылықты ұйымдастырумен айналысып келеміз.",
            ru : "BAKKA Travel – один из ведущих туроператоров для мусульман по всему миру.С 2006 года мы успешно занимаемся организацией исламского туризма, паломничества для мусульман в Священную Мекку и Лучезарную Медину.",
        },
        our_advantages: {
            kz : "Біздің артықшылықтарымыз",
            ru : "Наши преимущества",
        },
        first_block_h6: {
            kz : "Исламдық білімі бар кәсіби гидтер",
            ru : "Профессиональные гиды с Исламским образованием",
        },
        first_block_p : {
            kz : "Біздің гидтер-көп жылдық тәжірибесі бар устаздар мен имамдар",
            ru : "Наши гиды - это устазы и имамы с многолетним опытом",
        },
        second_block_h6 : {
            kz : "Қасиетті жерлерге экскурсиялар",
            ru : "Экскурсии по священным местам",
        },
        second_block_p : {
            kz : "Күтім қаласы, Сафа Марва, Хира үңгірі, Пайғамбар мешіті, құрма бағы және т.б",
            ru : "Город Ухуд, Сафа-Марва, Пещера Хира, Мечеть Пророка, Финиковый сад и многое другое.",
        },
        third_block_h6 : {
            kz : "Қасиетті рәсімдерді орындауға көмектесу",
            ru : "Помощь в совершении священных обрядов",
        },
        third_block_p : {
            kz : "Біз сізге умраның барлық кезеңдерін аяқтауға көмектесеміз",
            ru : "Мы поможем вам в совершении всех этапов Умры",
        },
        fourth_block_h6 : {
            kz : "Қонақ үйлер мен тамақтану",
            ru : "Отели и питание",
        },
        fourth_block_p : {
            kz : "Мекке мен Мединадағы ең жақсы қонақ үйлер, Аль-Харам мешітіне жақын, күніне 2 рет тамақтану.",
            ru : "Лучшие отели в Мекке и Медине, ближайшие к мечети Аль-Харам, питание 2 раза в день.",
        },
        fifth_block_h6 : {
            kz : "Умра туралы егжей-тегжейлі оқыту",
            ru : "Детальное обучение к Умре",
        },
        fifth_block_p : {
            kz : "Біздің гидтер-көп жылдық тәжірибесі бар устаздар мен имамдар.",
            ru : "Наши гиды - это устазы и имамы с многолетним опытом",
        },
        sixth_block_h6 : {
            kz : "Екі жаққа да билеттер",
            ru : "Билеты в обе стороны",
        },
        sixth_block_p : {
            kz : "Медина мен Джиддаға ең ыңғайлы ұшақтарда тікелей рейстер",
            ru : "Прямые рейсы в Медину и Джидду в самых удобных самолетах",
        },
        seventh_block_h6 : {
            kz : "Әуежайда кездесу және шығарып салу",
            ru : "Встреча и проводы в аэропорту",
        },
        seventh_block_p : {
            kz : "Біздің гид сіздерді қарсы алады және бағыттайды",
            ru : "Наш гид встретит и проводит вас",
        },
        eighth_block_h6 : {
            kz : "Қонақ үйлер мен тамақтану",
            ru : "Отели и питание",
        },
        eighth_block_p : {
            kz : "1 жыл мерзімге визаны ресімде",
            ru : "Оформление тур визы сроком на 1 год",
        },
        our_tours_text : {
            kz : "Біздің турлар",
            ru : "Наши туры",
        },
        umra_text : {
            kz : "Умра",
            ru : "Умра",
        },
        umra_options : {
            kz : "Кіші қажылық",
            ru : "Малое паломничество",
        },
        details1 : {
            kz : "Толығырақ",
            ru : "Подробнее",
        },
        hadj_text : {
            kz : "Қажылық",
            ru : "Хадж",
        },
        hadj_options : {
            kz : "Үлкен қажылық",
            ru : "Большое паломничество",
        },
        details2 : {
            kz : "Толығырақ",
            ru : "Подробнее",
        },
        hot_tours : {
            kz : "Ең тиімді турлар",
            ru : "Горящие туры",
        },
        hot_tours_options : {
            kz : "2024 жылға арналған Мекке мен Мединаға саяхаттауға арналған ең жақсы мәмілелер",
            ru : "Самые выгодные предложения для путешествия  в Мекку и Медину на 2024 год",
        },
        details3 : {
            kz : "Барлық ұсыныстарды қараңыз",
            ru : "Смотреть все предложения",
        },
        paket_tours_text : {
            kz : "Турлар пакеті",
            ru : "Пакет туров",
        },
        duration1 : {
            kz : "Ұзақтығы",
            ru : "Длительность",
        },
        duration2 : {
            kz : "Ұзақтығы",
            ru : "Длительность",
        },
        duration3 : {
            kz : "Ұзақтығы",
            ru : "Длительность",
        },
        duration1_option : {
            kz : "11 күн",
            ru : "11 дней",
        },
        way1 : {
            kz : "Бағыт",
            ru : "Направление",
        },
        way2 : {
            kz : "Бағыт",
            ru : "Направление",
        },
        way3 : {
            kz : "Бағыт",
            ru : "Направление",
        },
        al_haram1 : {
            kz : "Әл-Харам мешітіне дейін",
            ru : "До мечети Аль-Харам",
        },
        al_haram2 : {
            kz : "Әл-Харам мешітіне дейін",
            ru : "До мечети Аль-Харам",
        },
        al_haram3 : {
            kz : "Әл-Харам мешітіне дейін",
            ru : "До мечети Аль-Харам",
        },
        food1 : {
            kz : "Тамақтану",
            ru : "Питания",
        },
        food2 : {
            kz : "Тамақтану",
            ru : "Питания",
        },
        food3 : {
            kz : "Тамақтану",
            ru : "Питания",
        },
        hotel1 : {
            kz : "Қонақ үй",
            ru : "Отель",
        },
        hotel2 : {
            kz : "Қонақ үй",
            ru : "Отель",
        },
        hotel3 : {
            kz : "Қонақ үй",
            ru : "Отель",
        },
        price_text1 : {
            kz : "Бағасы:",
            ru : "Цена:",
        },
        price_text2 : {
            kz : "Бағасы:",
            ru : "Цена:",
        },
        price_text3 : {
            kz : "Бағасы:",
            ru : "Цена:",
        },
        book1 : {
            kz : "Бронь жасау",
            ru : "Забронировать",
        },
        book2 : {
            kz : "Бронь жасау",
            ru : "Забронировать",
        },
        book3 : {
            kz : "Бронь жасау",
            ru : "Забронировать",
        },
        duration1_carousel1 : {
            kz : "Ұзақтығы",
            ru : "Длительность",
        },
        duration2_carousel2 : {
            kz : "Ұзақтығы",
            ru : "Длительность",
        },
        duration3_carousel3 : {
            kz : "Ұзақтығы",
            ru : "Длительность",
        },
        duration1_option_carousel1 : {
            kz : "20 күн",
            ru : "20 дней",
        },
        duration2_option_carousel2 : {
            kz : "20 күн",
            ru : "20 дней",
        },
        duration3_option_carousel3 : {
            kz : "20 күн",
            ru : "20 дней",
        },
        way1_carousel1 : {
            kz : "Бағыт",
            ru : "Направление",
        },
        way2_carousel2 : {
            kz : "Бағыт",
            ru : "Направление",
        },
        way3_carousel3 : {
            kz : "Бағыт",
            ru : "Направление",
        },
        al_haram1_carousel1 : {
            kz : "Әл-Харам мешітіне дейін",
            ru : "До мечети Аль-Харам",
        },
        al_haram2_carousel2 : {
            kz : "Әл-Харам мешітіне дейін",
            ru : "До мечети Аль-Харам",
        },
        al_haram3_carousel3 : {
            kz : "Әл-Харам мешітіне дейін",
            ru : "До мечети Аль-Харам",
        },
        food1_carousel1 : {
            kz : "Тамақтану",
            ru : "Питания",
        },
        food2_carousel2 : {
            kz : "Тамақтану",
            ru : "Питания",
        },
        food3_carousel3 : {
            kz : "Тамақтану",
            ru : "Питания",
        },
        hotel1_carousel1 : {
            kz : "Қонақ үй",
            ru : "Отель",
        },
        hotel2_carousel2 : {
            kz : "Қонақ үй",
            ru : "Отель",
        },
        hotel3_carousel3 : {
            kz : "Қонақ үй",
            ru : "Отель",
        },
        price_text1_carousel1 : {
            kz : "Бағасы:",
            ru : "Цена:",
        },
        price_text2_carousel2 : {
            kz : "Бағасы:",
            ru : "Цена:",
        },
        price_text3_carousel3 : {
            kz : "Бағасы:",
            ru : "Цена:",
        },
        book1_carousel1 : {
            kz : "Бронь жасау",
            ru : "Забронировать",
        },
        book2_carousel2 : {
            kz : "Бронь жасау",
            ru : "Забронировать",
        },
        book3_carousel3 : {
            kz : "Бронь жасау",
            ru : "Забронировать",
        },
        our_gids : {
            kz : "Біздің гидтер",
            ru : "Наши гиды",
        },
        our_gids_options : {
            kz : "Сіздің сапарыңыздың сәтті өтуі үшін бәрін жасайтын біздің ең жақсы мамандарды! Олар әрқашан сізбен байланыста және сізге кез келген сұраққа көмектеседі!",
            ru : "Представляем наших лучших специалистов, которые сделают все,чтобы ваша поездка прошла удачно! Они всегда с вами на связии помогут вам с любым вопросом!",
        },
        education : {
            kz : "Білімі:",
            ru : "Образование:",
        },
        languages : {
            kz : "Тілдері:",
            ru : "Языки:",
        },
        soon_in_phone : {
            kz : "Жақында сіздің телефоныңызда!",
            ru : "Скоро в твоем телефоне!",
        },
        soon_in_phone_option : {
            kz : "Біздің қосымшаның көмегімен турды таңдап, сапарға шығу одан да ыңғайлы және жылдам болады!Біздің сайтта және Instagram-да жаңалықтарды қадағалаңыз.",
            ru : "С нашим приложением подобрать тур и отправитьсяв путешествие станет еще удобнее и быстрее!Следи за новостями на нашем сайте и в инстаграм.",
        },
        follow : {
            kz : "Тіркелу",
            ru : "Подписаться",
        },
        qua_text : {
            kz : "Танымал сұрақтар мен оларға жауаптар",
            ru : "Популярные вопросы и ответы на них",
        },
        qua_text2 : {
            kz : "Танымал сұрақтар мен оларға жауаптар",
            ru : "Популярные вопросы и ответы на них",
        },
        form_text : {
            kz : "Сұрақтар қалды ма?",
            ru : "Остались вопросы?",
        },
        form_option : {
            kz : "Өтінімді қалдырыңыз, біз сізге жақын арада хабарласамыз!",
            ru : "Оставьте заявку и мы скоро свяжемся с Вами!",
        },
        form_option2 : {
            kz : "Жіберу батырмасын басу арқылы мен дербес деректерді өңдеуге келісім беремін",
            ru : "Нажимая на кнопку отправить, я даю согласие на обработку персональных данных",
        },
        onas2 : {
            kz : "Біз туралы",
            ru : "О нас",
        },
        paket_tours_text2 : {
            kz : "Турлар пакеті",
            ru : "Пакет туров",
        },
        tourst2 : {
            kz : "Турлар",
            ru : "Туры",
        },
        umra2 : {
            kz : "Умра",
            ru : "Умра",
        },
        hadj2 : {
            kz : "Қажылық",
            ru : "Хадж",
        },
        sviazivat : {
            kz : "Байланыс",
            ru : "Контакты",
        },
        street : {
            kz : "Азат 20А көшесі",
            ru : "Улицв Азат 20А",
        },
        form_text_boot : {
            kz : "Заявка қалдыру",
            ru : "Оставить заявку",
        },
        form_name : {
            kz : "Есіміңіз:",
            ru : "Имя:",
        },
        form_number : {
            kz : "Телефон номеріңіз:",
            ru : "Номер телефона:",
        },
        form_name_foot : {
            kz : "Есіміңіз:",
            ru : "Имя:",
        },
        form_number_foot : {
            kz : "Телефон номеріңіз:",
            ru : "Номер телефона:",
        },
        function_next : {
            kz : "Бұл мүмкіндік келесі нұсқада қолжетімді болады!",
            ru : "Это функция будет доступно в следующем версии!",
        },
        attention : {
            kz : "Ескерту",
            ru : "Примечание",
        },
        date_tour1: {
          kz: "16 қыркүйек - 26 қыркүйек 2024",
          ru: "16 сентябрь - 26 сентябрь 2024 "
        },
        date_tour2: {
          kz: "7 қазан - 17 қазан 2024",
          ru: "7 октябрь - 17 октябрь 2024 "
        },
        date_tour3: {
          kz: "28 қазан - 7 қараша 2024",
          ru: "28 октябрь - 7 ноябрь 2024 "
        },
        consultation: {
          kz: "Толығырақ",
          ru: "Подробнее"
        },
        all_places: {
          kz: "Жалпы орын: 300",
          ru: "Всего мест: 300"
        },
        places: {
          kz: "Қалған орындар: 300",
          ru: "Осталось мест: 300"
        },
        confedencial: {
          kz: "Жіберу түймесін басу арқылы мен жеке деректерді өңдеуге келісім беремін",
          ru: "Нажимая на кнопку отправить, я даю согласие на обработку персональных данных"
        },
        news_tittle: {
          kz: "Жаңалықтар",
          ru: "Новости"
        },
        all_news: {
          kz: "Барлығын көру",
          ru: "Cмотреть все"
        },
        read_news: {
          kz: "Дереккөзді оқу",
          ru: "Читать источник"
        },
        review: {
          kz: "Пікірлер",
          ru: "Отзывы"
        },
        
          },
        };
      },
      mounted() {
    this.fetchFaq();
    this.fetchNews();
    this.fetchReviews();
    this.fetchGuides();
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
    // Фильтруем новости, чтобы показывались только те, у которых is_published = true
    this.newsList = response.data.results.filter(news => news.is_published);
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
  }},
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
    async fetchGuides() {
      try {
        const response = await axios.get('https://bakka.kz/api/guides/');
        this.guides = response.data.results;
      } catch (error) {
        console.error('Ошибка при загрузке данных гидов:', error);
      }
    },
    educationLevel(level) {
      const educationLevels = {
        1: 'Cредняя школа',
        2: 'Бакалавр',
        3: 'Магистр',
        4: 'Докторантура',
        5: 'Другое'
      };
      return educationLevels[level] || 'Не указано';
    },
    languagesSpoken(languages) {
      const languageMap = {
        1: 'Русский',
        2: 'Казахский',
        3: 'Английский',
      };
      return languages.map(lang => languageMap[lang]).join(', ');
    },
    async read_news(newsId) {
        this.$router.push({ name: 'read_news', query: { id: newsId } });
      },
      async goToTourInfo() {
        this.$router.push({ name: 'tour_info',});
      },
      async submitForm() {
      try {
        const response = await axios.post('https://bakka.kz/api/contact-request/', this.formData);
        if (response.status === 201) {
          alert('Форма успешно отправлена!');
          // Очистка формы
          this.formData.name = '';
          this.formData.phone_number = '';
        }
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        alert('Ошибка при отправке формы. Попробуйте еще раз.');
      }
    },
      },
      created() {
        const hashLang = window.location.hash.replace('#', '');
        if (this.langArr.bakkatravel[hashLang]) {
          this.currentLang = hashLang;
        } else {
          this.currentLang = 'kz';
        }
      },
    };
    
    </script>
    
    <style scoped>
    
    </style>
    