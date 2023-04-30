//Local storage

function setLocalStorage() {
        localStorage.setItem('name', userName.value);
        localStorage.setItem('city', city.value);
        localStorage.setItem('language', lang);
        localStorage.setItem('imageSource', imageSource);
        localStorage.setItem('imageTag', imageTag.value);
        localStorage.setItem('playerState', playerSetting.checked);
        localStorage.setItem('weatherState', weatherSetting.checked);
        localStorage.setItem('timeState', timeSetting.checked);
        localStorage.setItem('dateState', dateSetting.checked);
        localStorage.setItem('greetingState', greetingSetting.checked);
        localStorage.setItem('quotesState', quotesSetting.checked);
        localStorage.setItem('toDoState', toDoSetting.checked);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('language')) {
        lang = localStorage.getItem('language');
        if (lang === 'en') {
            english.checked = true;
        } else {
            russian.checked = true;
        }
    } else {
        english.checked = true;
        lang = 'en';
    }

    if(localStorage.getItem('imageSource')) {
        imageSource = localStorage.getItem('imageSource');
        if (imageSource === 'github') {
            gitHub.checked = true;
        } else if (imageSource === 'unsplash') {
            unsplash.checked = true;
        } else if (imageSource === 'flickr') {
            flickr.checked = true;
        }
    } else {
        gitHub.checked = true;
        imageSource = 'github';
    }

    if(localStorage.getItem('imageTag')) {
        imageTag.value = localStorage.getItem('imageTag');
    } else {
        imageTag.value = getTimeOfDay();
    }

    if(localStorage.getItem('playerState') === 'true') {
        playerSetting.checked = true;
    } else if (localStorage.getItem('playerState') === null) {
        playerSetting.checked = true;
    }
    if(localStorage.getItem('weatherState') === 'true') {
        weatherSetting.checked = true;
    } else if (localStorage.getItem('weatherState') === null) {
        weatherSetting.checked = true;
    }
    if(localStorage.getItem('timeState') === 'true') {
        timeSetting.checked = true;
    } else if (localStorage.getItem('timeState') === null) {
        timeSetting.checked = true;
    }
    if(localStorage.getItem('dateState') === 'true') {
        dateSetting.checked = true;
    } else if (localStorage.getItem('dateState') === null) {
        dateSetting.checked = true;
    }
    if(localStorage.getItem('greetingState') === 'true') {
        greetingSetting.checked = true;
    } else if (localStorage.getItem('greetingState') === null) {
        greetingSetting.checked = true;
    }
    if(localStorage.getItem('quotesState') === 'true') {
        quotesSetting.checked = true;
    } else if (localStorage.getItem('quotesState') === null) {
        quotesSetting.checked = true;
    }
    if(localStorage.getItem('toDoState') === 'true') {
        toDoSetting.checked = true;
    } else if (localStorage.getItem('toDoState') === null) {
        toDoSetting.checked = true;
    }

    if(localStorage.getItem('name')) {
        userName.value = localStorage.getItem('name');
    }

    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.value = 'Madrid';
    }
}

window.addEventListener('load', getLocalStorage);

// User name

const userName = document.querySelector('.name');

function showName() {
    if (lang === 'en') {
        userName.placeholder = "Enter name";
    } else {
        userName.placeholder = "Введите имя";
    }
}

window.addEventListener('load', showName);


// Settings menu

let lang;
const body = document.querySelector('body');
const settings = document.querySelector('.settings');
const settingsList = document.querySelector('.settings-wrapper');
const shadow = document.querySelector('.shadow');

settings.addEventListener('click', () => {
    settingsList.classList.toggle('settings-list-active');
    shadow.classList.toggle('shadow-active');
})

shadow.addEventListener('click', () => {
    settingsList.classList.remove('settings-list-active');
    shadow.classList.remove('shadow-active');
})

const english = document.querySelector('#languageEn');
const russian = document.querySelector('#languageRu');
const language = document.querySelector('.language');
const imgSource = document.querySelector('.image-source');

let imageSource;
const gitHub = document.querySelector('#github');
const unsplash = document.querySelector('#unsplash');
const flickr = document.querySelector('#flickr');

const imageTag = document.querySelector('#image-tag');
const imgTagLang = document.querySelector('.img-tag-lang');

let playerState;
const playerHide = document.querySelector('.player');
const weatherHide = document.querySelector('.weather');
const timeHide = document.querySelector('.time');
const dateHide = document.querySelector('.date');
const greetingHide = document.querySelector('.greeting-container');
const quotesHide = document.querySelector('.quotes');
const toDoHide = document.querySelector('.todo-list');

const playerSetting = document.querySelector('#player-setting');
const weatherSetting = document.querySelector('#weather-setting');
const timeSetting = document.querySelector('#time-setting');
const dateSetting = document.querySelector('#date-setting');
const greetingSetting = document.querySelector('#greeting-setting');
const quotesSetting = document.querySelector('#quotes-setting');
const toDoSetting = document.querySelector('#todo-setting');

const playerLang = document.querySelector('.player-lang');
const weatherLang = document.querySelector('.weather-lang');
const timeLang = document.querySelector('.time-lang');
const dateLang = document.querySelector('.date-lang');
const greetingLang = document.querySelector('.greeting-lang');
const quotesLang = document.querySelector('.quotes-lang');
const toDoLang = document.querySelector('.todo-lang');

playerSetting.addEventListener('click', () => playerHide.classList.toggle('hidden'))
weatherSetting.addEventListener('click', () => weatherHide.classList.toggle('hidden'))
timeSetting.addEventListener('click', () => timeHide.classList.toggle('hidden'))
dateSetting.addEventListener('click', () => dateHide.classList.toggle('hidden'))
greetingSetting.addEventListener('click', () => greetingHide.classList.toggle('hidden'))
quotesSetting.addEventListener('click', () => quotesHide.classList.toggle('hidden'))
toDoSetting.addEventListener('click', () => toDoHide.classList.toggle('hidden'))

english.addEventListener('click', () => {
    lang = 'en';
    language.textContent = 'Language:';
    imgSource.textContent = 'Image source:';
    imgTagLang.textContent = 'Image Tag:';
    playerLang.textContent = 'Player';
    weatherLang.textContent = 'Weather';
    timeLang.textContent = 'Time';
    dateLang.textContent = 'Date';
    greetingLang.textContent = 'Greeting';
    quotesLang.textContent = 'Quotes';
    toDoLang.textContent = 'ToDo List';
    showName();
    getQuotes();
    getWeather();
})

russian.addEventListener('click', () => {
    lang = 'ru';
    language.textContent = 'Язык:';
    imgSource.textContent = 'Источник изображения:';
    imgTagLang.textContent = 'Тег изображения:';
    playerLang.textContent = 'Плеер';
    weatherLang.textContent = 'Погода';
    timeLang.textContent = 'Время';
    dateLang.textContent = 'Дата';
    greetingLang.textContent = 'Приветствие';
    quotesLang.textContent = 'Цитаты';
    toDoLang.textContent = 'Список дел';
    showName();
    getQuotes();
    getWeather();
})

gitHub.addEventListener('click', () => {
    imageSource = 'github';
    getRandomNum();
    setBgImage();
})

unsplash.addEventListener('click', () => {
    imageSource = 'unsplash';
    getLinkToImageUnsplash();
})

flickr.addEventListener('click', () => {
    imageSource = 'flickr';
    getRandomNumFlickr();
    getLinkToImageFlickr();
})

function changeLanguage() {
    if (english.checked) {
        lang = 'en';
        language.textContent = 'Language:';
        imgSource.textContent = 'Image source:';
        imgTagLang.textContent = 'Image Tag:';
        playerLang.textContent = 'Player';
        weatherLang.textContent = 'Weather';
        timeLang.textContent = 'Time';
        dateLang.textContent = 'Date';
        greetingLang.textContent = 'Greeting';
        quotesLang.textContent = 'Quotes';
        toDoLang.textContent = 'ToDo List';
    } else if (russian.checked) {
        lang = 'ru';
        language.textContent = 'Язык:';
        imgSource.textContent = 'Источник изображения:';
        imgTagLang.textContent = 'Тег изображения:';
        playerLang.textContent = 'Плеер';
        weatherLang.textContent = 'Погода';
        timeLang.textContent = 'Время';
        dateLang.textContent = 'Дата';
        greetingLang.textContent = 'Приветствие';
        quotesLang.textContent = 'Цитаты';
        toDoLang.textContent = 'Список дел';
    }
    showName();
    getRandomQuoteNum();
    getQuotes();
    getWeather();
    setTimeout(changeLanguage, 1800000);
}

function changeImageSource() {
    if (gitHub.checked) {
        imageSource = 'github';
        getRandomNum();
        setBgImage();
    } else if (unsplash.checked) {
        imageSource = 'unsplash';
        if (imageTag.value === 'morning' || imageTag.value === 'afternoon' || imageTag.value === 'evening' || imageTag.value === 'night') {
            imageTag.value = getTimeOfDay();
        }
        getLinkToImageUnsplash();
    } else if (flickr.checked) {
        imageSource = 'flickr';
        getTimeOfDay();
        getRandomNumFlickr();
        getLinkToImageFlickr();
    }
    setTimeout(changeImageSource, 1800000);
}

function showHideBlocks() {
    if (localStorage.getItem('playerState') === 'true') {
        playerHide.classList.remove('hidden');
    } else if (localStorage.getItem('playerState') === 'false') {
        playerSetting.checked = false;
        playerHide.classList.add('hidden');
    } else if (localStorage.getItem('playerState') === null) {
        playerHide.classList.remove('hidden');
    }

    if (localStorage.getItem('weatherState') === 'true') {
        weatherHide.classList.remove('hidden');
    } else if (localStorage.getItem('weatherState') === 'false') {
        weatherSetting.checked = false;
        weatherHide.classList.add('hidden');
    } else if (localStorage.getItem('weatherState') === null) {
        weatherHide.classList.remove('hidden');
    }

    if (localStorage.getItem('timeState') === 'true') {
        timeHide.classList.remove('hidden');
    } else if (localStorage.getItem('timeState') === 'false') {
        timeSetting.checked = false;
        timeHide.classList.add('hidden');
    } else if (localStorage.getItem('timeState') === null) {
        timeHide.classList.remove('hidden');
    }

    if (localStorage.getItem('dateState') === 'true') {
        dateHide.classList.remove('hidden');
    } else if (localStorage.getItem('dateState') === 'false') {
        dateSetting.checked = false;
        dateHide.classList.add('hidden');
    } else if (localStorage.getItem('dateState') === null) {
        dateHide.classList.remove('hidden');
    }

    if (localStorage.getItem('greetingState') === 'true') {
        greetingHide.classList.remove('hidden');
    } else if (localStorage.getItem('greetingState') === 'false') {
        greetingSetting.checked = false;
        greetingHide.classList.add('hidden');
    } else if (localStorage.getItem('greetingState') === null) {
        greetingHide.classList.remove('hidden');
    }

    if (localStorage.getItem('quotesState') === 'true') {
        quotesHide.classList.remove('hidden');
    } else if (localStorage.getItem('quotesState') === 'false') {
        quotesSetting.checked = false;
        quotesHide.classList.add('hidden');
    } else if (localStorage.getItem('quotesState') === null) {
        quotesHide.classList.remove('hidden');
    }

    if (localStorage.getItem('toDoState') === 'true') {
        toDoHide.classList.remove('hidden');
    } else if (localStorage.getItem('toDoState') === 'false') {
        toDoSetting.checked = false;
        toDoHide.classList.add('hidden');
    } else if (localStorage.getItem('toDoState') === null) {
        toDoHide.classList.remove('hidden');
    }
}

window.addEventListener('load', changeImageSource);
window.addEventListener('load', changeLanguage);
window.addEventListener('load', showHideBlocks);


//Time and date

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
let timeOfDay;

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 200);
}
window.addEventListener('load', showTime)

function showDate() {
        const dateNow = new Date();
        const options = {weekday: 'long', month: 'long', day: 'numeric'};
        const currentDate = dateNow.toLocaleDateString(`${lang}`, options);
        date.textContent = currentDate;
}


//Greeting

function getTimeOfDay() {
    const dateGreeting = new Date();
    const hours = dateGreeting.getHours();
    if (hours >= 6 && hours < 12) {
            timeOfDay = 'morning';
    } else if (hours >= 12 && hours < 18) {
            timeOfDay = 'afternoon';
    } else if (hours >= 0 && hours < 6) {
            timeOfDay = 'night';
    } else {
            timeOfDay = 'evening';
    }
    return timeOfDay
}

function showGreeting() {
    if (lang === 'en') {
        return greeting.textContent = `Good ${getTimeOfDay()},`;
    } else {
        return greeting.textContent = `${getTimeOfDay() === 'morning' ? 'Доброе утро,'
        : getTimeOfDay() === 'afternoon' ? 'Добрый день,'
        : getTimeOfDay() === 'night' ? 'Доброй ночи,'
        : 'Добрый вечер,'}`;
    }
}


//Slider

const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
let bgNum;
let bgNumFlickr;

function getRandomNumFlickr() {
    bgNumFlickr = Math.floor(Math.random() * 19) + 1;
    return bgNumFlickr;
}

getRandomNumFlickr();

function getRandomNum() {
    bgNum = Math.floor(Math.random() * 20) + 1;
    if (bgNum < 10) {
        bgNum = bgNum.toString().padStart(2, '0');
    } else {
        bgNum = bgNum;
    }
    return bgNum;
}

getRandomNum();

async function getLinkToImageUnsplash() {
    try {
       const url = `https://api.unsplash.com/photos/random?query=${imageTag.value}&client_id=e91JftEtMd1gGS1xxMaZnIcrOuikCCDDoqsGYW_Kba0`;
        const res = await fetch(url);
        const data = await res.json();
        const img = new Image();
        img.src = data.urls.regular;
        img.onload = () => {
            body.style.backgroundImage = `url(${img.src})`;
        }
    } catch (err) {
        if (lang === 'en') {
            alert('Limit of images on Unsplash exceeded');
        } else {
            alert('Превышен лимит загрузки изображений с Unsplash');
        }
    }
}

imageTag.addEventListener('change', () => {
    const urlUnsplash = `https://api.unsplash.com/photos/random?query=${imageTag.value}&client_id=e91JftEtMd1gGS1xxMaZnIcrOuikCCDDoqsGYW_Kba0`;
    const urlFlickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=947b604066481b9610b661ad8bafdd69&tags=${imageTag.value}&extras=url_h&format=json&nojsoncallback=1`;
    if (imageSource === 'unsplash') {
        getLinkToImageUnsplash(urlUnsplash);
    } else if (imageSource === 'flickr') {
        getLinkToImageFlickr(urlFlickr);
    }
})

async function getLinkToImageFlickr() {
    try {
        getTimeOfDay() === 'morning' ? timeOfDay = '72157720948489038' : getTimeOfDay() === 'afternoon' ? timeOfDay = '72157720950783384' : getTimeOfDay() === 'evening' ? timeOfDay = '72157720950783869' : timeOfDay = '72157720954742506';
        const url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=947b604066481b9610b661ad8bafdd69&gallery_id=${timeOfDay}&extras=url_h&format=json&nojsoncallback=1`;
        if (!url) {
            getRandomNumFlickr();
        }
        const res = await fetch(url);
        const data = await res.json();
        const img = new Image();
        img.src = data.photos.photo[bgNumFlickr].url_h;
        img.onload = () => {
            body.style.backgroundImage = `url(${img.src})`;
        }
    } catch (err) {
        getRandomNumFlickr();
        imageTag.value = getTimeOfDay();
        getLinkToImageFlickr();
    }
}

function setBgImage() {
    const img = new Image();
    img.src = 'https://raw.githubusercontent.com/SergioAJS/stage1-tasks/assets/images/' + getTimeOfDay() + '/' + bgNum + '.jpg';
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    }
}

function getSlideNext() {
    bgNum++ < 20 ? bgNum = bgNum.toString().padStart(2, '0') : bgNum = '01';
    setBgImage()
}

function getSlidePrev() {
    bgNum-- > 1 ? bgNum = bgNum.toString().padStart(2, '0') : bgNum = '20';
    setBgImage()
}

function getSlideNextFlickr() {
    bgNumFlickr++ < 19 ? bgNumFlickr = bgNumFlickr : bgNumFlickr = 0;
    getLinkToImageFlickr();
}

function getSlidePrevFlickr() {
    bgNumFlickr-- > 0 ? bgNumFlickr = bgNumFlickr : bgNumFlickr = 19;
    getLinkToImageFlickr();
}

next.addEventListener('click', () => {
    if (imageSource === 'flickr') {
        getSlideNextFlickr();
    } else if (imageSource === 'github') {
        getSlideNext();
    } else {
        getLinkToImageUnsplash();
    }
})

prev.addEventListener('click', () => {
    if (imageSource === 'flickr') {
        getSlidePrevFlickr();
    } else if (imageSource === 'github') {
        getSlidePrev();
    } else {
        getLinkToImageUnsplash();
    }
})


//Weather

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const error = document.querySelector('.weather-error');

async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=b9eda3181ded6f69046a91f386f61508&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        city.placeholder = '';
        weatherIcon.classList.add('weather-icon');
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        weatherIcon.classList.add(`owf`);
        weatherIcon.classList.remove('null')
        temperature.textContent = `${Math.round(data.main.temp)}°C,`;
        weatherDescription.textContent = data.weather[0].description;
        if (lang === 'en') {
            windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
        } else {
            windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
            humidity.textContent = `Влажность: ${data.main.humidity}%`;
        }
        error.textContent = null;
    } catch (err) {
        if (localStorage.getItem('city') == '') {
            if (lang === 'en') {
                error.textContent = `Error! Enter city, please`;
                city.placeholder = 'Enter city';
                } else {
                    error.textContent = `Ошибка! Укажите город, пожалуйста`;
                    city.placeholder = 'Укажите город';
                    }
        } else {
            if (lang === 'en') {
                error.textContent = `Error! City not found "${city.value}"`;
            } else {
                error.textContent = `Ошибка! Город не найден "${city.value}"`;
            }
        }
        temperature.textContent = null;
        weatherDescription.textContent = null;
        windSpeed.textContent = null;
        humidity.textContent = null;
        weatherIcon.classList = null;
    }
}

city.addEventListener('change', () => {
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.setItem('city', city.value) || 'Madrid'}&lang=${lang}&appid=b9eda3181ded6f69046a91f386f61508&units=metric`;
    getWeather(url);
})


//Quotes

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let quoteNum;

function getRandomQuoteNum() {
    quoteNum = Math.floor(Math.random() * 100) + 1;
    return quoteNum;
}

getRandomQuoteNum();

async function getQuotes() {
    let quotes;
    if (lang === 'en') {
        quotes = './src/quotes_en.json';
    } else if (lang === 'ru') {
        quotes = './src/quotes_ru.json';
    }
    const res = await fetch(quotes);
    const data = await res.json();

    quote.textContent = `"${data[quoteNum].text}"`;
    author.textContent = `${data[quoteNum].author}`;
}

changeQuote.addEventListener('click', () => {
    getRandomQuoteNum();
    getQuotes();
})


//Audio player

const playList = [
    {
        title: 'Aqua Caelestis',
        src: './assets/sounds/Aqua Caelestis.mp3',
        duration: '00:58'
    },
    {
        title: 'River Flows In You',
        src: './assets/sounds/River Flows In You.mp3',
        duration: '03:50'
    },
    {
        title: 'Ennio Morricone',
        src: './assets/sounds/Ennio Morricone.mp3',
        duration: '03:50'
    },
    {
        title: 'Summer Wind',
        src: './assets/sounds/Summer Wind.mp3',
        duration: '03:50'
    }
]

let isPlay = false;
const play = document.querySelector('.play');
const nextTrack = document.querySelector('.play-next');
const prevTrack = document.querySelector('.play-prev');
const playListContent = document.querySelector('.play-list');
const seekBar = document.querySelector('.seek-bar');
const trackTime = document.querySelector('.track-time');
const trackTitle = document.querySelector('.current-track');
const trackDuration = document.querySelector('.track-duration');
const volumeSlider = document.querySelector(".volume-slider");
const audio = new Audio();
let currentTrack = 0;

play.addEventListener('click', playAudioButton);

nextTrack.addEventListener('click', () => {
    setInterval(function() {
        trackDuration.textContent = `${getTimeCodeFromNum(audio.currentTime)} / ${getTimeCodeFromNum(audio.duration)}`;
        trackTime.style.width = (audio.currentTime * 100) / audio.duration + '%'
        if (audio.currentTime === audio.duration) {
            playNext();
            playAudio();
            active();
        }
    }, 50)
    playNext();
    playAudio()
    active()
})

prevTrack.addEventListener('click', () => {
    setInterval(function() {
        trackDuration.textContent = `${getTimeCodeFromNum(audio.currentTime)} / ${getTimeCodeFromNum(audio.duration)}`;
        trackTime.style.width = (audio.currentTime * 100) / audio.duration + '%'
        if (audio.currentTime === audio.duration) {
            playNext();
            playAudio();
            active();
        }
    }, 50)
    playPrev();
    playAudio()
    active()
})

seekBar.addEventListener("click", mouseEvent => {
    const seekBarWidth = window.getComputedStyle(seekBar).width;
    const timeToSeek = mouseEvent.offsetX / parseInt(seekBarWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

volumeSlider.addEventListener('click', event => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = event.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    volumeSlider.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)

document.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = document.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
});

function formPlayList() {
    playList.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = el.title;
        playListContent.append(li);
    })
}

formPlayList();

const currentItem = document.querySelectorAll('.play-item');

function playAudio() {
    audio.src = playList[currentTrack].src;
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function playAudioButton() {
    play.classList.toggle('pause');
    if (!isPlay) {
        playAudio()
        isPlay = true;
        trackTitle.textContent = playList[currentTrack].title;
        setInterval(function() {
            trackDuration.textContent = `${getTimeCodeFromNum(audio.currentTime)} / ${getTimeCodeFromNum(audio.duration)}`;
            trackTime.style.width = (audio.currentTime * 100) / audio.duration + '%'
            if (audio.currentTime === audio.duration) {
                playNext();
                playAudio();
                active();
            }
        }, 50)
    } else {
        pauseAudio();
        isPlay = false;
    }
    active()
}

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}

function playNext() {
    if (currentTrack < playList.length - 1) {
        currentTrack++;
    } else {
        currentTrack = 0;
    }
    isPlay = true;
    trackTitle.textContent = playList[currentTrack].title;
    play.classList.add('pause');
}

function playPrev() {
    if (currentTrack > 0) {
        currentTrack--
    } else {
        currentTrack = playList.length - 1;
    }
    isPlay = true;
    trackTitle.textContent = playList[currentTrack].title;
    play.classList.add('pause');
}

function active() {
    for (let i = 0; i < playList.length; i++) {
        if(i === currentTrack) {
            currentItem[i].classList.add('item-active');
        };
        if(i != currentTrack) {
            currentItem[i].classList.remove('item-active')
        }
    }
}


//TODO List

const toDoButton = document.querySelector('.todo-button');
const toDoMenu = document.querySelector('.todo-wrapper');

toDoButton.addEventListener('click', () => toDoMenu.classList.toggle('todo-wrapper-active'));

const input = document.querySelector('.new-task-input');
const form = document.querySelector('#new-task-form');
const listItems = document.querySelector('#tasks');
let toDos;

function checkToDoInLocalStorage() {
    if (localStorage.getItem('toDos') === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }
}

window.addEventListener('load', getToDos);
window.addEventListener('load', addNewTask);

function addNewTask () {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            input.placeholder = 'Please fill the task'
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.classList.add('task');

        const taskItemContent = document.createElement('div');
        taskItemContent.classList.add('content');

        taskItem.appendChild(taskItemContent);

        const taskInputItem = document.createElement('input');
        taskInputItem.classList.add('task-text');
        taskInputItem.type = 'text';
        taskInputItem.value = task;

        saveLocalToDos(taskInputItem.value);

        taskInputItem.setAttribute('readonly', 'readonly');

        taskItemContent.appendChild(taskInputItem);

        const taskItemActions = document.createElement('div');
        taskItemActions.classList.add('actions');

        const taskItemEdit = document.createElement('button');
        taskItemEdit.classList.add('edit');
        taskItemEdit.innerText = 'Edit';

        const taskItemDelete = document.createElement('button');
        taskItemDelete.classList.add('delete');
        taskItemDelete.innerText = 'Delete';

        taskItemActions.appendChild(taskItemEdit);
        taskItemActions.appendChild(taskItemDelete);

        taskItem.appendChild(taskItemActions);

        listItems.appendChild(taskItem);

        input.value = '';

        taskItemEdit.addEventListener('click', () => {
            if (taskItemEdit.innerText === 'Edit') {
                taskInputItem.removeAttribute('readonly');
                taskInputItem.focus();
                taskItemEdit.innerText = "Save";
                removeLocalToDos(task);
            } else {
                taskInputItem.setAttribute('readonly', 'readonly');
                saveLocalToDos(taskInputItem.value);
                taskItemEdit.innerText = 'Edit';
            }
        })

        taskItemDelete.addEventListener('click', () => {
            listItems.removeChild(taskItem);
            removeLocalToDos(task);
        })
    });
}

function getToDos() {
    checkToDoInLocalStorage();

    toDos.forEach(function(toDo) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');

        const taskItemContent = document.createElement('div');
        taskItemContent.classList.add('content');

        taskItem.appendChild(taskItemContent);

        const taskInputItem = document.createElement('input');
        taskInputItem.classList.add('task-text');
        taskInputItem.type = 'text';
        taskInputItem.value = toDo;
        taskInputItem.setAttribute('readonly', 'readonly');

        taskItemContent.appendChild(taskInputItem);

        const taskItemActions = document.createElement('div');
        taskItemActions.classList.add('actions');

        const taskItemEdit = document.createElement('button');
        taskItemEdit.classList.add('edit');
        taskItemEdit.innerText = 'Edit';

        const taskItemDelete = document.createElement('button');
        taskItemDelete.classList.add('delete');
        taskItemDelete.innerText = 'Delete';

        taskItemActions.appendChild(taskItemEdit);
        taskItemActions.appendChild(taskItemDelete);

        taskItem.appendChild(taskItemActions);

        listItems.appendChild(taskItem);

        taskItemEdit.addEventListener('click', () => {
            if (taskItemEdit.innerText === 'Edit') {
                taskInputItem.removeAttribute('readonly');
                taskInputItem.focus();
                removeLocalToDos(toDo);
                taskItemEdit.innerText = "Save";
            } else {
                taskInputItem.setAttribute('readonly', 'readonly');
                saveLocalToDos(taskInputItem.value);
                taskItemEdit.innerText = 'Edit';
            }
        })

        taskItemDelete.addEventListener('click', () => {
            listItems.removeChild(taskItem);
            removeLocalToDos(toDo);
        })
    })
}

function saveLocalToDos(toDo) {
    checkToDoInLocalStorage();

    toDos.push(toDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function removeLocalToDos(toDo) {
    checkToDoInLocalStorage();

    toDos.splice(toDos.indexOf(toDo), 1);
    localStorage.setItem('toDos', JSON.stringify(toDos));
}
