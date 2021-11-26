const HomeMixin = {
  emits: ['goToSurah', 'update:modelValue'],
  props: ['modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(v) {
        this.$emit('update:modelValue', v);
      },
    },
  },
};

export default HomeMixin;
