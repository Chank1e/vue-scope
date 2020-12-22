<template>
  <div>
    <h1>Getter</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>desc</th>
          <th>views</th>
          <th>likes</th>
          <th>1</th>
          <th>2</th>
        </tr>
      </thead>
      <tbody>
        <GetterRow v-for="(item, index) in data" :key="index" :item="item" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapper } from "@/store/foo";
import GetterRow from "@/components/GetterRow.vue";

const Super = Vue.extend({
  computed: {
    ...mapper.mapState(["data"])
  }
});
@Component({
  components: { GetterRow }
})
export default class Getter extends Super {}
</script>
