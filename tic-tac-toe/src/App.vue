<template>
  <div class="app">
    <div class="play-area">
      <div
        v-for="(item, i) in board"
        :key="i"
        v-bind:id="`block_${i}`"
        class="block"
        v-on:click="blockClicked(i, item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      board: ["", "", "", "", "", "", "", "", ""],
    };
  },
  methods: {
    blockClicked(i) {
      this.board.splice(i, 1, "x") 
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #14bdac;
}
.play-area {
  display: grid;
  width: 300px;
  height: 300px;
  grid-template-columns: auto auto auto;
}
.block {
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  border: 3px solid #0da192;
  transition: background 0.2s ease-in-out;
}
.block:hover {
  cursor: pointer;
}
#block_0,
#block_1,
#block_2 {
  border-top: none;
}

#block_0,
#block_3,
#block_6 {
  border-left: none;
}

#block_6,
#block_7,
#block_8 {
  border-bottom: none;
}

#block_2,
#block_5,
#block_8 {
  border-right: none;
}
</style>
