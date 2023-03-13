<template>
  <my-table
      :headers="headers"
      :items="items"
  />
</template>

<script>
import {mapGetters} from "vuex";
import MyTable from "@/components/Table.vue";

export default {
  components: {
    MyTable,
  },
  data() {
    return {}
  },

  methods: {
    makeTitle(slug) {
      const words = slug.split('_');
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.toUpperCase();
      }

      return words.join(' ');
    }
  },

  computed: {
    ...mapGetters([
      'getUsers'
    ]),

    headers() {
      const users = this.getUsers
      if (users.length === 0) {
        return []
      }
      return Object.keys(users[0]).map(t => ({text: this.makeTitle(t), value: t, sortable: true}))
    },

    items() {
      return this.getUsers || []
    }
  },
}
</script>
