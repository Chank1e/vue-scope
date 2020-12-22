import { Getters, Mutations, Actions, Module, createMapper } from 'vuex-smart-module';
import { config } from '@/config';

export interface DataItem {
  id: number
  title: string
  description: string
  views: number
  likes: number
}

const generateItem = (id: number) => ({
  id: id,
  title: `Title${id}`,
  description: `Description${id}texttexttexttexttexttexttexttexttexttexttexttext`,
  views: Math.floor(Math.random()*100000),
  likes: Math.floor(Math.random()*30000),
})


class FooState {
  data: DataItem[] = new Array(config.count)
    .fill(0)
    .map((i:number, index: number) => generateItem(index))
}

class FooGetters extends Getters<FooState> {}


class FooMutations extends Mutations<FooState> {
  generateItems(count: number) {
    this.state.data.push(
      ...new Array(count)
        .fill(0)
        .map((i:number, index: number) => generateItem(index))
    )
  }
}

class FooActions extends Actions<
  FooState,
  FooGetters,
  FooMutations,
  FooActions
  > {}

export const foo = new Module({
  state: FooState,
  getters: FooGetters,
  mutations: FooMutations,
  actions: FooActions
})

export const mapper = createMapper(foo)
