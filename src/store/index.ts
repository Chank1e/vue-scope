import Vue from 'vue'
import * as Vuex from 'vuex'
import { createStore } from 'vuex-smart-module'
import { foo } from './foo'

Vue.use(Vuex)

export const store = createStore(
  foo,
  {
    strict: process.env.NODE_ENV !== 'production'
  }
)
