<template>
  <div>
    <p>text area example</p>
    <label >
      <textarea v-model="text"></textarea>
    </label >

    <div>
      <p style="white-space: pre-line">{{ text }}</p>
    </div>
    <p>single check box example</p>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox"> {{ checked }} </label>
    </div>

    <p>Multiple Check box example</p>
    <div>
      <input type="checkbox" id="jack" value="jack" v-model="checkedName" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="John" value="John" v-model="checkedName" />
      <label for="John">John</label>
      <input type="checkbox" id="mike" value="mike" v-model="checkedName" />
      <label for="mike">Mike</label>
      <br />
      <span> Checked Name: {{ checkedNames() }}</span>
    </div>

    <p>Radio Examples</p>
    <div>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
    </div>
    <p>Select Example</p>
    <div>
      <select v-model="selected">
        <option disabled value="">Please select One</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>
      <br />
      <spam>Selected: {{ selected }}</spam>
    </div>

    <p>Dynamic Options rendered with v-for</p>
    <div>
      <select v-model="advSelected">
        <option
          v-for="(option, index) of options"
          :key="index"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <p>Value binding</p>

    <div>
      <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
      <label for="checkbox">Toggle</label>

      <input type="radio" id="lables" v-model="picked" :value="a" />
      <label for="lables">Radio</label>

    </div>
    
  </div>
</template>

<script>
export default {
  name: "FormInput",

  data() {
    return {
      text: "",
      checked: false,
      checkedName: [],
      picked: "",
      selected: "",
      advSelected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      toggle: true,
    };
  },
  methods: {
    checkedNames() {
      let result = "";
      for (let person of this.checkedName) {
        result += person + " ";
      }
      return result;
    },
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>