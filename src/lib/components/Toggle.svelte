<script>
  import { toggleValue } from "../store";
import {toggleTheme} from "../theme"
  let curr_toggleValue = true;

  toggleValue.subscribe((value) => {
    curr_toggleValue = value;
  });

  let isChecked = true;
  $: toggleValue.update(() => isChecked);
  $: toggleTheme(curr_toggleValue)

</script>

<label class="fancy-dark-mode-toggle">
  <input type="checkbox" bind:checked={curr_toggleValue} />
  <span class="slider"></span>
</label>

<style>
  .fancy-dark-mode-toggle {
    display: inline-block;
    position: relative;
    justify-self: left;
    width: 60px;
    height: 30px;
  }

  input[type="checkbox"] {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #121212; /* Background color for dark mode */
    -webkit-transition: background-color 0.4s ease-in; /* Transition background color */
    transition: background-color 0.4s;
    border-radius: 30px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
  }

  input:checked + .slider {
    background-color: #ffffff; /* Background color when in dark mode */
  }

  .slider:before {
    position: absolute;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff; /* Color of the icon in dark mode */
    -webkit-transition: transform 1s; /* Longer transition duration for smoother effect */
    transition: transform 1s;
  }

  input:checked + .slider:before {
    transform: translateX(30px); /* Slide the icon */
    content: "☀️"; /* Sun symbol for light mode */
  }

  .slider:before {
    content: "🌙"; /* Moon symbol for dark mode */
  }
</style>
