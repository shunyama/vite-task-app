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

<style scoped>
.modal {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  text-align: center;
  padding-top: 10%;
  background: grey;
}
</style>
