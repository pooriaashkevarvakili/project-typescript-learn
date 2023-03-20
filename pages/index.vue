<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      {{ newsData?.length && newsData[0].title }}
    </div>
    <div v-for="item in rates" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
export interface race {
  title: String;
  name: String;
}
import Vue from "vue";
import newsStore, { NewsModule } from "~/store/news";
export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      newsData: [],
    };
  },
  computed: {
    rates(): race[] {
      return [
        {
          title: "lorem",
          name: "pooria",
        },
        {
          title: "isum",
          name: "ali",
        },
        {
          title: "sara",
          name: "mohamad",
        },
      ];
    },
    newsStore() {
      return newsStore.of(this.$store);
    },
  },
  methods: {
    async fetchData() {
      const newsData = await this.newsStore.getWords();
      ///@ts-ignore
      this.newsData = newsData.map((key) => {
        return key;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>
