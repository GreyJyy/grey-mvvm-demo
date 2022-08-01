//创建Vue实例
class Vue {
  constructor(options = {}) {
    //实例添加属性
    this.$el = options.el
    this.$data = options.data
    this.$methods = options.methods
    //监视data中的数据
    new Observe(this.$data)
    if (this.$el) {
      //Compile负责解析模板内容
      new Compile(this.$el, this)
    }
  }
}
