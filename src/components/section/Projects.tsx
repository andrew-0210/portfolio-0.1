"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { projects } from "@/constants/data";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
	const projectRef = useRef<(HTMLAnchorElement | null)[]>([]);

	useGSAP(() => {
		projectRef.current.forEach((el) => {
			if (!el) return;
			gsap.to(el, {
				y: 0,
				opacity: 1,
				ease: "power1.inOut",
				duration: 1.5,
				scrollTrigger: {
					trigger: el,
					start: "top 150%",
					end: "bottom 70%",
					scrub: 0.5,
				},
			});
		});
	}, []);

	return (
		<section
			className="px-[1.25rem] relative"
			id="projects">
			<h2 className="font-display text-center text-[2rem] md:text-[3rem] text-[#999999]">
				Featured Works
			</h2>
			<div className="mt-[1.875rem] md:mt-[3.75rem]">
				{projects.map((project, i) => (
					<Link
						href={project.href}
						className="h-[60vh] md:h-[85vh] flex items-end p-[2rem] md:pb-[4rem] bg-[#262626] mb-[1.875rem] opacity-0 translate-y-30 rounded-[20px] justify-center hover:ring-3 hover:ring-[#BC4200]"
						key={i}
						ref={(el) => (projectRef.current[i] = el)}>
						<div className="block">
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
