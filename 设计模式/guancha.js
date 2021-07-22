class events {
  es = {}

  on(eventName,cb, once){
    if(this.es[eventName] == undefined){
      this.es[eventName] = []
    }
    this.es[eventName].push({cb,once}) 
  }


}

var adultTv = new events();
 
 
 
adultTv.one( 'play',  function( data ){
 
   console.log ( "今天是谁的电影" + data.name );
 
});
 
//发布者
 
adultTv.trigger(  'play',  { 'name': '麻生希' }  )
adultTv.trigger(  'play',  { 'name': '麻生希1' }  )
adultTv.trigger(  'play',  { 'name': '麻生希1' }  )