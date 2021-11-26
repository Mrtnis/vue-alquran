<template>
  <section class="ayat-page py-5">
    <div class="container">
      <!-- back and title -->
      <div class="flex-title">
        <i class="bi-arrow-left" @click="$router.go(-1)"></i>
        <div class="title">
          {{ dataAyat.name }} <span class="verse">| {{ dataAyat.type }} - {{ dataAyat.number_of_ayah }} Ayat</span>
        </div>
      </div>
    </div>
    <!-- basmalah and meaning -->
    <div class="basmalah">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
    <div class="container">
      <div class="basmalah-meaning">
        Dengan menyebut nama Allah Yang <br />
        Maha Pengasih lagi Maha Penyayang
      </div>
      <div class="play-audio btn" @click="playMurottal(`${dataAyat.recitations[0].audio_url}`)">
        <template v-if="isPlay"> Berhenti <i class="bi-stop-fill"></i> </template>
        <template v-else> Putar Murottal <i class="bi-play-fill"></i> </template>
      </div>
      <div class="loop" v-for="ayat in dataAyat.verses" :key="ayat.number">
        <!-- number and icon -->
        <div class="flex-number">
          <div class="number">{{ ayat.number }}</div>
          <div class="flex-icon">
            <i class="bi-bookmark"></i>
          </div>
        </div>
        <!-- ayat and meaning -->
        <div class="arabic">
          {{ ayat.text }}
        </div>
        <div class="ayat-meaning">
          {{ ayat.translation_id }}
        </div>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataAyat: {},
      isPlay: false,
      isStop: false,
      numberSurah: this.$route.params.numberSurah,
    };
  },
  mounted() {
    this.getDataAyah();
  },
  methods: {
    getDataAyah() {
      axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${this.numberSurah}.json`).then(({ data }) => {
        this.dataAyat = data;
      });
    },
    playMurottal(audio) {
      this.isPlay = !this.isPlay;
      if (audio) {
        var murottal = new Audio(audio);
        if (this.isStop) {
          murottal.pause();
          murottal.currentTime = 0;
          this.isStop = false;
        } else {
          murottal.pause();
          this.isStop = true;
        }
      }
    },
  },
};
</script>

<style scoped>
.ayat-page {
  background-color: var(--text-color);
}
.flex-title {
  display: flex;
  align-items: center;
}
.bi-arrow-left {
  width: 50px;
  height: 50px;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
  margin-right: 10px;
  border-radius: 10px;
}
.bi-arrow-left:hover {
  transition: 0.3s ease;
  color: var(--text-color);
  background-color: var(--primary-color);
}
.title {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
}
.verse {
  font-weight: normal;
}
.basmalah {
  padding: 20px;
  font-size: 30px;
  margin-top: 50px;
  text-align: center;
  font-family: 'Arabic';
  color: var(--text-color);
  background-color: var(--primary-color);
}
.basmalah-meaning {
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 80px;
}
.play-audio {
  padding: 10px;
  font-size: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  color: var(--text-color);
  background-color: var(--primary-color);
}
.loop {
  margin-bottom: 50px;
}
.flex-number {
  display: flex;
  padding: 5px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  align-items: center;
  color: var(--text-color);
  justify-content: space-between;
  background-color: var(--primary-color);
}
.number {
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  border-radius: 50%;
  text-align: center;
  color: var(--primary-color);
  background-color: var(--text-color);
}
.flex-icon {
  padding: 10px 0;
}
.bi-bookmark {
  font-size: 20px;
}
.arabic {
  text-align: end;
  font-size: 28px;
  margin-bottom: 10px;
  font-family: 'Arabic';
}
</style>
