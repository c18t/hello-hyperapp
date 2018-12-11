import { h, app, ActionsType, View } from "hyperapp"
const css = require("./index.styl")

interface State {
  count: number
}

interface Actions {
  increment(): State
  decrement(): State
}

const state: State = {
  count: 0
}

const actions: ActionsType<State, Actions> = {
  increment: () => (state, actions) => ({ count: state.count + 1 }),
  decrement: () => (state, actions) => ({ count: state.count - 1 }),
}

const view: View<State, Actions> = (state, actions) => (
  <div class="counter">
    <button onclick={() => actions.increment()}>+</button>
    <span>{state.count}</span>
    <button onclick={() => actions.decrement()}>-</button>
  </div>
)

const counter = app<State, Actions>(state, actions, view, document.body)
