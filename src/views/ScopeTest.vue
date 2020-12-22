<template>
  <div>
    {{ property3 }}
    {{ property }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mapper } from "@/store/foo";

const Super = Vue.extend({
  computed: {
    ...mapper.mapState(["data"]),
    property2() {
      return this.componentProperty
    },
  }
});

@Component<ScopeTest>({
  computed: {
    property() {
      return 2;
    },
  }
})
export default class ScopeTest extends Super {
  private componentProperty = 22
  method() {
    console.log(this.property)
  }

}
</script>

<style scoped></style>
