var soundpack=[];
var soundpack_index = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,8,8.5,9,9.5,10,11,11.5,12,12.5,13,13.5,14,15];

for(var i=0;i<soundpack_index.length;i++){
    soundpack.push({
        number: soundpack_index[i],
        url: "http://awiclass.monoame.com/pianosound/set/"+soundpack_index[i]+".wav"
    })
}
$(document).ready(function () {
    var vm = new Vue({
        el: "#app",
        data: {
            sounddata: soundpack,
            notes: [{num: 3,time: 105},{num:3,time:223},{num:4,time:331},{num:5,time:482},{num:5,time:565},{num:4,time:673},{num:3,time:782},{num:2,time:893},{num:1,time:1006},{num:1,time:1113},{num:2,time:1220},{num:3,time:1337},{num:3,time:1456},{num:2,time:1623},{num:2,time:1680},{num:3,time:1883},{num:3,time:1988},{num:4,time:2107},{num:5,time:2218},{num:5,time:2337},{num:4,time:2446},{num:3,time:2555},{num:2,time:2664},{num:1,time:2771},{num:1,time:2880},{num:2,time:2992},{num:3,time:3103},{num:2,time:3220},{num:1,time:3395},{num:1,time:3449}],
            now_note_id: 0

        },
        methods: {
            playnote: function(id,volume){
                if(id>0){
                    var audio_obj=$("audio[data-num="+id+"")[0];
                    audio_obj.volume=volume;
                    audio_obj.currentTime=0;
                    audio_obj.play();
                }
            },
            playnext: function(volume){
                var play_note=this.notes[this.now_note_id].num;
                this.playnote(play_note,volume);
                this.now_note_id+=1;
            }
        }
    });
});