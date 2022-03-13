const vdoData=JSON.parse(localStorage.getItem("vdoInfo"))
let showVideo=(vdoData)=>{
    let id= vdoData[0]
    let channel= vdoData[1]
    let title= vdoData[2]
    let iframe=document.createElement("iframe")
    iframe.src=`https://www.youtube.com/embed/${id}`
    iframe.setAttribute("allowfullscreen",true)
    let p=document.createElement("p")
    p.textContent=title;
    let h5=document.createElement("h5")
    h5.textContent=channel
    document.getElementById("mainContent").append(iframe,p,h5)
}
showVideo(vdoData)