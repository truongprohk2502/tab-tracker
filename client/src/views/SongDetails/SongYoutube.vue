<script setup lang="ts">
defineProps<{
  youtubeId: string | undefined;
}>();
</script>

<template>
  <div class="metadata-container">
    <div class="title">Song Youtube</div>
    <div class="content" v-if="youtubeId">
      <iframe width="800" height="330" :src="`https://www.youtube.com/embed/${youtubeId}`" />
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
</style>
