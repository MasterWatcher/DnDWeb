<template>
  <div class="container">
    <h2 class="login-title">Greetings, adventurer!<br>Please introduce yourself</h2>

    <form class="login-form">
      <div>
        <input
        v-model="name"
        id="name"
        type="text"
        placeholder="Your name"
        name="name"
        required
        />
      </div>

      <button @click="login" class="btn btn--form" type="button">
        Enter the Realm
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "login-player",
    data() {
      return {
        name: ''
      }
    },
    mounted() {
      this.$data.name = this.$cookies.get('playerName')
    },
    methods: {
      login() {
        this.$cookies.set('playerName',this.$data.name);
      }
    }
  }
</script>

<stype lang="sass">
body
  font-family: sans-serif
  line-height: 1.4
  display: flex

.container
  width: 400px
  margin: auto
  padding: 36px 48px 48px 48px
  background-color: #f2efee
  border-radius: 11px
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -90%)

.login-title
  padding: 15px
  font-size: 22px
  font-weight: 600
  text-align: center

.login-form
  display: grid
  grid-template-columns: 1fr
  row-gap: 16px

  label
    display: block
    margin-bottom: 8px

  input
    width: 100%
    padding: 1.2rem
    border-radius: 9px
    border: none

    &:focus
      outline: none
      box-shadow: 0 0 0 4px rgba(253, 242, 233, 0.5)

.btn--form
  background-color: #4CAF50
  color: white
  align-self: end
  padding: 8px

.btn
  display: inline-block
  text-decoration: none
  font-size: 20px
  font-weight: 600
  border-radius: 9px
  border: none
  cursor: pointer
  font-family: inherit
  transition: all 0.3s

  &:link, &:visited
    display: inline-block
    text-decoration: none
    font-size: 20px
    font-weight: 600
    border-radius: 9px
    border: none
    cursor: pointer
    font-family: inherit
    transition: all 0.3s

button
  outline: 1px solid #4CAF50

.btn--form:hover
  background-color: #f2efee
  color: #4CAF50

</stype>