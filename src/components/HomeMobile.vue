<template>
  <div class="mobile">
    <div class="container col-11">
      <div class="row">
        <div class="col">
          <div class="title">Assalamu'alaikum.</div>
          <div class="subtitle mb-4">Selamat datang teman-teman muslim</div>
          <div class="card-image-mobile"></div>
          <div class="add-name">Silahkan isi nama anda pada form dibawah ini untuk melanjutkan ke halaman selanjutnya.</div>
          <input type="text" class="form-control" v-model="value" @keyup.enter="$emit('goToSurah')" />
          <div class="flex-button">
            <div class="btn button-primary" @click="$emit('goToSurah')">Lanjutkan</div>
          </div>
        </div>
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
.mobile {
  display: none;
}
.container {
  padding-top: 30px;
  padding-bottom: 30px;
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
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
}
.flex-button {
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
.card-image-mobile {
  height: 500px;
  border-radius: 10px;
  background-size: cover;
  background-position-x: -400px;
  background-image: url('https://www.islampos.com/wp-content/uploads/2019/01/alquran.jpg');
}

/* mobile */
@media only screen and (max-width: 600px) {
  .mobile {
    display: inline;
  }
  .add-name {
    width: 80%;
    text-align: justify;
  }
  .form-control {
    margin-top: 10px;
  }
}
</style>
