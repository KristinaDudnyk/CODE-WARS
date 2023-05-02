const whosOnline = (friends) => {
  let f = { 
    online:[],
    offline:[],
    away:[]
  }
  
  console.log(friends)
    for(let i = 0; i < friends.length; i++){
    if(friends[i].lastActivity > 10 && friends[i].status === 'online'){
       f.away.push(friends[i].username)
    }
    else if(friends[i].status==='offline'){
       f.offline.push(friends[i].username)
    }
    else if(friends[i].status==='online' && friends[i].lastActivity <= 10){
       f.online.push(friends[i].username)

      }

    }
    console.log(f)
    const o = {}
    if(f.online.length > 0){
      o.online = f.online
      console.log(o)
    }


    if(f.away.length > 0){
      o.away = f.away}

    if(f.offline.length > 0){
      o.offline = f.offline}

    return o
  
}