<template>
  <div class="text_group">
    <div class="input_group">
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @input="$emit('input', $event.target.value)"
      >
      <i :class="className"></i>
      <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
    </div>
    <div class="error">{{error}}</div>
  </div>
</template>

<script>
export default {
  name: "input_group",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: String,
    disabled: Boolean,
    btnTitle: String,
    error: String,
    name: String,
    className: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.input_group {
  position: relative;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input_group i {
  position: absolute;
  left: 10px;
  width:20px;
  height:20px;
}
.input_group input{
  height: 100%;
  width: 60%;
  border: none;
  outline: none;
  margin-left: 20px;
}
/* .input_group input::placeholder{
  text-indent: 20px;
} */
.error {
  padding-top: 5px;
  color: red;
}
</style>
