const app = Vue.createApp({
    data() {
        return {
            x: '',
            y: '',
            hasil: "Belum ada hasil"
        }
    },
    methods: {
        tambah() {
            this.hasil = parseFloat(this.x) + parseFloat(this.y);

        },
        kurang() {
            this.hasil = parseFloat(this.x) - parseFloat(this.y);
        },
        kali() {
            this.hasil = parseFloat(this.x) * parseFloat(this.y);
        },
        bagi() {
            this.hasil = parseFloat(this.x) / parseFloat(this.y);
        }
    }
})
app.mount('#app')
