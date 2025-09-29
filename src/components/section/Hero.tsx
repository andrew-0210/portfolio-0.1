import Button from "../ui/Button";

export default function Hero() {
	return (
		<section className="container flex flex-col gap-[3.75rem] items-center justify-center  px-[1.25rem] pt-[12rem] py-[4.5rem]">
			<h1 className="font-headline text-[3.5rem] lg:text-[5.5rem] leading-[1] text-center text-balance text-[#999999]">
				I turn user needs into{" "}
				<span className="font-display text-shadow-[0px_0px_8px_rgba(255,255,255,0.5)] text-shadow-[#ffffff] text-white">
					interfaces people love.
				</span>
			</h1>
			<div className="flex flex-col gap-[1.875rem] max-w-[850px] items-center">
				<p className="text-balance text-center text-[0.938rem] md:text-[1rem]">
					I&apos;ve designed HRM platforms, aviation apps, websites, and mobile
					solutions, always with the same focus: empathetic design and crafting
					digital experiences that truly work.
				</p>
				<div className=" flex gap-[1rem]">
					<Button
						type="button"
						className="shadow-[0px_4px_0px_rgba(188,66,0,1)]">
						Let&apos;s build great products
					</Button>
					<Button type="button">Resume</Button>
				</div>
			</div>
		</section>
	);
}
