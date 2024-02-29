const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      confirmName:"",
      name:"",
      changeName:"",
      htmlVlaue:"<h1>Abhinaw Kumar html</h1>"
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
    },
    onChangeName(event){
      
      this.changeName=event.target.value;
    },
    onChangeNameX(event){
      console.log('calll')
      this.changeName=event.target.value+"X";
    },
    onResetName(){
      this.changeName="";
    }
  },
});


app.mount("#events");
