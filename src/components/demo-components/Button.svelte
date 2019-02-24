<button type="{type}" class="{!!disabled ? 'disabled' : ''}" on:click="fire('click')"><slot>default label</slot></button>

<style>
  button {
    background: orange;
    color: black;
    padding: 0.5rem 2rem;
    border-radius: 0.4rem;
    margin-bottom: 1rem;
    cursor: pointer;
    border: 0;
  }


  button:hover {
    background: gold;
  }

  button.disabled,
  button.disabled:hover {
    background: lightgrey;
    color: grey;
    cursor: default;
  }
</style>

<script>
  export default {
    data() {
      return {
        type: "button",
        disabled: false,
      }
    },
  }
</script>
