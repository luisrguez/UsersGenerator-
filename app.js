const app = Vue.createApp({
    data() {
        return {
          name: 'Luigi',
          lastName: 'Rodriguez',
          mail: 'jl.rodrigueze@hotmail.com',
          gender: 'male',
          photo: 'https://randomuser.me/api/portraits/men/0.jpg'

        }
      }
}) 

app.mount('#app');