<script setup lang="ts">
import type { ISong } from "../SongsListView.vue";

defineProps<{
  song: ISong | null;
}>();
</script>

<template>
  <div class="metadata-container">
    <div class="title">Song Metadata</div>
    <div class="content" v-if="song">
      <span class="song-title">{{ song.title }}</span>
      <span class="song-artist">{{ song.artist }}</span>
      <span class="song-genre">{{ song.genre }}</span>
      <RouterLink :to="`/songs/${song.id}/edit`" class="view-btn">Edit</RouterLink>
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
.view-btn {
  text-decoration: none;
  display: inline-block;
  padding: 0.2rem 1rem;
  border-radius: 4px;
  background: #29b6f6;
  color: white;
  margin-top: 0.5rem;
}
</style>
