$(document).ready(function(){
    let API_KEY = "AIzaSyDQYEGlAf3XQ1_tPFsCjnWlaOc2OtxWpho"

    let video = ''
    $("form").submit(function(event){
        event.preventDefault()

        let search = $("#search").val()
        videoSearch(API_KEY, search, 10)
    })
    function videoSearch(key, search, maxResults){

        $("#videos").empty()
        
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key 
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
            console.log(data)
            data.items.forEach(item => {
                video = `
                <iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder"0" allowfullscreen></iframe>
                `
                $("#videos").append(video)
            })
        })
    }
})