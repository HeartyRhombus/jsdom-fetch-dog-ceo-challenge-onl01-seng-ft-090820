console.log('%c HI', 'color: firebrick')

function dogCeos(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch('imgUrl')
    .then(resp => resp.json)
    .then(json => console.log(json))
}

function renderImage(json) {

}