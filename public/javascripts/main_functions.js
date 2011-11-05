function play() {
   console.log("starting animation");
   var text = $("#text").val();
   var song_id = $("#echonest-song-id").val();
   console.log("text: "+text);
   console.log("Song ID: "+song_id);
   var event_list = create_animation(song_id, text);
   console.log(event_list);
   
}

function create_animation(song_id, text) {
   return [create_event(0, "appear", text)];
}

function start_animation() {
   
}

function create_event(mtimestamp, manimation, mtext) {
   return {timestamp: mtimestamp, animation: manimation, text: mtext};
}
