<template>
  <div class="badge rounded-pill bg-primary align-items-center" :class="'bg-'+computedColor">
    {{computedTitle}}
  </div>
</template>

<script>


// eslint-disable-next-line no-unused-vars
export const Color = {
  TASK: "primary",
  BUG: "danger"
}

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "tag",
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    computedColor : {
      get() {
        switch (this.color) {
          case "TASK":
            return "primary"
          case "BUG":
            return "danger"
          case "NEW_FEATURE":
            return "success"
          default:
            return Color.BUG
        }
      },
    },
    computedTitle : {
      get() {
        switch (this.color) {
          case "TASK":
            return "Task"
          case "BUG":
            return "Bug"
          case "NEW_FEATURE":
            return "New feature"
          default:
            return ""
        }
      },
    }
  }
}
</script>

<style scoped>

</style>