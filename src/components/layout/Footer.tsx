import Button from "../ui/Button";

export default function Footer() {
	return (
		<footer
			className="container px-[1.125rem] pt-[2rem] pb-[4rem] md:pt-[4.385rem]"
			id="contact">
			<div className="flex items-center justify-center">
				<div className="flex flex-col gap-[2.75rem] text-balance sm:max-w-[60%] items-center text-center">
					<h3 className="font-display text-[2.5rem] md:text-[4.5rem] leading-[1] ">
						Let's build great products together!
					</h3>
					<p className="text-[0.875rem] leading-[24px] md:text-[1.125rem] md:leading-[30px]">
						Everything meaningful starts with a conversation. I am open to
						emails anytime. If there&apos;s something exciting to explore
						together, let&apos;s dive in.
					</p>
					<div className=" flex gap-[1rem]">
						<Button
							type="button"
							className="shadow-[0px_4px_0px_rgba(188,66,0,1)] ">
							<a href="mailto:andrewmonthero0210@gmail.com">
								Contact via Email
							</a>
						</Button>
						<Button type="button">
							<a
								href="/documents/Andrew_Monthero_UI-UX_Designer_Resume.pdf"
								download>
								Resume
							</a>
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}
