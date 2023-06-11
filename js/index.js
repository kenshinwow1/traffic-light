const btnNode = document.querySelector('.js-btn');
const trafficLight = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

btnNode.addEventListener('click' , function(){
    switchLight(trafficLightNode);
});