Vue.createApp({
  // data:function(){

  // }
  // this is the one of the pre define property of vue js wchich is use to  get and pas the value in shtml
  data: () => {
    return {
      goals: [],
      enteredValue: "",
    };
    s;
  },
  // this is the one of the pre define property of vue js wchich is use to define the method is used in html
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
