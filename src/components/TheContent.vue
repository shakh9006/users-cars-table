<template>
  <div class="wrapper">
    <RouterView/>
  </div>
</template>

<script>
import {RouterView} from "vue-router";
import {mapActions} from "vuex";

export default {
  mounted() {
    this.$store.dispatch('initData')
  },

  methods: {
    ...mapActions([
      'initData'
    ])
  }
}
</script>