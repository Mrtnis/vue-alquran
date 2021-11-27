<template>
  <section class="surah-page py-5">
    <div class="container">
      <div class="salam">Assalamu'alaikum</div>
      <div class="name">{{ myName }}</div>
      <div class="row">
        <div class="col">
          <div class="container-image">
            <div class="wrap-current" v-if="currentAyat">
              <div class="last-read">Terakir dibaca :</div>
              <div class="current-surah">{{ currentAyat.surah }}</div>
              <div class="current-ayat">Ayat {{ currentAyat.ayat }}</div>
              <div class="btn btn-sm button-to-ayat" @click="goToCurrentSurah">Ke ayat <i class="bi-arrow-right ms-1"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-title">
        <div class="title">Pilih Surah</div>
        <div class="line"></div>
      </div>
      <router-link :to="`/ayat/${surah.number_of_surah}`" class="loop" v-for="surah in dataSurah" :key="surah.number_of_surah">
        <div class="flex-surah" :id="`${surah.number_of_surah}-${surah.name}`">
          <!-- left -->
          <div class="wrap-left">
            <div class="number">{{ surah.number_of_surah }}</div>
            <div class="wrap-name">
              <div class="name-surah">{{ surah.name }}</div>
              <div class="name-place">{{ surah.type }} - {{ surah.number_of_ayah }} Ayat</div>
            </div>
          </div>
          <!-- right -->
          <div class="arabic">{{ surah.name_translations.ar }}</div>
        </div>
        <hr />
      </router-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataSurah: [],
      myName: localStorage.getItem('myName'),
      currentAyat: JSON.parse(localStorage.getItem('currentAyat')),
    };
  },
  mounted() {
    this.checkName();
    this.getDataSurah();
  },
  methods: {
    checkName() {
      if (!this.myName || this.myName == '') {
        alert('Maaf, anda harus mengisi nama terlebih dahulu');
        this.$router.push({ name: 'home' });
      }
    },
    getDataSurah() {
      axios.get('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json').then(({ data }) => {
        this.dataSurah = data;
      });
    },
    goToCurrentSurah() {
      let numberSurah = this.currentAyat.numberSurah;
      let numberAyat = this.currentAyat.ayat;
      this.$router.push({
        path: `/ayat/${numberSurah}`,
        query: { currentAyat: numberAyat },
      });
    },
  },
};
</script>

<style scoped>
.surah-page {
  background-color: var(--text-color);
}
.salam {
  font-size: 20px;
  font-weight: 400;
}
.name {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
}
.container-image {
  width: 100%;
  height: 300px;
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  align-items: center;
  background-size: cover;
  background-position-y: -100px;
  background-image: url('https://www.islampos.com/wp-content/uploads/2019/01/alquran.jpg');
}
.wrap-current {
  margin-left: 30px;
  color: var(--text-color);
}
.current-surah {
  font-size: 30px;
  font-weight: 700;
}
.current-ayat {
  font-size: 20px;
}
.button-to-ayat {
  margin-top: 10px;
  font-weight: 700;
  border-radius: 10px;
  color: var(--primary-color);
  background-color: var(--text-color);
}
.flex-title {
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
}
.title {
  flex: 1;
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
}
.line {
  flex: 5;
  height: 1px;
  border-radius: 10px;
  background-color: var(--primary-color);
}
.loop {
  color: inherit;
  text-decoration: none;
}
.flex-surah,
.wrap-left {
  display: flex;
  align-items: center;
}
.flex-surah {
  margin-top: 50px;
  scroll-margin: 20px;
  justify-content: space-between;
}
.flex-surah:hover {
  padding: 15px;
  border-radius: 10px;
  transition: 0.3s ease;
  color: var(--text-color);
  background-color: var(--primary-color);
}
.number {
  width: 50px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  margin-right: 30px;
  border-radius: 50%;
  color: var(--text-color);
  background-color: var(--primary-color);
}
.name-surah {
  font-size: 24px;
  font-weight: 600;
}
.arabic {
  font-size: 30px;
  font-family: 'Arabic';
}

@media only screen and (max-width: 600px) {
  .container-image {
    height: 200px;
    background-position-y: 0;
    background-position-x: 10px;
  }
  .last-read {
    font-size: 15px;
  }
  .current-surah {
    font-size: 20px;
  }
  .current-ayat {
    font-size: 16px;
  }
  .title {
    flex: 1;
  }
  .line {
    flex: 1.5;
  }
  .flex-surah {
    margin-left: 5px;
    margin-right: 5px;
  }
  .number {
    width: 40px;
    height: 40px;
    font-size: 15px;
    line-height: 40px;
    margin-right: 15px;
  }
}
</style>
