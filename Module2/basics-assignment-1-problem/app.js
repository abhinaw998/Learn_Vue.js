const app = Vue.createApp({
    data: () => {
        return {
            name:"Abhinaw Kumar",
            age:27,
            image:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        };
      },
      methods: {
        ageInFiveYear(){
            return this.age+5;
        },
        getRandomNumber(){
          const randomNumber = Math.random();
          return randomNumber;
        }
      },
})

app.mount("#assignment")