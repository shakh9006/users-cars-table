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
      'getCars',
      'getUsers'
    ]),

    getData() {
      return this.getCars.map((c, idx) => ({...c, ...this.getUsers[idx]}))
    },

    headers() {
      if (this.getCars.length === 0) {
        return []
      }
      const data = this.getData
      return Object.keys(data[0]).map(t => ({text: this.makeTitle(t), value: t, sortable: true}))
    },

    items() {
      return this.getData || []
    }
  },
}
</script>
