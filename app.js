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
        async getUser() {

            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            
            console.log(results);

            this.name = results[0].name.first
            this.lastName =  results[0].name.last
            this.mail = results[0].email
            this.gender =  results[0].gender
            this.photo = results[0].picture.large
        }
      }
}) 

app.mount('#app');