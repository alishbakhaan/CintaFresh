import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

const openNavbarBtn = document.querySelector('#open-navbar-btn');
const closeNavbarBtn = document.querySelector('#close-navbar-btn');
const navbar = document.querySelector('#navbar');

openNavbarBtn.addEventListener('click', () => {
  navbar.classList.remove('max-lg:-translate-x-full');
})
closeNavbarBtn.addEventListener('click', () => {
  navbar.classList.add('max-lg:-translate-x-full');
})

gsap.registerPlugin(ScrollTrigger, Flip);

let section1Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "center top",
    scrub: 0.6,
    onEnter: () => {
      section1Timline.to('#section1-img-box1', {
        y: -300,
      }, "<")
      section1Timline.to(['#section1-img-box2'], {
        y: 300,
      }, "<")
    },
  }
})

gsap.set('#section3-img', { opacity: 0 })
gsap.set('#section3-text-box', { x: 500, y: 500 })

let section3Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3",
    start: "top 30%",
    onEnter: () => {
      section3Timline.to('#section3-img', {
        opacity: 1,
        duration: 0.6,
        ease: "power3"
      }, "<")

      section3Timline.to('#section3-text-box', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3"
      }, "<")
    },
    // onLeave: () => {
    //   section3Timline.to('#section3-img', {
    //     y: 500,
    //     opacity: 0,
    //   }, ">")
    // }
  },
});

gsap.set('#section4-img', { scale: 0.3 })
gsap.set('#section4-text-box', { x: 500, y: 500, })

let section4Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section4",
    toggleActions: "play complete none none",
    start: "top 30%",
    end: "center top",
    onEnter: () => {
      section4Timline.to('#section4-img', {
        scale: 1,
        duration: 0.6,
        ease: "power3"
      }, "<")

      section4Timline.to('#section4-text-box', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3"
      }, "<")
    },
  }
})

const imgBox1Height = document.querySelector('#section5-img-box1').scrollHeight - 680;
gsap.set('#section5-img-box2', { y: `-${imgBox1Height}` })

let section5Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section5",
    start: "top top",
    end: "center top",
    scrub: 0.5,
    onEnter: () => {
      section5Timline.to(['#section5-img-box1', '#section5-img-box3'], {
        y: `-${imgBox1Height}`,
      }, "<")
      section5Timline.to(['#section5-img-box2'], {
        y: 0,
      }, "<")
    },
  }
})

let section6Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section6-img-grid",
    start: "top top",
    end: 'bottom top',
    toggleActions: "play complete none none",
    once: true,
    onEnter: () => {
      // section6Timline.to('.section6-img', {
      //   x: "100vw",
      // }, "<")
      // section6Timline.to('.section6-img-alt', {
      //   scale: 3,
      // }, "<")
      const firstImage = document.querySelector('.section6-img:first-child');
      const imageContainer1 = document.querySelector('.section6-img-col1');
      const imageContainer2 = document.querySelector('.section6-img-col2');

      const state = Flip.getState('.section6-img');

      firstImage.classList.remove('col-span-full');

      Flip.from(state, {
        duration: 1, onComplete: () => {
          imageContainer1.classList.remove('translate-x-full', 'absolute');
          imageContainer2.classList.remove('translate-x-full', 'absolute');
        }
      });

      section6Timline.to('#section6-logo', {
        x: 200,
        y: 200,
        opacity: 0,
        duration: 1
      })
    },
  }
})

// const section7ImgBox = document.querySelector('#section7-img-box');

// let section7Timline = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#section7",
//     start: "top top",
//     scrub: 0.6,
//     // markers: true,
//     onEnter: () => {
//       section7Timline.to('#section7-img-box', {
//         x: `-${section7ImgBox.scrollWidth - section7ImgBox.clientWidth}`,
//       }, "<")
//     },
//   }
// })

// const boxes = gsap.utils.toArray("#section7-img-box>*"),
//   loop = horizontalLoop(boxes, { paused: true, repeat: true, speed: 2 });

// ScrollTrigger.create({
//   trigger: "#section7",
//   start: "top top",
//   end: 'bottom top',
//   onEnter: () => { loop.play(); },
//   onEnterBack: () => { loop.play(); },
//   onLeave: () => { loop.pause(); },
//   onLeaveBack: () => { loop.pause(); },
// })
const section7ImgBoxOuter = document.querySelector("#section7-img-box-outer");
const section7ImgBox = document.querySelector("#section7-img-box");

section7ImgBoxOuter.setAttribute("data-animated", true);

const section7Imgs = Array.from(section7ImgBox.children);

section7Imgs.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  section7ImgBox.appendChild(duplicatedItem);
});

gsap.set('#bottle-fill-container #bottle-fill', { yPercent: 100 });

let section8Timline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section8",
    start: "top center",
    end: "bottom top",
    scrub: true,
    onEnter: () => {
      section8Timline.to('#bottle-fill-container #bottle-fill', {
        yPercent: 0,
      }, "<")
    },
  }
})

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
- Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
- When each item animates to the left or right enough, it will loop back to the other side
- Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
- The returned timeline will have the following methods added to it:
- next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
- previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
- toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
- current() - returns the current index (if an animation is in-progress, it reflects the final index)
- times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
*/
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
  }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
        gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
    gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}
