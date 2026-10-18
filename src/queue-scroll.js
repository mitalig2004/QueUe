import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
let media,context,epoch=0;
export function initExhibition(root){
 const token=++epoch;media?.revert();context?.revert();
 const study=root.querySelector('.qx-study');if(!study)return;
 media=gsap.matchMedia();
 media.add({motion:'(prefers-reduced-motion: no-preference)',desktop:'(min-width: 901px) and (min-height: 700px)'},conditions=>{
  if(!conditions.conditions.motion)return;
  context=gsap.context(()=>{
   const desktop=conditions.conditions.desktop;
   const journey=study.querySelector('.qx-journey'),world=journey.querySelector('.qx-journey-world');
   if(desktop){
    const tl=gsap.timeline({scrollTrigger:{id:'queue-journey',trigger:'.qx-journey-frame',start:'top 24px',end:()=>'+='+Math.max(2400,innerHeight*4),scrub:.45,pin:true,anticipatePin:1,invalidateOnRefresh:true}});
    let elapsed=0;[6,4,7,20,8].forEach((duration,i)=>{if(i<4)tl.to(world,{xPercent:-(i+1)*20,duration:duration*.3,ease:'power1.inOut'},elapsed+duration*.7);else tl.to(world,{xPercent:-80,duration,ease:'none'},elapsed);elapsed+=duration;});
    tl.fromTo('.qx-timing-progress',{scaleX:0},{scaleX:1,duration:45,ease:'none'},0);
    tl.to('.qx-journey-result',{backgroundColor:'#a9ead2',duration:5},40);
    tl.fromTo('.qx-journey .qa-steam',{opacity:.3,y:12},{opacity:1,y:-12,duration:7,ease:'sine.inOut'},10);
    // Each environment occupies a full scene; the overview bar retains exact minute proportions.
    tl.fromTo('.qx-journey .qa-walk .qa-leg-a,.qx-journey .qa-return .qa-leg-a',{rotation:-10,svgOrigin:'100 208'},{rotation:10,duration:1.1,repeat:39,yoyo:true,ease:'sine.inOut'},0);
    tl.fromTo('.qx-journey .qa-walk .qa-leg-b,.qx-journey .qa-return .qa-leg-b',{rotation:10,svgOrigin:'100 208'},{rotation:-10,duration:1.1,repeat:39,yoyo:true,ease:'sine.inOut'},0);
   }else{
    study.querySelectorAll('.qx-journey-scene').forEach(scene=>{gsap.fromTo(scene.querySelector('.qa-character'),{x:-24},{x:24,ease:'none',scrollTrigger:{trigger:scene,start:'top 90%',end:'bottom 20%',scrub:true}})});
   }
   // Broad compositions move in opposing layers; no essential information is hidden.
   study.querySelectorAll('.qx-cover-art,.qx-problem-art,.qx-feature-art,.qx-access-art').forEach(el=>gsap.fromTo(el,{y:24},{y:-24,ease:'none',scrollTrigger:{trigger:el.closest('.qx-spread'),start:'top bottom',end:'bottom top',scrub:true}}));
   study.querySelectorAll('.qx-phone').forEach((el,i)=>gsap.fromTo(el,{y:desktop?60:25,rotation:i%2?-5:5},{y:desktop?-25:-10,rotation:i%2?3:-3,ease:'none',scrollTrigger:{trigger:el.closest('.qx-spread'),start:'top 85%',end:'bottom 15%',scrub:.5}}));
   study.querySelectorAll('.qx-spread h2 em').forEach(el=>gsap.fromTo(el,{letterSpacing:'-.025em'},{letterSpacing:'-.065em',ease:'none',scrollTrigger:{trigger:el.closest('.qx-spread'),start:'top 85%',end:'top 15%',scrub:true}}));
   const path=study.querySelector('.qx-drawn-path'),len=path.getTotalLength();gsap.fromTo(path,{strokeDasharray:len,strokeDashoffset:len},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'#motion-language',start:'top 70%',end:'bottom 70%',scrub:true}});
   gsap.to('.qx-score-module',{x:760,ease:'none',scrollTrigger:{trigger:'#motion-language',start:'top 70%',end:'bottom 70%',scrub:true}});
   gsap.fromTo('.qx-module-a',{x:-120,y:70,rotation:90},{x:0,y:0,rotation:0,scrollTrigger:{trigger:'#identity',start:'top 75%',end:'bottom 60%',scrub:true}});
   gsap.fromTo('.qx-module-b',{x:-180,y:80,scale:.4},{x:0,y:0,scale:1,scrollTrigger:{trigger:'#identity',start:'top 75%',end:'bottom 60%',scrub:true}});
   gsap.to('.qx-star-symbol svg',{rotation:135,borderRadius:'50%',ease:'none',scrollTrigger:{trigger:'#brand-symbols',start:'top bottom',end:'bottom top',scrub:true}});
   gsap.to('.qx-star-symbol path',{attr:{d:'M100 18 130 65 180 40 145 85 182 100 145 122 177 175 121 145 100 182 80 145 25 175 55 120 18 100 55 84 25 40 78 65Z'},ease:'none',scrollTrigger:{trigger:'#brand-symbols',start:'top 85%',end:'bottom 20%',scrub:true}});
   study.querySelectorAll('.qx-pattern-window svg').forEach((el,i)=>gsap.fromTo(el,{xPercent:i?8:-8},{xPercent:i?-8:8,ease:'none',scrollTrigger:{trigger:'#patterns',start:'top bottom',end:'bottom top',scrub:true}}));
   gsap.fromTo('.qx-icon-field .icon',{rotation:-12},{rotation:12,stagger:.05,ease:'none',scrollTrigger:{trigger:'#iconography',start:'top 80%',end:'bottom 30%',scrub:true}});
   gsap.fromTo('.qx-celebration .qa-arm',{rotation:-9,transformOrigin:'50% 75%'},{rotation:12,stagger:.1,ease:'none',scrollTrigger:{trigger:'#the-whole-night',start:'top 70%',end:'bottom 40%',scrub:true}});
  },study);
  return ()=>context?.revert();
 });
 const refresh=()=>{if(token===epoch&&study.isConnected)ScrollTrigger.refresh()};
 document.fonts.ready.then(refresh);study.querySelectorAll('img').forEach(i=>{if(!i.complete)i.addEventListener('load',refresh,{once:true})});requestAnimationFrame(refresh);
}
