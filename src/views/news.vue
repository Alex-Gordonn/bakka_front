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

    
export default {
  data() {
    return {
      faqList: [],
      newsList: [],
      reviews: [],
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
        kz : "20 күн",
        ru : "20 дней",
    },
    duration2_option : {
        kz : "20 күн",
        ru : "20 дней",
    },
    duration3_option : {
        kz : "20 күн",
        ru : "20 дней",
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
    name1 : {
        kz : "Алия Умурзакова",
        ru : "Алия Умурзакова"
    },
    name2 : {
        kz : "Арман Бекишев",
        ru : "Арман Бекишев",
    },
    name3 : {
        kz : "Данияр Амангалиев",
        ru : "Данияр Амангалиев",
    },
    name4 : {
        kz : "Мадина Баймуканова",
        ru : "Мадина Баймуканова",
    },
    name5 : {
        kz : "Арман Мырзакемиров",
        ru : "Арман Мырзакемиров",
    },
    age1 : {
        kz : "27 жас",
        ru : "27 лет",
    },
    age2 : {
        kz : "24 жас",
        ru : "24 лет",
    },
    age3 : {
        kz : "29 жас",
        ru : "29 лет",
    },
    age4 : {
        kz : "32 жас",
        ru : "32 лет",
    },
    age5 : {
        kz : "32 жас",
        ru : "32 лет",
    },
    work1 : {
        kz : "Клиенттермен жұмыс жөніндегі маман",
        ru : "Специалист по работе с клиентами",
    },
    work2 : {
        kz : "Клиенттермен жұмыс жөніндегі маман",
        ru : "Специалист по работе с клиентами",
    },
    work3 : {
        kz : "Клиенттермен жұмыс жөніндегі маман",
        ru : "Специалист по работе с клиентами",
    },
    work4 : {
        kz : "Клиенттермен жұмыс жөніндегі маман",
        ru : "Специалист по работе с клиентами",
    },
    work5 : {
        kz : "Клиенттермен жұмыс жөніндегі маман",
        ru : "Специалист по работе с клиентами",
    },
    education1 : {
        kz : "Білімі: жоғары",
        ru : "Образование: высшее",
    },
    education2 : {
        kz : "Білімі: жоғары",
        ru : "Образование: высшее",
    },
    education3 : {
        kz : "Білімі: жоғары",
        ru : "Образование: высшее",
    },
    education4 : {
        kz : "Білімі: жоғары",
        ru : "Образование: высшее",
    },
    education5 : {
        kz : "Білімі: жоғары",
        ru : "Образование: высшее",
    },
    languages1 : {
        kz : "Тілдері: қазақ, орыс, араб",
        ru : "Языки: казахский, русский, арабский",
    },
    languages2 : {
        kz : "Тілдері: қазақ, орыс, араб",
        ru : "Языки: казахский, русский, арабский",
    },
    languages3 : {
        kz : "Тілдері: қазақ, орыс, араб",
        ru : "Языки: казахский, русский, арабский",
    },
    languages4 : {
        kz : "Тілдері: қазақ, орыс, араб",
        ru : "Языки: казахский, русский, арабский",
    },
    languages5 : {
        kz : "Тілдері: қазақ, орыс, араб",
        ru : "Языки: казахский, русский, арабский",
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
    date_tour: {
      kz: "1 маусым - 15 шілде 2024",
      ru: "1 июня - 15 июля 2024 "
    },
    consultation: {
      kz: "Кеңес беру",
      ru: "Консультация"
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