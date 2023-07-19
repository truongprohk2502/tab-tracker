<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import SongMetadata from "./SongMetadata.vue";
import SongYoutube from "./SongYoutube.vue";
import SongTab from "./SongTab.vue";
import SongLyrics from "./SongLyrics.vue";
import type { ISong } from "../SongsListView.vue";
import { onMounted } from "vue";
import SongService from "@/services/SongService";

const song = ref<ISong | null>(null);

const route = useRoute();

onMounted(() => {
  SongService.getSongById(route.params.songId as string).then((res) => {
    song.value = res.data;
    console.log(res.data);
  });
});
</script>

<template>
  <div class="container">
    <SongMetadata :song="song" />
    <SongYoutube :youtube-id="song?.youtubeId" />
    <SongTab :tab="song?.tab" />
    <SongLyrics :lyrics="song?.lyrics" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
