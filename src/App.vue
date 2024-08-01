<template>
  <h1>Hello</h1>
  <button @click="addTodoBtn">Ekle</button>
  <button @click="store.$reset">Resetle</button>
  <span v-for="i in list" :key="i.id">{{ i.description  }} -- {{ store.id }}</span>
  <h2> Toplam Eleman : {{ store.todoListCount }}</h2>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useTodoListStore } from './stores/counter';
export default {
  name: "App",
  setup(){
    // getters işlemi için computed içine almadan yazılır
    // $reset işlemi ile store'u ilk haline getirir
    // {list} aslında bizim useTodoListStore'de yer alan elemana işaret eder
      const store = useTodoListStore();
      const { list } = storeToRefs(store);
       
      const addTodoBtn = () => {
        let info = {
          description : "Furkan Turgut Vue.js Pinia Dersi - 1"
        }

        store.addTofo(info);
      }

      return {
        addTodoBtn,
        store,
        list
      }
  }
}
</script>

<style scoped>

</style>
