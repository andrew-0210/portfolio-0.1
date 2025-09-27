"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
	const tl = gsap.timeline({ paused: true });

	useGSAP(() => {
		tl.to(".outer-container", {
			clipPath: "polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)",
			ease: "power1.in",
			scrollTrigger: {
				trigger: ".outer-container",
				start: "top 300%",
				scrub: true,
			},
		});
		tl.to(
			".outer-container",
			{
				clipPath: "polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)",
				scrollTrigger: {
					trigger: ".outer-container",
					start: "top 300%",
					scrub: true,
				},
			},
			"+=1",
		);
	}, []);

	return (
		<section className="h-[400vh] relative">
			<div className="sticky h-dvh top-[8rem]">
				<div className="outer-container">
					<div className="content">
						<h2>Projects</h2>
					</div>
					<div className="img"></div>
				</div>
				<div className="outer-container2">
					<div className="content2">
						<h2>The Game</h2>
					</div>
					<div className="img2"></div>
				</div>
			</div>
		</section>
	);
}
