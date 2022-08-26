const app = Vue.createApp({
   data() {
    return {
        showBooks: true,
        books :[
            {title: "name of the wind", author: "kovács béla"},
            {title: "name of the water", author: "kovács tamás"},
            {title: "name of the soil", author: "kovács lackó"},
        ]
    }
   },
   methods: {
    toggleShowBooks () {
        this.showBooks = !this.showBooks
    }
   }
})

app.mount("#app")