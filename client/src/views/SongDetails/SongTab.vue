<script setup lang="ts">
defineProps<{
  tab: string | undefined;
}>();
</script>

<template>
  <div class="metadata-container">
    <div class="title">Song Tab</div>
    <div class="content" v-if="tab">
      <p v-html="tab" />
    </div>
  </div>
</template>

<style scoped>
.title {
  background-color: #29b6f6;
  padding: 0.5rem 1rem;
  color: white;
}
.metadata-container {
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
}
.content {
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgrey;
}
p {
  white-space: pre-line;
}
</style>
