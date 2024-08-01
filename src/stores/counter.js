import { defineStore } from 'pinia'

export const  useTodoListStore = defineStore( "todoListStore", {
  state: () => ({
    list: [],
    id: 0
  }),
  getters: {
    todoListCount() {
      return this.list.length;
    }
  },
  actions: {
    addTofo(item) {
      // this.id++ örneğinde oldupu gibi erişim belirleyici olarak burada da this kullanılır
      this.list.push(item);
      this.id++;
    }
  }
});
