<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{this.$store.state.name}} {{way}}fdfs</router-link> |
      <router-link to="/about">{{this.$store.state.userData.color}}{{count}}{{this.go}}</router-link>|
      <router-link to="/tab">hhhohoh</router-link>
    </div>
    {{this.$store.state.name}} 
    <div class="code">
      <button @click="incre">{{this.$store.state.count}}{{go}}</button>
      <button @click="Action">{{this.$store.state.count}}{{go}}</button>
      <!-- <button @click=""></button> -->
      <code class="js">
        oneday you will make it up
        never mind just do it by yourself
        {{this.$store.getters.callYou}}
        {{this.$store.getters.maybe}}
      </code>
      <form action="" name="my">
        <input type="text" name="let1" >  
        <input type="password" name="let2" class="light">  
        <input type="radio" name="let3">  
        <input type="radio" name="let4" id="">
        <input type="radio" name="let4" id="">
        <input type="radio" name="let4" id="">
        <fieldset>
          <legend>checked</legend>
          <label for="">选择一</label><input type="checkbox">
          <label for="">选择二</label><input type="checkbox">
          <label for="">选择三</label><input type="checkbox">
          <input type="image">
        </fieldset>
        <fieldset>
          <legend>select</legend>
          <select name="select" id="" multiple size="4">

            <option value="choise0" disabled>请做出你的选择</option>
            <option value="choise1">你好好</option>
            <option value="choise2">宫斗你</option>
            <option value="choise3">促进简单</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>信息</legend>
          <div class="error" id="nono">fgsgfsfgs</div>
        </fieldset>
      </form>
    <router-link>走把</router-link>
    <div class="button">
      <button @click="formOne">表单</button>
      我真的好累啊
    </div>
    </div>
    <input type="text" v-model="message" placeholder="输入">{{message}}
    <router-view/>
    <pre>
      你好人生！
    </pre>
    你好思考着
  </div>
</template>
<script>
export default {
  data(){
    return{
      way: "hahahah",
      go :"go",
      message:"",
      select: ""
    }
  },
  computed:{
    count(){
      return this.way + this.go
    },
    lio(){
      return 444 + 233
    }
  },
  mounted(){
    this.formOne()
    this.goT()
  },
  methods:{
    incre(){
      this.$store.commit("increment")
    },
    goT(){
      this.go = this.go + "gooo"
      console.log("你做了点击")
    },
    Action(){
      this.$store.dispatch("actionA")
    },
    formOne(){
      const form = document.forms.my
      const let1 = form.elements.let1
      let1.classList.add("light")
      console.log(nono.innerHTML)
      // nono.innerHTML = "youname"
      let1.onblur = ()=>{
        if(!let1.value.includes("@")){
           nono.innerHTML = "youname"
           let1.classList.add("invalid")
           nono.style.color = "red"
        }
      }
      let1.onfocus = ()=>{
        if(!let1.classList.contains("invalid")){
           let1.classList.remove("invalid")
           nono.innerHTML ="fsfs"
        }
        console.log("go")
      }
      // er.innerHTML = "hogahoagh"
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
code{
  background-color:2px solid rgb(124, 94, 94, 0.2);
  color: red($color: #000000);
}
.light{
  border:2px solid rgb(124, 94, 94, 0.2);
  height: 2rem;
  width: 5rem;
}
</style>
