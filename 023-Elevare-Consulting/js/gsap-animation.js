// gsap.registerPlugin(ScrollTrigger);
/*
function pbmit_card_verticel_pinning() {
	const panels = gsap.utils.toArray(".pbmit-element-card-box-style-1 .pbmit-card-box-wrapper");
	const spacer = 0;
	const panelHeight = panels[0].offsetHeight + 120;

	panels.forEach((panel, i) => {
		const innerBox = panel.querySelector('.step-main-card');

		gsap.set(panel, { top: i * 30 });

		gsap.to(panel, {
			scrollTrigger: {
				trigger: panel,
				start: "top bottom-=100",
				end: "top top+=40",
				scrub: 1,
				invalidateOnRefresh: true
			},
			ease: "none",
			scale: 1 - (panels.length - i) * 0.028
		});

		const isLast = i === panels.length - 1;

		ScrollTrigger.create({
			trigger: panel,
			start: "top 50px",
			endTrigger: '.pbmit-element-card-box-style-1',
			end: `bottom top+=${panelHeight + (panels.length * spacer) - 100}`,
			pin: true,
			pinSpacing: false,
			anticipatePin: 1,
			// onEnter: () => {
			// 	if (!isLast) {
			// 		gsap.to(innerBox, { backgroundColor: "#2a2a2c", duration: 0.5 });
			// 	}
			// },
			// onLeaveBack: () => {
			// 	if (!isLast) {
			// 		gsap.to(innerBox, { backgroundColor: "#ee1c42", duration: 0.5 });
			// 	}
			// }
		});
	});
}

window.addEventListener("load", function () {
	pbmit_card_verticel_pinning();
	ScrollTrigger.refresh();
});

*/