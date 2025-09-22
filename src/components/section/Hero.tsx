export default function Hero() {
	return (
		<section className="container flex flex-col gap-[3.75rem] items-center justify-center h-screen px-[1.25rem] py-[2.5rem] md:py-[4.5rem]">
			<h1 className="font-headline text-[3.5rem] lg:text-[5.5rem] leading-[1] text-center text-balance text-shadow-[0px_0px_8px_rgba(255,255,255,0.5)] text-shadow-[#ffffff]">
				I turn user needs into{" "}
				<span className="font-display">interfaces people love.</span>
			</h1>
			<div className="flex flex-col gap-[1.875rem] max-w-[850px] items-center">
				<p className="text-balance text-center">
					Over the past few years, I&apos;ve worked on HRM platforms, aviation
					monitoring apps, dental and real estate websites, and mobile apps for
					product display and bus tracking. My focus is always the same: design
					with empathy, code with precision, and craft digital experiences that
					work — on both web and mobile.
				</p>
				<div className=" flex gap-[1.875rem]">
					<button type="button">Let&apos;s build great products</button>
					<button type="button">Resume</button>
				</div>
			</div>
		</section>
	);
}
