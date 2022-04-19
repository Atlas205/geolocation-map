'use strict';

const loading = document.querySelector('.loading');
const point = document.querySelector(`.point`);

function getLocation(position) {
    const {longitude, latitude } = position.coords;

    if (longitude && latitude) {
        loading.getElementsByClassName.display = 'none';
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXRsYXMyMDUiLCJhIjoiY2wxd2c2c2F0MThtdTNpcXZ6Z3FzbmZ5YSJ9.twyWbgHBk_3g2EWNsmubyg';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            interactive: false,
            center: [longitude, latitude],
            antialias: true,
            pitch: 40,
            //bearing: 25,
            zoom: 16
        });

        setTimeout(() => { point.style.display = 'flex'}, 1000);
        console.log(map);
    }
}

let vh = window.innerq * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh' `${vh}px`);
})