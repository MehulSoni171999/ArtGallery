// gsap.to("#nfirst #bigcircle",{

//   scrollTrigger:{
  
//       trigger:"#nfirst",
//       scroller:"body",
    
//   start:"top 0%",
  
  
  
//       ease:easeInOut,
//       duration:5,
//   },
//   scale:50,
  
//   })




// gsap.to(".nslide h2",{

// scrollTrigger:{

//     trigger:".nslide h2",
//     scroller:"body",
//     markers:true,
// start:"top 80%",


// x:-3000,
//     ease:easeInOut,
//     duration:12,
// },


// })

// 3rd
document.querySelector('#nthired')
.addEventListener('click',function(dets){
  var sp=  dets.target.id
  console.log(sp)
 let gt=(sp.split("-")[1])
console.log(sp.split("-")[1])
var dec= 100-(4-gt)*4
// var cc=((4-gt)*4)-100
// console.log(cc)

gsap.to("#"+sp,{
    width:dec+"%",
    ease:Expo.easeInOut,
    duration:1.5,
    
})
gsap.to( "#str-cr-" + gt, {
  
  opacity: 1,
  pointerEvents: "all",
  ease: Expo.ease,
  duration: 1.5,
  delay: 1,
})

// var element=document.querySelector('.ri-close-circle-line')
// element.style.display.pointerEvents="initial"
var cr = "#str-cr-" + gt
console.log(cr)

document.querySelector(cr).addEventListener("click", function (dets) {
  //      var crs=dets.target.id.split("-")[1]
  console.log(dets.target.id)
  gsap.to("#"+sp, {
    width: "4%",
    // opacity:0,
    ease: Expo.easeInOut,
    duration: 1.5
  })
  gsap.to("#" + dets.target.id, {
    // width: dec +"%",
    opacity: 0,
    pointerEvents: "none", 
    ease: Expo.ease,
    duration: .5
  })
})
})

// 4rth

document.querySelectorAll('.elem')
.forEach((function(elem){
  elem.addEventListener('mousemove',function(dets){
  var abc=  dets.target.children[1].style.opacity=1;
  var cd=dets.target.children[1].style.transform = `translate(-50%, -50%) translate(${dets.screenX*.5}px, -${dets.screenY*.02}px) rotate(${dets.screenX*.05}deg)`;
  console.log(abc) 
console.log(cd) 

elem.addEventListener("mouseleave", function(dets){
  dets.target.children[1].style.opacity = 0;
});


})
}))