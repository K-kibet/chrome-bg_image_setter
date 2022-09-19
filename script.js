const changeBackground = async () => {
    let Images = [
'./images/pexels-george-becker-115890.jpg','./images/pexels-katelyn-meininger-621592.jpg', './images/pexels-kwnos-iv-13600149.jpg',
'./images/pexels-laura-paredis-13639243.jpg', './images/pexels-moliv-diary-13317177.jpg', './images/pexels-pixabay-161185.jpg', 
'./images/pexels-pixabay-237295.jpg', './images/pexels-polat-eyyüp-albayrak-11134135.jpg', './images/pexels-tom-fisk-3642880.jpg',
'./images/pexels-todd-trapani-3593988.jpg', './images/pexels-sergei-a-2539418.jpg', 
]
    let Img = document.querySelector('img');
    let index = 0;
    setInterval(() => {
        Img.setAttribute('src', Images[index]);
        if((Images.length - 2) >= index ){
            index += 1;
        } else index = 0;
    }, 5000)
}

changeBackground();