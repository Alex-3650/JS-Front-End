function songs(data){

 class Song{

   constructor(typeList,name,time){
    this.typeList=typeList;
    this.time=time;
    this.name=name;
   }
}

   n=data[0];
    type=data[data.length-1];
   const songPlayer=[];

   for (let i = 1; i <= n; i++) {
    const [typeList, name, time] = data[i].split('_');
      songPlayer.push(new Song(typeList,name,time));
      if(type==='all'){
        console.log(name);
      }else if(type==typeList){
        console.log(name);
      }
    }
   

}
// songs([3,'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);

songs([4,

'favourite_DownTown_3:14',

'listenLater_Andalouse_3:24',

'favourite_In To The Night_3:58',

'favourite_Live It Up_3:48',

'listenLater']);

songs([2,

'like_Replay_3:15',

'ban_Photoshop_3:48',

'all']);