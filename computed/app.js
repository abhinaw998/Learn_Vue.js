const app = Vue.createApp({
  data() {
    return {
      name: "",
      counter:0,
    };
  },

  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    onNameChange(event) {
      this.name = event.target.value ;
    },
    getFullName() {
      console.log("calling")
      if (this.name === "") return "";
      return this.name + " " + "Kumar";
    },
  },
  computed: {
    fullName() {
      console.log("calling computed")
      return this.name + " " + "Kumar";
    },
  },
});

app.mount("#events");
