const API_KEY = "AIzaSyB5nZP91gtyYt7CWRCraHifrcgo3QKKM6s";
const iframe1 = document.getElementById("iframe1");
const iframe2 = document.getElementById("iframe2")
const iframe3 = document.getElementById("iframe3")
const iframe4 = document.getElementById("iframe4")
const iframe5 = document.getElementById("iframe5")
const iframe6 = document.getElementById("iframe6")
const iframe7 = document.getElementById("iframe7")
const iframe8 = document.getElementById("iframe8")
const iframe9 = document.getElementById("iframe9")
const iframe10 = document.getElementById("iframe10")
const submit = document.getElementById("submit");
const searchName = document.getElementById("search");

function search(key, search, maxResults){
    let url = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search
    let i = 0
    fetch(url).then((response) => response.json()).then((data) => data.items.forEach(item => {
        switch (i) {
            case 1:
                iframe1.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 2:
                iframe2.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 3:
                iframe3.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 4:
                iframe4.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 5:
                iframe5.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 6:
                iframe6.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 7:
                iframe7.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 8:
                iframe8.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 9:
                iframe9.src = `https://www.youtube.com/embed/${item.id.videoId}`
            case 10:
                iframe10.src = `https://www.youtube.com/embed/${item.id.videoId}`
            default:
                break;
        }
        i += 1
    }));
}

submit.onclick = function(){
    search(API_KEY, searchName.value, 10)
}
document.addEventListener("keyup", function(e){
    console.log(e.key)
    if(e.key === "Enter"){
        search(API_KEY, searchName.value, 10)
    }
})
