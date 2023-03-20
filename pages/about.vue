<template>
  <div>
    <div v-for="item in rates" :key="item.key">
      <div class="flex flex-col items-center justify-center">
        {{ item.name }}
        <div>{{ item.title }}</div>
      </div>
      <div>{{ newsData?.length && newsData[0].title }}</div>
    </div>
  </div>
</template>

<script lang='ts'>
import vue from "vue";
import contactStore, { ContactModule } from "~/store/contact";

export interface race {
  name: String;
  title: String;
}
export default vue.extend({
  data() {
    return {
      newsData: [],
    };
  },
  computed: {
    rates(): race[] {
      return [
        {
          title: "pooria",
          name: "lorem",
        },
      ];
    },
    contactStore() {
      return contactStore.of(this.$store);
    },
  },
  methods: {
    async fetchData() {
      ///@ts-ignore
      const newsData = await this.contactStore.fetchData();
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

<style>
</style>