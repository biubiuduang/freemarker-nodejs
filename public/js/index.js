window.onload = function(){
  common.init();
};

const common = {
  params: {
    a : 123456
  },
  init: function(){
      this.test();
  },
  test: function(){
    console.log(this.params.a); // whb-lg
  }
};

