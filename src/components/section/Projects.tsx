"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { projects } from "@/constants/data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
	// const tl = gsap.timeline({ paused: true });

	// useGSAP(() => {
	// 	tl.to(".outer-container", {
	// 		clipPath: "polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)",

	// 		scrollTrigger: {
	// 			trigger: ".outer-container",
	// 			start: "top bottom",
	// 			end: "top top",
	// 			scrub: 0.5,
	// 		},
	// 	});
	// 	tl.to(
	// 		".outer-container",
	// 		{
	// 			clipPath: "polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)",
	// 			scrollTrigger: {
	// 				trigger: ".outer-container2",
	// 				start: "top bottom",
	// 				end: "top -20%",
	// 				scrub: 0.5,
	// 			},
	// 		},
	// 		"+=1",
	// 	);
	// }, []);

	return (
		<section className="px-[1.25rem] relative">
			<h2 className="font-display text-center text-[2rem] md:text-[3rem] text-[#999999]">
				Featured Works
			</h2>
			<div className="mt-[1.875rem] md:mt-[3.75rem] ">
				{projects.map((project, i) => (
					<Link
						href={project.href}
						className="h-[80vh] flex items-end p-[2rem] bg-[#262626] mb-[1.875rem]"
						key={i}>
						<div className="content">
							<p className="font-display text-center tracking-normal text-[1.5rem] md:text-[2rem] leading-[30px] whitespace-pre-line">
								<span className="text-[1.5rem]">
									({i <= 9 ? "0" + (i + 1) : i + 1})
								</span>{" "}
								<span className="font-sans tracking-[-0.8] font-medium md:tracking-[-2.5] ">
									{project.title} |
								</span>{" "}
								{project.subTitle}
							</p>
						</div>
						<div className="img"></div>
					</Link>
				))}
			</div>
		</section>
	);
}
