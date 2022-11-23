const app = Vue.createApp({
    data() {
        return {
          name: 'Luigi',
          lastName: 'Rodriguez',
          mail: 'jl.rodrigueze@hotmail.com',
          gender: 'male',
          photo: 'https://randomuser.me/api/portraits/men/0.jpg'

        }
      },
      methods: {
        getUser() {
            this.name = 'Danna'
            this.lastName =  'Hernandez'
            this.mail = 'dp.hernandezb@hotmail.com'
            this.gender =  'female'
            this.photo = 'https://randomuser.me/api/portraits/women/57.jpg'
        }
      }
}) 

app.mount('#app');