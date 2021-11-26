<template>
  <div class="container website">
    <div class="row">
      <div class="col-md-6">
        <div class="title">Assalamu'alaikum.</div>
        <div class="subtitle">Selamat datang teman-teman muslim</div>
        <div class="add-name">
          Silahkan isi nama anda <br />
          pada form dibawah ini untuk <br />
          melanjutkan ke halaman selanjutnya.
        </div>
        <input type="text" class="form-control" v-model="value" @keyup.enter="$emit('goToSurah')" />
        <div class="flex-button">
          <div class="btn button-primary" @click="$emit('goToSurah')">Lanjutkan</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeMixin from '../mixin/Home';

export default {
  mixins: [HomeMixin],
};
</script>

<style scoped>
.container {
  padding-top: 60px;
  padding-bottom: 60px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-color);
}
.add-name {
  margin-top: 50px;
}
.form-control {
  width: 80%;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
}
.flex-button {
  width: 80%;
  display: flex;
  justify-content: center;
}
.button-primary {
  margin-top: 20px;
  padding-top: 10px;
  padding-left: 50px;
  border-radius: 10px;
  padding-right: 50px;
  padding-bottom: 10px;
  color: var(--text-color);
  background-color: var(--primary-color);
}
.button-primary:hover {
  color: var(--primary-color);
  background-color: var(--text-color);
  border: 1px solid var(--primary-color);
}
.card-image {
  width: 80%;
  height: 500px;
  border-radius: 10px;
  background-size: cover;
  background-position-x: -250px;
  background-image: url('https://www.islampos.com/wp-content/uploads/2019/01/alquran.jpg');
}

@media only screen and (max-width: 600px) {
  .website {
    display: none;
  }
}
</style>
