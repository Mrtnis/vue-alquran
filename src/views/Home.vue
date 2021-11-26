<template>
  <div class="home-page">
    <!-- website -->
    <HomeWeb @goToSurah="goToSurah" v-model="muslimName" />

    <!-- mobile -->
    <HomeMobile @goToSurah="goToSurah" v-model="muslimName" />
  </div>
</template>

<script>
import HomeWeb from '../components/HomeWeb.vue';
import HomeMobile from '../components/HomeMobile.vue';

export default {
  components: {
    HomeWeb,
    HomeMobile,
  },
  data() {
    return {
      muslimName: '',
    };
  },
  mounted() {
    this.checkName();
  },
  methods: {
    goToSurah() {
      if (this.muslimName == '') {
        alert('Maaf, nama tidak boleh kosong');
      } else {
        localStorage.setItem('myName', this.muslimName);
        alert('Selamat, nama anda telah terdaftar');
        this.$router.push({ name: 'surah' });
      }
    },
    checkName() {
      let name = localStorage.getItem('myName');
      if (name) {
        this.$router.push({ name: 'surah' });
      }
    },
  },
};
</script>

<style>
.home-page {
  background-color: var(--text-color);
}
</style>
