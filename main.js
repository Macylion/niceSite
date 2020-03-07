import { gsap } from "gsap";

gsap.to(".landing", { height: "60%", duration: 0.5, ease: "power4.in" }).then(
	() => {
		gsap.to(".landing", {
			width: "75%",
			duration: 0.5,
			delay: 0.1
		});
		gsap.to(".header", {
			left: "8%",
			opacity: 1,
			duration: 0.8,
			delay: 0.6,
			ease: "power3.out"
		});
		gsap.to(".behind", { width: "100%", duration: 0.5, delay: 0.4 });
		//menu
		//gsap.to("nav", { top: "0", duration: 0.4, delay: 0.6 }); // delete this if not
		gsap.to(".title, .menu", { top: "4vh", duration: 1, delay: 0.6 });
	}
);

document.onscroll = window.onscroll = () => {
	let pos = window.pageYOffset || document.body.scrollTop;
	if (pos >= 10) gsap.to("nav", { top: "0", duration: 0.25 });
	else gsap.to("nav", { top: "-14vh", duration: 0.25 });
};
