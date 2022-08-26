const app = Vue.createApp({
   data() {
    return {
        showBooks: true,
        title: "FInal emperior",
        author : "kovács pista",
        age : 12,
        x: 0,
        y:0
    }
   },
   methods: {
    toggleShowBooks () {
        this.showBooks = !this.showBooks
    },
    handleEvent(event, data) {
        console.log(event, event.type)
        if (data){
            console.log(data)
        }
    },
    handleMousemove(event){
        this.x = event.offsetX
        this.y = event.offsetY
    }
   }
})

app.mount("#app")