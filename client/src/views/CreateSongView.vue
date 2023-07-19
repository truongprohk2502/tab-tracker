<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import SongService from "@/services/SongService";

const router = useRouter();

const title = ref<string>("");
const artist = ref<string>("");
const genre = ref<string>("");
const album = ref<string>("");
const albumImageUrl = ref<string>("");
const youtubeId = ref<string>("");
const lyrics = ref<string>("");
const tab = ref<string>("");

const error = ref<string>("");

const create = async () => {
  if (
    !title.value.trim() ||
    !artist.value.trim() ||
    !genre.value.trim() ||
    !album.value.trim() ||
    !albumImageUrl.value.trim() ||
    !youtubeId.value.trim() ||
    !lyrics.value.trim() ||
    !tab.value.trim()
  ) {
    error.value = "Please fill in all the required fields";
    return;
  }

  error.value = "";
  try {
    await SongService.postCreateSong({
      title: title.value,
      artist: artist.value,
      genre: genre.value,
      album: album.value,
      albumImageUrl: albumImageUrl.value,
      youtubeId: youtubeId.value,
      lyrics: lyrics.value,
      tab: tab.value,
    });
    router.push("/songs");
  } catch (err) {
    console.error(err);
  }
};

const rules = {
  required: (value: string) => !!value || "Field is required",
};
</script>

<template>
  <div class="container">
    <div class="title">Create Song</div>
    <form name="tab-tracker-form" autocomplete="off" class="form">
      <v-text-field variant="underlined" label="Title" v-model="title" :rules="[rules.required]" />
      <br />
      <v-text-field
        variant="underlined"
        label="Artist"
        v-model="artist"
        :rules="[rules.required]"
      />
      <br />
      <v-text-field variant="underlined" label="Genre" v-model="genre" :rules="[rules.required]" />
      <br />
      <v-text-field variant="underlined" label="Album" v-model="album" :rules="[rules.required]" />
      <br />
      <v-text-field
        variant="underlined"
        label="Album Image Url"
        v-model="albumImageUrl"
        :rules="[rules.required]"
      />
      <br />
      <v-text-field
        variant="underlined"
        label="Youtube Id"
        v-model="youtubeId"
        :rules="[rules.required]"
      />
      <br />
      <v-textarea variant="underlined" label="Lyrics" v-model="lyrics" :rules="[rules.required]" />
      <br />
      <v-textarea variant="underlined" label="Tab" v-model="tab" :rules="[rules.required]" />
      <br />
      <div class="danger-alert" v-html="error" />
      <br />
      <v-btn class="submit-btn" @click="create">Create</v-btn>
    </form>
  </div>
</template>

<style scoped>
.title {
  background-color: #29b6f6;
  padding: 0.5rem 1rem;
  color: white;
}
.container {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 50rem;
}
.form {
  border: 1px solid lightgrey;
  padding: 0.5rem 1rem 2rem 1rem;
}
.submit-btn {
  margin: auto;
}
.danger-alert {
  font-size: 14px;
  color: red;
}
</style>
