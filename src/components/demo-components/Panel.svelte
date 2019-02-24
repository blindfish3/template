<div class="wrapper">
  <div class="label">{label}</div>
  <span class="content"><slot/></span>
  <span class="clock">
    <Button on:click="setClockVisible(true)" disabled={clockIsVisible}>create</Button>
    <Button on:click="setClockVisible(false)" disabled={!clockIsVisible}>destroy</Button>
    {#if clockIsVisible }
      <Clock />
    {/if}
  </span>
</div>


<style>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 3rem;
    border: solid 1px #ccc;
    color: black;
    max-width: 90%;
  }

  .label {
    flex-basis: 100%;
    font-weight: bold;
    margin-bottom: 1rem;
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
      Button: './Button.svelte',
      Clock: './Clock.svelte',
		}
	}

</script>
