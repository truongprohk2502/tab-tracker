<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import SongService from "@/services/SongService";

interface ISong {
  id: number;
  title: string;
  artist: string;
  genre: string;
  album: string;
  albumImageUrl: string;
  youtubeId: string;
  lyrics: string;
  tab: string;
  createdAt: string;
  updatedAt: string;
}

const songs = ref<ISong[]>([]);

onMounted(() => {
  SongService.getAllSongs().then((res) => {
    songs.value = res.data;
  });
});
</script>

<template>
  <div class="container">
    <div class="title">
      <span>Songs</span>
      <RouterLink class="add-btn" to="/create-song">+</RouterLink>
    </div>
    <div>
      <div v-for="item in songs" :key="item.id" class="song-item">
        <div class="song-info">
          <span class="song-title">{{ item.title }}</span>
          <span class="song-artist">{{ item.artist }}</span>
          <span class="song-genre">{{ item.genre }}</span>
          <RouterLink :to="`/songs/${item.id}`" class="view-btn">View</RouterLink>
        </div>
        <div>
          <img :src="item.albumImageUrl" :alt="item.title" width="300" height="300" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #29b6f6;
  padding: 0.5rem 1rem;
}
.title > span {
  color: white;
}
.container {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 50rem;
}
.add-btn {
  width: 2rem;
  height: 2rem;
  font-size: 20px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-decoration: none;
}
.song-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}
.song-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 20px;
}
.song-genre {
  font-size: 14px;
}
img {
  object-fit: contain;
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
