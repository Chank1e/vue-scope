<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.description }}</td>
    <td>{{ item.views }}</td>
    <td>{{ item.likes }}</td>
    <td>{{ likesViews }}</td>
    <td>{{ titleLikes }}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { DataItem } from "@/store/foo";

@Component<ComputedRow>({
  computed: {
    likesViews() {
      return this.item.likes * this.item.views;
    },
    titleLikes() {
      return `${this.item.title}||${this.item.likes}`;
    }
  }
})
export default class ComputedRow extends Vue {
  @Prop({ required: true }) item!: DataItem;
}
</script>
