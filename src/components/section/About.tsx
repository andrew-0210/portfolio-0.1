export default function About() {
	return (
		<section
			className="container md:grid grid-cols-12 gap-[1.875rem] px-[1.25rem] py-[2.5rem] md:py-[4.5rem] h-dvh"
			id="about">
			<div className="md:col-span-8 md:col-start-3 flex flex-col gap-[1.875rem]">
				<h2 className="font-medium text-[2rem] md:text-[2.5rem] leading-[1.2] md:leading-[48px] tracking-[-2.5px]">
					I approach design with{" "}
					<span className="font-display tracking-normal text-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] text-shadow-[#ffffff]">
						empathy
					</span>
					, code with{" "}
					<span className="font-display tracking-normal text-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] text-shadow-[#ffffff]">
						precision
					</span>
					, and always keep{" "}
					<span className="font-display tracking-normal text-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] text-shadow-[#ffffff]">
						users
					</span>{" "}
					at the heart of every decision. I enjoy collaborating with teams,
					asking{" "}
					<span className="font-display tracking-normal text-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] text-shadow-[#ffffff]">
						&apos;why&apos;
					</span>{" "}
					before jumping into{" "}
					<span className="font-display tracking-normal text-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] text-shadow-[#ffffff]">
						&apos;how&apos;
					</span>
					, and delivering work that balances{" "}
					<span className="font-display tracking-normal text-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] text-shadow-[#ffffff]">
						creativity
					</span>{" "}
					with{" "}
					<span className="font-display tracking-normal text-shadow-[0px_0px_5px_rgba(255,255,255,0.5)] text-shadow-[#ffffff]">
						functionality.
					</span>
				</h2>
				<div>
					<p className="mb-[1rem] font-normal">
						I believe great products are born when design meet execution.
						I&apos;m Andrew, a UX Designer who loves turning ideas into real,
						usable digital experiences. For me, design isn&apos;t just about
						pretty screens, it&apos;s about solving problems and making
						technology feel human.
					</p>
					<p>
						Whether you&apos;re a recruiter looking for a versatile
						designer-developer, or a client who wants their ideas brought to
						life, I bring the unique advantage of understanding both the design
						process and the code that makes it real.
					</p>
				</div>
			</div>
		</section>
	);
}
