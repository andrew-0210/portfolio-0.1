import { companyList } from "@/constants/data";

export default function Experience() {
	return (
		<section className="container py-[4.385rem] px-[1.125rem]">
			<h2 className="font-display text-center text-[2rem] md:text-[3rem] text-[#999999]">
				Experience{" "}
				<span className="text-[1.5rem] md:text-[2.25rem] ">
					({`${new Date().getFullYear() - 2022}+ years`})
				</span>
			</h2>
			<div className="md:grid md:grid-cols-12">
				<div className="flex mt-[1.875rem] md:mt-[3.75rem] gap-[2.5rem] flex-col-reverse md:col-span-8 md:col-start-3 ">
					{companyList.map((skill, i) => (
						<div
							className=" flex justify-between items-center gap-[1rem]"
							key={i}>
							<div className="flex items-center gap-[0.5rem] flex-1/4">
								<span className="font-display text-[1.25rem] md:text-[1.5rem]">
									({i <= 9 ? "0" + i : i})
								</span>
								<div className="">
									<p className="text-[1rem] md:text-[1.5rem] leading-[21.6px] font-medium tracking-[-0.8]">
										{skill.company}
									</p>
									<p className="text-[0.938rem] md:text-[1.125rem] text-[#999999] tracking-[-0.8] font-medium">
										{skill.designation}
									</p>
								</div>
							</div>
							<div className="text-[0.938rem] md:text-[1.125rem] text-[#999999] tracking-[-0.8] font-medium flex-1 text-end">
								{skill.duration}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
