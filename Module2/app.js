const app = Vue.createApp({
  data: () => {
    return {
      courseGoal: "Finish this course and learn vue",
      vueLink: "https://vuejs.org/guide/introduction.html",
    };
  },
  methods: {
    outputGoal(){
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Lern Vue!";
      } else {
        return "Master in vue!";
      }
    },
  },
});

app.mount("#user-goal");
