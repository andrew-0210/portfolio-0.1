import { uiSkills, uxSkills } from "@/constants/data";

export default function Skills() {
	return (
		<section className="container px-[1.125rem]">
			<h2 className="font-display text-center text-[2rem] md:text-[3rem] text-[#999999]">
				Skills
			</h2>
			<div className="flex flex-col md:flex-row gap-[1.875rem] mt-[1.875rem] md:mt-[3.75rem]">
				<div className="flex-1 flex flex-col gap-[1.875rem] px-[1.875rem] py-[2.5rem] bg-[#262626] rounded-[20px] text-[0.938rem] ">
					<div>
						<span className="text-[1.5rem] font-semibold tracking-[-1.5px]">
							UX Design
						</span>
						<div className="flex flex-wrap gap-[0.5rem] mt-[1.125rem]">
							{uxSkills.map((skill, i) => (
								<span
									key={i}
									className="text-[#fff] bg-[#BC4200] inline-block px-[0.75rem] py-[0.25rem] rounded-[6px] font-medium -tracking-[0.5px]">
									{skill}
								</span>
							))}
						</div>
					</div>
					<div>
						<span className="text-[1.5rem] font-semibold tracking-[-1.5px]">
							UI Design
						</span>
						<div className="flex flex-wrap gap-[0.5rem] mt-[1.125rem]">
							{uiSkills.map((skill, i) => (
								<span
									key={i}
									className="text-[#000] bg-[#FF9F43] inline-block px-[0.75rem] py-[0.25rem] rounded-[6px] font-medium -tracking-[0.5px]">
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-1 px-[1.875rem] py-[2.5rem] bg-[#262626] rounded-[20px] items-center">
					<code className="text-[#ffc527] inline-block font-semibold">
						<span className="text-[#4dbdd6] italic font-semibold">
							let <span className="text-[#e14bff] ">UIDevelopment</span>
						</span>{" "}
						= &#123; <br />
						<span className="text-[#fff] font-medium">structure:</span>{" "}
						[&quot;HTML&quot;, &quot;JSX&quot;], <br />
						<span className="text-[#fff] font-medium">styling:</span>{" "}
						[&quot;CSS&quot;, &quot;Tailwind_CSS&quot;], <br />
						<span className="text-[#fff] font-medium">interactivity:</span>{" "}
						[&quot;JavaScript&quot;, &quot;Typescript(beginner)&quot;], <br />
						<span className="text-[#fff] font-medium">frameworks:</span>{" "}
						[&quot;React.js&quot;, &quot;React_Native(beginner)&quot;,
						&quot;Next.js(beginner)&quot;], <br />
						<span className="text-[#fff] font-medium">
							animation_library:
						</span>{" "}
						[&quot;GSAP&quot;, &quot;Framer Motion&quot;], <br />
						[&quot;GSAP&quot;, &quot;Framer Motion&quot;], <br />
						&#125; <br />
						<span className="text-[#757575] text-balance inline-block ">
							&#47;&#47;initialized object using let because skills will expand
							in the future.
						</span>
					</code>
				</div>
			</div>
		</section>
	);
}
