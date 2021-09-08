<template>
  <no-ssr>
    <v-col>
      <v-row>
        <Orders/>
      </v-row>
    </v-col>
  </no-ssr>
</template>

<script>
import Orders from '@/components/products/Orders.vue'
// import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: {
    Orders,
  },
  // computed: {
  //   // allOrders() {
  //   //   return this.$store.getters.allOrders
  //   // }
  //   ...mapGetters('orders', ['allOrders'])
  // },
  // methods: {
  //   ...mapActions('orders', ['fetchOrders'])
  // },
  // async mounted() {
  //   // this.$store.dispatch('fetchOrders')
  //   await this.fetchOrders()
  //   console.log(this.allOrders)
  // },
}

</script>
