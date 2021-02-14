<template>
  <transition name="fade">
    <div v-if="uiOn" style="transition-delay: 0.6s">
      <header>
        <div class='container-c'>
          <h1>Raskas <img alt="Raskas logo" src="../assets/key.png" height="50" /> {{ user }}</h1>
        </div>
      </header>
      <br />
      <body>
      <div>
        <div class="cent">
          <div class="container-l">
            <h1>Character Sheet</h1>
            <div id="scroller-1" class="content-chat">
              <h3 style="text-align: center">TBA</h3>
            </div>
          </div>
          <div class="container-r">
            <h1>Journal</h1>
            <div id="scroller" class="content-journal">
              <p id="test" class="description" v-for="item in journal.entries" :key="item.message">
                {{ item.message }}
              </p>
            </div>
            <input v-model="input" placeholder="What do you do?" v-on:keyup.enter="getJournalEntry()" />
          </div>
        </div>
      </div>
      </body>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UI',
  props: {
    uiOn: Boolean,
    user: String
  },
  data() {
    return {
      input: "",
      journal: {
        entries: [{ message: 'The sun beats down upon you as you stand on the rickety dock, speaking to the young dock worker.' }]
      }
    }
  },
  methods: {
    getJournalEntry() {
      let entryTestArray = [];
      let dialogueArray = ["Oh yeah, she declares. Life gets hard -- but we go on.","Oh, did I leave my casserole on? Better go home and check. The election can wait! The man frowns, disapprovingly. When she got back the whole thing was over.","Okay what?","Spookiness is not a matter for police investigation."];
      dialogueArray.forEach(element => {
        entryTestArray.push({ message: element});
      });
      let num = Math.floor(Math.random() * 4);
      
      // Push User Message
      this.journal.entries.push({ message: ">> " + this.input });
      this.input = "";
      
      // Push Test Message
      this.journal.entries.push(entryTestArray[num]);
      
      // Keep Scroll Wheel At Bottom
      let objDiv = document.getElementById("scroller");
      console.log(objDiv.lastChild.previousSibling);
      objDiv.lastChild.previousSibling.scrollIntoView();
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
body {
    width: 85%;
    float: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
}
.chat {
  color: purple;
}
.description {
  color: black;
}
.container-c {
    opacity: 0.8;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    background-color: #fbfbfb65;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.container-c h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 4em;
  margin-bottom: 0;
  margin-top: 0;
}
.container-r {
  margin-left:2%;
  flex: 20%;
  opacity: 0.8;
  border-radius: 5px;
  background-color: #fbfbfb65;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  height: 500px;
}
.container-l {
  flex: 40%;
  opacity: 0.8;
  border-radius: 5px;
  background-color: #fbfbfb65;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  height: 500px;
  margin-bottom: 4em;
}
.cent{
    float: center;
    display: flex;
}
.content-journal {
  margin-top: 2em;
  scrollbar-width: thin;
  scrollbar-color: grey #fbfbfb65;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 300px;
  color:black;
  text-align: justify;
}
.content-journal p {
  color: purple;
  margin-right: 1em;
  margin-left: 1em
}
#scroller * {
  overflow-anchor: none;
}

#scroller::after {
  content: '';
  display: block;
  overflow-anchor: auto;
  height: 1px;
}
.content-chat p {
  margin-right: 1em;
  margin-left: 1em
}
.content-chat {
  margin-top: 2em;
  scrollbar-width: thin;
  scrollbar-color: grey #fbfbfb65;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 300px;
  color:black;
  text-align: justify;
}
.content-chat p {
  margin-right: 1em;
  margin-left: 1em;
}
input {
  float: bottom;
  font-size:14px;
  padding:10px 10px 10px 10px;
  margin-left: 5em;
  width:50%;
  border:none;
  border-bottom:1px solid #757575;
  background-color: #fbfbfb65;
  text-align: center;
  margin-top: 2em;
  margin-right: auto;
  margin-left: auto;
}
input:focus { outline:none; }
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
    margin-top: 3em;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>