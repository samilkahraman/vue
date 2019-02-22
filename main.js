var app = new Vue({
    el: '#app',
    data: {
        product: 'Boots',
        image: 'N0D10k7T.jpeg',
        link:'http://kahramanlar.com.tr',
        inventory: 7,
        abc: ["coton", "polyester", "gender"],
        cart:0,
        variants:[
          {
            variantId:2234,
            variantColor: "green",
            variantImage:"N0D10k7T.jpeg"
          },
          {
            variantId:2235,
            variantColor: "blue",
            variantImage:"image.png"
          }
        ]
    },
    methods:{
      addToCart: function(){
        this.cart +=1
      },
      update: function(variantImage){
        this.image = variantImage
      }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })