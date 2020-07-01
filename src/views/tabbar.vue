<template>
  <div class="tab">
    this is a tabbar {{boy}}
  </div>
</template>
<script>
export default {
  name: tab,
  data(){
    return {
      boy: "gotodo",
    }
  },
  methods: {
    go(){
      // return this.gotodo += "make it"
      const promise = new Promise()
      promise((res, rej)=>{
        const ajax = new XMLHttpRequest()
        ajax.open("GET","/api/yourpath")
        ajax.send()
        ajax.onreadystatechange = ()=>{
          if(ajax.readyState  === 4){
            if(ajax.status === 200){
              res(ajax.responseText)
            }
          }else{
            rej(ajax.status)
          }
        }
      }).then((res)=>{
        console.log(res)
      })
    },
  
  }
}
</script>
