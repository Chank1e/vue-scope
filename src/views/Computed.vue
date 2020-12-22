<template>
  <div>
    <h1>Computed</h1>
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
        <ComputedRow v-for="(item, index) in data" :key="index" :item="item" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComputedRow from "@/components/ComputedRow.vue";
import { mapper } from "@/store/foo";

const Super = Vue.extend({
  computed: {
    ...mapper.mapState(["data"])
  }
});
@Component({
  components: { ComputedRow }
})
export default class Computed extends Super {}
</script>
