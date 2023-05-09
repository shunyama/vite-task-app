<template>
  <button @click="open = true">Open Modal</button>

  <!-- <div v-if="open" class="modal">
    <p>This is a modal!</p>
    <button @click="open = false">Close</button>
  </div> -->

  <teleport to="#my-modal">
    <div v-if="open" class="modal">
      <h2>This is a modal!</h2>
      <button @click="open = false">Close</button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const open = ref(false);
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 100;
  left: 10%;
  top: 10%;
  bottom: 10%;
  width: 80%;
  height: 80%;
  overflow: auto;
  text-align: center;
  background: grey;

  p {
    font-size: 32px;
  }
}
</style>
