const app = Vue.createApp({
   data() {
    return {
        showBooks: true,
        title: "FInal emperior",
        author : "kovács pista",
        age : 12
    }
   },
   methods: {
    toggleShowBooks () {
        this.showBooks = !this.showBooks
    }
   }
})

app.mount("#app")