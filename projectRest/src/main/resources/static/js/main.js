// new component
Vue.component('messages-list', {
  props: ['messages'],
  template: '<div><div v-for="message in messages">{{ message.text }}</div></div>'
})

var app = new Vue({
  el: '#app',
  template: '<messages-list :messages="messages"/>',
  data: {
    messages: [
        { id: '123', text: 'first message'},
        { id: '23', text: 'second message'},
        { id: '3', text: 'third message'},
    ]
  }
});