<div class="clock">
  <div class="time">{padLeft(hours)}:{padLeft(minutes)}:{padLeft(seconds)}</div>
  <button type="button" on:click="tick()" disabled="{running}">start</button>
  <button type="button" on:click="stopTimer()" disabled="{!running}">stop</button>
</div>

<style>
  .clock {
    background: #eee;
    border: solid 1px #ccc;
    position: relative;
    text-align: center;
  }
  .time {
    font-size: 24px;
    margin-bottom: 4px;
  }
  button {
    font-size: 12px;
    padding: 5px 20px;
  }
</style>

<script>
  export default {
    data () {
      return {
        time: new Date(),
        running: true,
      }
    },
    // apply transformations to props and output as new props
    computed: {
      hours: ({ time }) => time.getHours(),
      minutes: ({ time }) => time.getMinutes(),
      seconds: ({ time }) => time.getSeconds(),
    },
    // life cycle methods
    oncreate () {
      this.tick();
    },
    ondestroy () {
      this.stopTimer();
    },
    // accessible within template code
    helpers: {
      padLeft: function (number) {
        const numberAsString = '' + number;
        const pad = "00";
        return pad.substring(numberAsString.length) + numberAsString;
      }
    },
    // methods are attached to the component instance
    // and may be used in both templates and component code
    methods: {
      tick: function () {
        this.set({
          time: new Date(),
          running: true,
        });
        const boundTick = this.tick.bind(this);
        this.timer = window.setTimeout(boundTick, 1000);
      },
      stopTimer: function () {
        window.clearTimeout(this.timer);
        this.set({
          running: false,
        });
      }
    },
  }
</script>
