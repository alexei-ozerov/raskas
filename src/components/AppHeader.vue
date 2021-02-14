<template>
  <transition name="fade">
    <header v-if="headerOn">
      <div class="container">
          <img alt="Raskas logo" src="../assets/key.png" height="80" />
          <h1>  
              Raskas: Storytelling Server
          </h1>
          <hr>
          <h2 v-if="name_tag">Welcome, {{ name }}!</h2>
          <div v-if="seen">
              <div class="cent">
                  <br />
                  <h2>What is your name?</h2>
                  <input v-model="name" />
                  <br />
                  <br />
                  <button v-on:click="seen = false, name_tag = true, $emit('displayUI', name)">Submit</button>
              </div>
          </div>
      </div>
    </header>
  </transition>
</template>

<script>
export default {
  name: 'Header',
  props: {
    headerOn: Boolean
  },
  data() {
    return {
      name: "Guest",
      seen: true,
      name_tag: false,
      ui: false,
    }
  }
}
</script>

<style scoped>
header {
    width: 85%;
    height: auto;
    float: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

}
.container {
    opacity: 0.8;
    border-radius: 5px;
    background-color: #fbfbfb65;
    padding-top: 10px;
    padding-bottom: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-top: 2em;
    margin-bottom: 2em;
}
.cent{
    float: center;
}
img {
    margin-top: 2em;
}
h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 5em;
    margin-bottom: 0;
    margin-top: 0;
}
hr {
    width: 60%;
    margin-bottom: 0.9em;
}
button {
    width: 10em;
    height: auto;
    background: linear-gradient(to bottom, #c4c4c4 0%,#575454 100%); /* W3C */
    border: none;
    border-radius: 5px;
    position: relative;
    border-bottom: 4px solid rgb(75, 75, 75);
    color: #fbfbfb;
    outline: none;
    font-weight: 600;
    text-shadow: 1px 1px 1px rgba(0,0,0,.4);
    text-align: center;
    font-size: 0.95em;
    text-indent: 5px;
    box-shadow: 0px 3px 0px 0px rgba(12, 1, 61, 0.2);
    cursor: pointer;
}
input {
  font-size:18px;
  padding:10px 10px 10px 10px;
  width:20%;
  border:none;
  border-bottom:1px solid #757575;
  background-color: #fbfbfb65;
  text-align: center;
}
input:focus { outline:none; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>