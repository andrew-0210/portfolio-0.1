"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { projects } from "@/constants/data";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

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
					start: "top 200%",
					end: "bottom 80%",
					scrub: 0.5,
				},
			});
		});
	}, []);

	return (
		<section
			className="px-[1.25rem] relative sm:px-0"
			id="projects">
			<h2 className="font-display text-center text-[2rem] md:text-[3rem] text-[#999999]">
				Featured Works
			</h2>
			<div className="mt-[1.875rem] md:mt-[3.75rem]">
				{projects.map((project, i) =>
					i < 4 ? (
						<Link
							href={project.href}
							className="relative h-[60vh] md:h-[85vh] flex items-end p-[2rem] md:pb-[4rem] bg-[#262626] mb-[1.875rem] sm:mb-0 opacity-0 translate-y-30 rounded-[20px] lg:rounded-none justify-center hover:ring-3 hover:ring-[#BC4200] overflow-hidden"
							key={i}
							ref={(el) => {
								if (el) projectRef.current[i] = el;
							}}>
							<div className="block z-[999]">
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
							<div>
								<Image
									src={project.imgUrl}
									alt={project.imgUrl}
									fill
									className="object-fill"
								/>
							</div>
						</Link>
					) : (
						<Link
							href={project.href}
							className="font-display text-center tracking-normal text-[1.5rem] md:text-[2rem] leading-[30px] whitespace-pre-line p-[2rem] inline-block border mb-[1.5rem] rounded-[12px] border-[#999999] hover:ring-3 hover:ring-[#BC4200]"
							key={i}>
							<span className="text-[1.5rem]">
								({i <= 9 ? "0" + (i + 1) : i + 1})
							</span>{" "}
							<span className="font-sans tracking-[-0.8] font-medium md:tracking-[-2.5]">
								{project.title} |
							</span>{" "}
							<span>{project.subTitle}</span>
						</Link>
					),
				)}
			</div>
		</section>
	);
}
