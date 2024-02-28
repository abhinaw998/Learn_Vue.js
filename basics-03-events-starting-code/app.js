const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      confirmName:"",
      name:"",
    };
  },
  methods: {
    add(num) {
      this.counter=this.counter+num;
    },
    reduce(num) {
      this.counter=this.counter-num;
    },
    onNameChange(event, lastanme){
this.name=event.target.value+" "+lastanme;
    },
    onConfirmName(){
      this.confirmName=this.name;
    },
     onSave(){
this.confirmName=this.name
    },
    onFormNameChange(event){
      this.name=event.target.value
    }
  },
});

app.mount("#events");
