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
        <tr v-for="(item, index) in filteredData" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.views }}</td>
          <td>{{ item.likes }}</td>
          <td>{{ item.likes / item.views }}</td>
          <td>{{ item.likes * item.views }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DataItem, mapper } from "@/store/foo";

const Super = Vue.extend({
  computed: {
    ...mapper.mapState(["data"])
  }
});
@Component
export default class PerformanceTestGetter extends Super {
  get filteredData() {
    return this.data.filter((item: DataItem, index: number) => index % 2 === 0);
  }
}
</script>
