gsap.registerPlugin(ScrollTrigger);

gsap.to("#layer-1", {
	y: 600,
	ease: "none",
	scrollTrigger: {
		trigger: document.body,
		start: "top top",
		end: "+=1000",
		scrub: true
	}
});

gsap.to("#layer-2", {
	y: 100,
	ease: "none",
	scrollTrigger: {
		trigger: document.body,
		start: "top top",
		end: "+=1000",
		scrub: true
	}
});

gsap.to("#layer-3", {
	y: 100,
	ease: "none",
	scrollTrigger: {
		trigger: document.body,
		start: "top top",
		end: "+=1000",
		scrub: true
	}
});

gsap.to("#layer-4", {
	y: -60,
	ease: "none",
	scrollTrigger: {
		trigger: document.body,
		start: "top top",
		end: "+=1000",
		scrub: true
	}
});

gsap.set("#layer-5", {
	yPercent: -40,
	opacity: 1
});

gsap.to("#layer-5", {
	yPercent: -15,
    opacity: 1,
	ease: "none",
	scrollTrigger: {
		trigger: document.body,
		start: "top top",
		end: "+=130",
		scrub: true
	}
});

