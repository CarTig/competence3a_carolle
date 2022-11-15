const { createApp } = Vue
createApp({
  data(){
    return{
      products:[
        'Découverte des plantes',
        'Plantes sur mesure',
      ]
    }
  }

}).mount('#app')



createApp({
    data () {
        return {
            items: []
        }
    },

    mounted () {
        axios
        .get('products.json')
        .then(response => (this.items = response.data.items))
    }


}).mount('#app1')