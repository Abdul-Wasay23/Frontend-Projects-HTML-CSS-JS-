gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".banner-box");

gsap.to(".banner-box", {
	xPercent: -100 * (sections.length - 1),
	ease: "none",
	scrollTrigger: {
		trigger: ".banner_sec",
		pin: true,
		scrub: 1,
		end: () => "+=" + document.querySelector(".banner_sec").offsetWidth,
	}
});
