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
            <div class="main_tour">
                <!--Paket tours-->
        <div class="paket_tours container" id="tours">
            <div class="row">
                <div class="col">
            <h3 class="paket_tours_info_text animate__animated animate__fadeInLeft lng-paket_tours_text">{{ t('paket_tours_text') }}</h3>
            </div>
            </div>
              <div class="paket_tours_none">
                <div class="row pakets">
                  <div class="col-4 paketter with-border-gradient wow animate__animated animate__slideInUp" id="pakets1">
                        <h3>Lux</h3>
                        <h4>{{ t('date_tour1') }}</h4>
                        <div class="places"><h6>{{ t('all_places') }}</h6><h6>{{ t('places') }}</h6></div>
                        <img class="text_left icon_tours" src="../img/calendar.svg" alt="">
                        <h5 class="text_left lng-duration1">{{ t('duration1') }}</h5>
                        <p class="text_right lng-duration1_option">{{ t('duration1_option') }}</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/plane.svg" alt=""><h5 class="text_left lng-way1">{{ t('way1') }}</h5>
                        <p class="text_right">Алматы - Медина</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/location.svg" alt=""><h5 class="text_left lng-al_haram1">{{ t('al_haram1') }}</h5>
                        <p class="text_right">5 мин</p>
                        <div style="clear: left;"></div>                        
                        <img class="text_left icon_tours" src="../img/hotel.svg" alt=""><h5 class="text_left lng-hotel1">{{ t('hotel1') }}</h5>
                        <div class="hotel_stars">
                        <img src="../img/Star.svg" alt="">
                        <img src="../img/Star.svg" alt="">
                        <img src="../img/Star.svg" alt="">
                        <img src="../img/Star.svg" alt="">
                        <img src="../img/Star.svg" alt="">
                        </div>
                        <div style="clear: left;"></div>
                        <hr>
                        <h4 class="text_left price_text lng-price_text1">{{ t('price_text1') }}</h4>
                        <h4 class="text_right price">1490 $ | 719.000 ₸</h4>
                        <div style="clear: left;"></div>
                        <div class="book_consult">
                        <button class="lng-book2 book" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('book2') }}</button>
                      </div>
                      </div>
                <div class="col-4 with-border-gradient wow animate__animated animate__slideInUp" id="pakets2">
                  <h3>Lux</h3>
                  <h4>{{ t('date_tour2') }}</h4>
                  <div class="places"><h6>{{ t('all_places') }}</h6><h6>{{ t('places') }}</h6></div>
                  <img class="text_left icon_tours" src="../img/calendar.svg" alt="">
                        <h5 class="text_left lng-duration1">{{ t('duration1') }}</h5>
                        <p class="text_right lng-duration1_option">{{ t('duration1_option') }}</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/plane.svg" alt=""><h5 class="text_left lng-way1">{{ t('way1') }}</h5>
                        <p class="text_right">Алматы - Медина</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/location.svg" alt=""><h5 class="text_left lng-al_haram1">{{ t('al_haram1') }}</h5>
                        <p class="text_right">5 мин</p>
                        <div style="clear: left;"></div>

                        <img class="text_left icon_tours" src="../img/hotel.svg" alt=""><h5 class="text_left lng-hotel1">{{ t('hotel1') }}</h5>
                        <div class="hotel_stars">
                        <img src="../img/Star.svg" alt="">
                        <img src="../img/Star.svg" alt="">
                        <img src="../img/Star.svg" alt="">
                        <img src="../img/Star.svg" alt="">
                        <img src="../img/Star.svg" alt="">
                        </div>
                        <div style="clear: left;"></div>
                        <hr>
                        <h4 class="text_left price_text lng-price_text2">{{ t('price_text2') }}</h4>
                        <h4 class="text_right price ">1490 $ | 719.000 ₸</h4>
                        <div style="clear: left;"></div>
                        <div class="book_consult">
                        <button class="lng-book2 book" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('book2') }}</button>
                        </div>
                  </div>
                  <div class="col-4 with-border-gradient wow animate__animated animate__slideInUp" id="pakets3">
                  <h3>Lux</h3>
                  <h4>{{ t('date_tour3') }}</h4>
                  <div class="places"><h6>{{ t('all_places') }}</h6><h6>{{ t('places') }}</h6></div>
                  <img class="text_left icon_tours" src="../img/calendar.svg" alt="">
                        <h5 class="text_left lng-duration1">{{ t('duration1') }}</h5>
                        <p class="text_right lng-duration1_option">{{ t('duration1_option') }}</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/plane.svg" alt=""><h5 class="text_left lng-way1">{{ t('way1') }}</h5>
                        <p class="text_right">Алматы - Медина</p>
                        <div style="clear: left;"></div>
                        <img class="text_left icon_tours" src="../img/location.svg" alt=""><h5 class="text_left lng-al_haram1">{{ t('al_haram1') }}</h5>
                        <p class="text_right">5 мин</p>
                        <div style="clear: left;"></div>
                        
                        <img class="text_left icon_tours" @click="goToTourInfo()" src="../img/hotel.svg" alt=""><h5 class="text_left lng-hotel1">{{ t('hotel1') }}</h5>
                            <div class="hotel_stars">
                            <img src="../img/Star.svg" alt="">
                            <img src="../img/Star.svg" alt="">
                            <img src="../img/Star.svg" alt="">
                            <img src="../img/Star.svg" alt="">
                            <img src="../img/Star.svg" alt="">

                            </div>
                            <div style="clear: left;"></div>
                            <hr>
                            <h4 class="text_left price_text lng-price_text3">{{ t('price_text3') }}</h4>
                            <h4 class="text_right price">1490 $ | 719.000 ₸</h4>
                            <div style="clear: left;"></div>
                            <div class="book_consult">
                            <button class="lng-book2 book" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('book2') }}</button>
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
                            <button class="lng-book2 consultation" @click="goToTourInfo()" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('consultation') }}</button>            
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
                            <button class="lng-book2 consultation" @click="goToTourInfo()" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('consultation') }}</button>            
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
                            <button class="lng-book2 consultation" @click="goToTourInfo()" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{{ t('consultation') }}</button>            
                    </div>            
                    </div>
                </div>
              </div>
          </div>
        </div>
        </div>
        <!--Paket tours carousel end-->

        <div class="tour_info">
            <div class="second_part">
              <div class="container">
                <h3 class="wow animate__animated animate__fadeInRightBig lng-our_advantages">{{ t('paket_price') }}</h3>
                <div class="row">
                  <div class="col2 col-4 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/ticket.svg" alt="">
                    <h6 class="lng-first_block_h6">{{ t('ticket') }}</h6>
                  </div>
                  <div class="col2 col-4 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/man.svg" alt="">
                    <h6 class="lng-second_block_h6">{{ t('man') }}</h6>
                  </div>
                  <div class="col2 col-4 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/train.svg" alt="">
                    <h6 class="lng-third_block_h6">{{ t('train') }}</h6>
                </div>
                </div>
                    <div class="row">
                  <div class="col2 col-4 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/notebook.svg" alt="">
                    <h6 class="lng-fifth_block_h6">{{ t('notebook') }}</h6>
                    </div>
                  <div class="col2 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/bag.svg" alt="">
                    <h6 class="lng-sixth_block_h6">{{ t('bag') }}</h6>
                    </div>
                  <div class="col2 col-3 wow animate__animated animate__zoomIn">
                    <img class="icon_info" src="../img/bottle.svg" alt="">
                    <h6 class="lng-seventh_block_h6">{{ t('bottle') }}</h6>                
                    </div>
                    </div>
                    </div>
              </div>
              <div class="hotels container">
                <h1>Mekka</h1>
                <h2>All Ebaa Hotel</h2>
                <p><b>Әл харам аумағына 5-6 мин жаяу</b></p>
                <div class="row">
                    <div class="col-6">                
                        <img src="../img/all_ebaa1.jpg" alt="">
                    </div>
                    <div class="col-6">
                        <img src="../img/all_ebaa2.jpg" alt="">
                    </div>
                </div>
                <h1>Medina</h1>
                <h2>Grand Safi Hotel</h2>
                <p><b>Пайғамбарымыз (c.ғ.с) мешітіне 2 мин жаяу</b></p>
                <div class="row">
                    <div class="col-6">                
                        <img src="../img/grand_safi1.jpg" alt="">
                    </div>
                    <div class="col-6">
                        <img src="../img/grand_safi2.jpg" alt="">
                    </div>
                </div>
              </div>
        </div>
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
            </div>
    </template>
    <script>
    import axios from 'axios';
    
        
    export default {
      data() {
        return {
          faqList: [],
          newsList: [],
          reviews: [],
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
        book2 : {
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
        ticket : {
            kz : "Билет/Виза",
            ru : "Билет/Виза",
        },
        man : {
            kz : "Білікті гид/Ұстаз",
            ru : "Квалифицированный гид/преподаватель",
        },
        train : {
            kz : "Мединадан Меккеге жылдам поезд",
            ru : "Скорый поезд из Медины в Мекку",
        },
        notebook : {
            kz : "Қажылық анықтамалығы",
            ru : "Справочник паломника",
        },
        bag : {
            kz : "Қажы жинағы",
            ru : "Паломническая коллекция",
        },
        bottle : {
            kz : "Зәм-Зәм, 5 л",
            ru : "Зам-Зам, 5 л",
        },
        paket_price : {
            kz : "Пакет құнына:",
            ru : "Стоимость пакета:",
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
        
        
        
          },
        };
      },
      mounted() {
      },
      methods: {
            t(key) {
              return this.langArr[key][this.currentLang];
            },
            changeLanguage() {
              window.location.hash = this.currentLang;
              window.location.reload();
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
    
      }
    </script>
    <style>
    .main_tour {
        background-color: #f1f1f1;
        margin: 0px;
        height: 100%;
    }
    .hotels img {
        width: 600px;
        border-radius: 10px;
        height: 300px;
        margin-bottom: 20px;
    }
    .hotels {
        margin-top: 40px;
        background-color: white;
        border-radius: 10px;
        padding: 40px;
    }
  </style>