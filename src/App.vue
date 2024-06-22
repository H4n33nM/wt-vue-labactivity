<template>
  <div id="app">
    <div class="main">
      <my-navbar></my-navbar>
      <my-content></my-content>
      <my-contact-list></my-contact-list>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 35%;
  background-color: rgb(3, 58, 6);
  overflow: hidden;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url('./assets/3.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
}

.main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.main>* {
  position: relative;
  z-index: 1;
}
</style>
