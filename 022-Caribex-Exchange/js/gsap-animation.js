// Register GSAP Plugins
if (typeof gsap !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

// --- LUXURY LOADER & SCROLL REVEALS ---
document.addEventListener("DOMContentLoaded", function () {
	if (typeof gsap === 'undefined') return;

	// 1. Loader & Banner Sequence (Home Page Only)
	const loader = document.querySelector("#visual-loader");
	const banner = document.querySelector(".banner_sec");

	if (loader) {
		const tl = gsap.timeline();

		// Initial State
		gsap.set(".loader-logo", { opacity: 0, y: 30 });
		gsap.set(".progress-bar", { width: "0%" });

		tl.to(".loader-logo", {
			opacity: 1,
			y: 0,
			duration: 1.2,
			ease: "expo.out"
		})
			.to(".progress-bar", {
				width: "100%",
				duration: 2,
				ease: "power2.inOut"
			}, "-=0.5")
			.to(".loader-status", {
				opacity: 0,
				duration: 0.3
			})
			.to(loader, {
				y: "-100%",
				duration: 1.5,
				ease: "expo.inOut"
			});

		if (banner) {
			tl.from(banner, {
				scale: 1.1,
				duration: 2,
				ease: "expo.out"
			}, "-=1");
		}

		tl.add(() => {
			ScrollTrigger.refresh();
			if (typeof AOS !== 'undefined') {
				AOS.refresh();
			}
		});
	}

	// 2. Scroll Trigger Reveal: Text
	const revealTexts = gsap.utils.toArray(".gsap-reveal-text");
	if (revealTexts.length > 0) {
		revealTexts.forEach((section) => {
			const headline = section.querySelector("h2");
			if (headline) {
				gsap.set(headline, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" });

				gsap.to(headline, {
					scrollTrigger: {
						trigger: section,
						start: "top 98%",
						toggleActions: "play none none none"
					},
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
					duration: 1.5,
					ease: "expo.out"
				});
			}
		});
	}

	// 3. Scroll Trigger Reveal: Images
	const revealImgs = gsap.utils.toArray(".gsap-reveal-img");
	if (revealImgs.length > 0) {
		revealImgs.forEach((container) => {
			const images = container.querySelectorAll("img");
			if (images.length > 0) {
				gsap.set(container, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" });

				const tlImg = gsap.timeline({
					scrollTrigger: {
						trigger: container,
						start: "top 95%",
						toggleActions: "play none none none"
					}
				});

				tlImg.to(container, {
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
					duration: 1.8,
					ease: "expo.inOut"
				})
					.to(images, {
						scale: 1,
						duration: 2,
						ease: "expo.out",
						stagger: 0.2
					}, "-=1.5");
			}
		});
	}
});

// Final refresh on full window load to fix any shifted triggers
window.addEventListener('load', () => {
	ScrollTrigger.refresh();
	if (typeof AOS !== 'undefined') {
		AOS.refresh();
	}
});

// --- EXISTING BANNER SLIDER LOGIC ---
$(document).ready(function () {
	if (typeof $ === 'undefined' || !$.fn.slick) return;

	$('.banner-slider').on('init', function (event, slick) {
		animateSlideElementsActive(slick.$slides.eq(0));
	});

	$('.banner-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.banner-slider').on('afterChange', function (event, slick, currentSlide) {
		animateSlideElementsActive(slick.$slides.eq(currentSlide));
	});

	function animateSlideElementsActive(slide) {
		if (typeof gsap === 'undefined' || !slide || slide.length === 0) return;
		const tl = gsap.timeline();
		const bg = slide.find('.banner-right-img, .banner-left-img');
		const h6 = slide.find('.f-22');
		const h4 = slide.find('h4, .move');
		const shoe = slide.find('.banner-right-shoe, .banner-left-shoe');
		const btn = slide.find('.theme-btn');

		if (bg.length === 0 && h6.length === 0 && h4.length === 0 && shoe.length === 0 && btn.length === 0) return;

		gsap.killTweensOf([bg, h6, h4, shoe, btn]);
		gsap.set([bg, h6, h4, shoe, btn], { clearProps: "all" });

		tl.fromTo(bg,
			{ scale: 1.3, filter: 'blur(8px)' },
			{ scale: 1, filter: 'blur(0px)', duration: 1.5, ease: "power2.out" }
		)
			.from(h6, {
				duration: 0.6,
				x: -150,
				skewX: 15,
				opacity: 0,
				ease: "expo.out"
			}, "-=1.3")
			.from(h4, {
				duration: 0.8,
				y: 60,
				rotationX: -30,
				opacity: 0,
				ease: "elastic.out(1, 0.75)"
			}, "-=1.1")
			.fromTo(shoe,
				{ x: 200, y: 50, rotation: 30, scale: 0.4, opacity: 0 },
				{ x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1, ease: "expo.out" },
				"-=0.9"
			)
			.fromTo(btn,
				{ scale: 0, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
				"-=0.7"
			)
			.to(shoe, {
				duration: 2,
				y: "+=15",
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut"
			});
	}
});
