Vue.component('message-row', {
    props: ['message'],
    template:  '<div><i>( {{ message.id }} )</i> {{ message.text }}</div>'
});

Vue.component('messages-list', {
  props: ['messages'],
  template: '<div><message-row v-for="message in messages" :message="message"/></div></div>'
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