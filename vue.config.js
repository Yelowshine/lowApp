module.exports = {
  // chainWebpack: config =>{
  //   config.when(process.env.NODE_ENV === "production", config =>{
  //     config
  //       .entry("App")
  //       .clear()
  //       .add("./src/main-pro")
      
  //     // 外部cdn资源托管
  //     config.set("externals",{
  //       // vue: "vue",

  //     })
  //     config.plugin("html").tap(args =>{
  //       args[0].isProd = true
  //       return args
  //     })
  //   })
  //   config.when(process.env.NODE_ENV === "development", config=>{
  //     config
  //       .entry("App")
  //       .clear()
  //       .add("./src/main.js")
      
  //     config.set("externals", {
  //       // vue: "vue",
  //       // vant: "vant"
  //     })

  //     config.plugin("html").tap(args =>{
  //       args[0] = false
  //       return args
  //     })
  //   })
  // },
  configureWebpack: {
    resolve: {
      // 配置路径别名
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
}