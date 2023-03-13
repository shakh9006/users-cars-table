<template>
  <div class="table-container">
    <easy-data-table
        theme-color="#1d90ff"
        table-class-name="customize-table"
        header-text-direction="center"
        body-text-direction="center"
        :headers="headers"
        :items="items"
        :rowsPerPage="10"
    >
    </easy-data-table>
  </div>
</template>

<script>
import EasyDataTable from 'vue3-easy-data-table'
export default {
  props: {
    headers: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
  },
  components: {
    EasyDataTable,
  },
  data() {
    return {}
  },
}
</script>

<style>
.table-container {
  padding: 0 25px;
}

.header-text {
  font-weight: 700;
}

.customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #ffffff;
  --easy-table-body-row-hover-background-color: #4c5d7a;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #2d3a4f;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;


  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
