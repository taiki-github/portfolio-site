Vue.component('hea', { 
    template: '<v-row><v-col cols="8"></v-col><v-col cols="4"><v-row><v-col cols="3"><a href="index.html" ><v-btn plain>home</v-btn></a></v-col ><v-col cols="3"><a href="skill.html" ><v-btn plain>skill</v-btn></a></v-col><v-col cols="3"><a href="intern.html" ><v-btn plain>intern</v-btn></a></v-col><v-col cols="3"><a href="works.html" ><v-btn plain>works</v-btn></a></v-col></v-row></v-col></v-row>'
 },
 
 )

 Vue.component('foo', { 
    template:"<v-footer padless><v-col class='text-center'>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></v-col></v-footer>"
})
 
 new Vue({ //Vueインスタンスを作成
   
        el: "#app",
        vuetify: new Vuetify(),
       
 })

 