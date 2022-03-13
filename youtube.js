let ytKey = "AIzaSyAJ1mfw1FjV_7m4Mo7-wUnTXb4aEojcpCI";
  
  async function getdata() {
    let input = document.getElementById("search").value;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=${ytKey}&maxResults=25`
    );

    let data = await res.json();
    let vdoArr = data.items;
    // console.log(vdoArr)
    appendVideos(vdoArr);
  }


  let appendVideos =(vdoArr)=>{
    document.getElementById("mainContent").innerHTML=null
    vdoArr.map(({id:{videoId},snippet:{channelTitle,description,title,thumbnails:{high:{url}}}})=>{
      let vdoDiv=document.createElement("div")
      vdoDiv.setAttribute("class","vdoDiv");
      vdoDiv.addEventListener("click",()=>{
        storeVdo(channelTitle,title,videoId)
      })
      let img=document.createElement("img")
      img.src=url;
      let p=document.createElement("p");
      p.textContent=title;
      let h5=document.createElement("h5");
      h5.textContent=channelTitle;
      vdoDiv.append(img,p,h5);
      document.getElementById("mainContent").append(vdoDiv);
    })
  }
  let storeVdo=(channelTitle,title,videoId)=>{
    let vdoData=[]
    vdoData.push(videoId);
    vdoData.push(channelTitle);
    vdoData.push(title);
    localStorage.setItem("vdoInfo",JSON.stringify(vdoData));
    window.location.href="video.html"
  }

    getdata2()
    async function getdata2() {
    let input = document.getElementById("search").value;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=${ytKey}&maxResults=25&regionCode=IN`
    );

    let data = await res.json();
    let vdoArr = data.items;
    // console.log(vdoArr)
    appendVideos(vdoArr);
  }