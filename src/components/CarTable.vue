<template>
  <div>
    <div class="filter-wrapper">
      <CustomSelect :modelValue="brand" @update:modelValue="newValue => brand = newValue" :options="getBrandOptions" placeholder="Filter by brand"/>
      <CustomSelect :modelValue="model" @update:modelValue="newValue => model = newValue" :options="getModelOptions" placeholder="Filter by brand"/>
    </div>
    <my-table
        :headers="headers"
        :items="items"
    >
    </my-table>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import MyTable from "@/components/Table.vue";
import CustomSelect from "@/components/Select.vue";

export default {
  components: {
    MyTable,
    CustomSelect,
  },
  data() {
    return {
      brand: 'all',
      model: 'all',
    }
  },

  methods: {
    makeTitle(slug, del = '_', upperCase = true) {
      const words = slug.split(del);
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if ( upperCase ) {
          words[i] = word.toUpperCase();
        } else {
          words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
      }

      return words.join(' ');
    },

    makeSlug(title) {
      const words = title.split(' ');
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.toLowerCase();
      }

      return words.join('-');
    }
  },

  computed: {
    ...mapGetters([
      'getCars'
    ]),

    headers() {
      const cars = this.getCars
      if (cars.length === 0) {
        return []
      }
      return Object.keys(cars[0]).map(t => ({text: this.makeTitle(t), value: t, sortable: true}))
    },

    items() {
      let cars = this.getCars
      if ( this.brand === 'all' ) {
        if ( this.model === 'all' )
          return cars || []

        return cars.filter(c => this.makeSlug(c.model) === this.model)
      }

      if ( this.model === 'all' ) {
        return cars.filter(c => c.brand.toUpperCase() === this.makeTitle(this.brand))
      }

      return cars.filter(c => c.brand.toUpperCase() === this.makeTitle(this.brand) && this.makeSlug(c.model) === this.model)
    },

    getBrandOptions() {
      return [...new Set(this.getCars.map(c => c.brand))].map(v => ({label: v, value: this.makeSlug(v)}))
    },

    getModelOptions() {
      const filtered = this.getCars.filter(c => this.brand === 'all' ||  c.brand.toUpperCase() === this.makeTitle(this.brand)).map(c => c.model)
      return [...new Set(filtered)].map(v => ({label: v, value: this.makeSlug(v)}))
    },
  },
}
</script>

<style scoped>
.filter-wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 25px 20px;
  column-gap: 10px;
}
</style>