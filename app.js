const app = Vue.createApp({
   data() {
    return {
        title: "FInal emperior",
        author : "kovács pista",
        age : 12
    }
   },
   methods: {
    changeTitle(title) {
        this.title = title
    }
   }
})

app.mount("#app")