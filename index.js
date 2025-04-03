import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "FrappeGantt",
  setup() {
    onMounted(() => {
      console.log("FrappeGantt component mounted!");
    });
    return () => null;
  }
});


