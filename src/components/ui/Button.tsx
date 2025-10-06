import clsx from "clsx";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: ButtonProps) {
	return (
		<button
			className={clsx(
				"border border-[#333333] rounded-[12px] px-[1rem] md:px-[2rem] py-[0.5rem] bg-[#262626] cursor-pointer text-[0.875rem]",
				className,
			)}
			{...props}>
			{children}
		</button>
	);
}
