# PV

## A wrapper for petite-vue to register scopes, directives and provide a global shared reactive store across your petite-vue islands.

### Usage:

#### JavaScript
```js
import PV from 'pv.es.js';

//create a petite-vue scope
const counter = (store) => {
  
  return {
    localCount:0,
    get count() {
      return store.count
    },
    inc() {
      this.localCount++;
      store.count++;
    }
  }
}

//register your scope
PV.registerScope( "counter", counter );

//you can initialize the global store if you like
//but you don't have to, you can also add props as needed from scopes
PV.initializeStore( {
  count:0
});

//mount all the scopes onto the page
const app = PV.mount();
```

#### HTML
```html
<!-- globalStore is the name of the provided global store, pass it in to any scope for use -->
<div v-scope="counter(globalStore)">
  <h2>Counter:</h2>
  <p>Local Count: {{localCount}}</p>
  <p>Global Count: {{count}}</p>

  <button @click="inc">increment</button>
</div>

<!-- You can also create a scope on the fly with just globalStore -->
<div v-scope="{ globalStore }">
  <p>Count: {{globalStore.count}}</p>
  <pre>
    {{ globalStore }}
  </pre>
</div>
```

## [Example Codepen](https://codepen.io/walpolea/pen/xxYzeyj)