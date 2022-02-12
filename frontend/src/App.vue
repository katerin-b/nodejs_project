<template>
  <div v-if="!courses.length">
    Курсы загружаются...
  </div>
  <div v-else>
    <h2>Курсы</h2>
    <div v-for="(item, index) in courses" :key="index">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <p>{{ item.price }} руб.</p>
    </div>
  </div>
</template>

<script>
// index.js из папки node_modules подключится здесь
// (по axios станет доступна библиотека)
import axios from 'axios';


export default {
  name: 'App',
  data() {
    return {
      courses: []
    }
  },
  mounted() {
    axios.get('/all_courses')
        .then((response)=>{
          // если массив в таким виде, как нам нужен для отрисовки
          // тогда нам нужно положить полученные товары с сервера в нашу внутреннюю переменную
          this.courses = response.data;
        })
        .catch((error)=>{
          // handle error
          console.log(error);
        });
  }
}
</script>

<style>

</style>
