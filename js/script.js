

// Read Messages from the DataBase 

let msgdiv=document.querySelector(".msg");
setInterval(() => {
  fetch("readMsg.php").then(
    r=>{
     if(r.ok){
      return r.text();
     }
    }
  ).then(
    d=>{
      msgdiv.innerHTML=d;
    }
  )
}, 500);






// ADD Messages to the DataBase 
window.onkeydown=(e)=>{
  if(e.key=="Enter"){
    update()
  }
}

    r=>{
      if(r.ok){
        return r.text();
      }
    }
  ).then(
    d=>{
      console.log("msg has been added")
      msgdiv.scrollTop=(msgdiv.scrollHeight-msgdiv.clientHeight);
    }
  )
}