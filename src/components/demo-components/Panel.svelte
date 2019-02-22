<div class="wrapper">
  <slot/>
  <span class="clock">
    <button type="button" on:click="setClockVisible(true)" disabled={clockIsVisible}>show</button>
    <button type="button" on:click="setClockVisible(false)" disabled={!clockIsVisible}>hide</button>
    {#if clockIsVisible }
      <Clock />
    {/if}
  </span>
  <div class="label">{label}</div>
</div>


<style>
  .wrapper {
    position: relative;
    padding: 3rem 2rem 1rem;
    border: solid 1px #ccc;
    color: black;
    max-width: 90%;
  }

  .label {
    font-weight: bold;
    position: absolute;
    top: 5px;
    left: 10px;
  }

  .clock {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>

<script>
  
	export default {
		// equivalent to props; except default is set explicitly
		data () {
			return {
				label: "default label",
        clockIsVisible: true,
			}
		},
    methods: {
      setClockVisible: function (isVisible) {
        this.set({
          clockIsVisible: isVisible
        })
      }
    },
		// import additional components here:
		components: {
      Clock: './Clock.svelte',
		}
	}

</script>
