window.addEventListener("wheel", function (e){
    if(e.deltaY > 0){
        this.scrollBy(0, document.documentElement.clientHeight)
    }
    if(e.deltaY < 0){
        this.scrollBy(0, -(document.documentElement.clientHeight))
    }
})