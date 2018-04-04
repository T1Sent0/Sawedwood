import './indicators.scss'
import 'jquery.animate-number'

   if(document.documentElement.clientWidth < 650) {
       $('#first-indicators').animateNumber({ number: 50 },6000);
       $('#second-indicators').animateNumber({ number: 24 },6000);
       $('#third-indicators').animateNumber({ number: 25 },4000);
       $('#fourth-indicators').animateNumber({ number: 2 },4000);
   }
