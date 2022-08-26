const app = Vue.createApp({
   data() {
    return {
        url : 'https://www.google.com',
        showBooks: true,
        books :[
            {title: "name of the wind", author: "kovács béla", img: "képek/barbar.png" ,isFav: true},
            {title: "name of the water", author: "kovács tamás", img: "képek/bob.png" ,isFav: false},
            {title: "name of the soil", author: "kovács lackó", img:"képek/boszorkany.png",isFav: true},
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