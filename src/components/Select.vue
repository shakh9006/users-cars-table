<template>
  <label class="select">
    <select required="required" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      <option value="" disabled="disabled" selected="selected">{{ placeholder }}</option>
      <option value="all">All</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
    <svg>
      <use xlink:href="#select-arrow-down"></use>
    </svg>
  </label>
  <svg class="sprites">
    <symbol id="select-arrow-down" viewbox="0 0 10 6">
      <polyline points="1 1 5 5 9 1"></polyline>
    </symbol>
  </svg>
</template>

<script>
export default {
  props: ['modelValue', 'placeholder', 'options'],
  emits: ['update:modelValue'],
  data() {
    return {}
  },
}
</script>

<style scoped>
.select {
  position: relative;
  width: 200px;
  box-sizing: border-box;
}
.select svg {
  position: absolute;
  right: 12px;
  top: calc(50% - 3px);
  width: 10px;
  height: 6px;
  stroke-width: 2px;
  stroke: #9098a9;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}
.select select {
  max-width: 200px;
  -webkit-appearance: none;
  padding: 7px 40px 7px 12px;
  width: 100%;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
}
.select select:required:invalid {
  color: #5a667f;
}
.select select option {
  color: #223254;
}
.select select option[value=""][disabled] {
  display: none;
}
.select select:focus {
  outline: none;
  border-color: #07f;
  box-shadow: 0 0 0 2px rgba(0,119,255,0.2);
}
.select select:hover + svg {
  stroke: #07f;
}
.sprites {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}

</style>
