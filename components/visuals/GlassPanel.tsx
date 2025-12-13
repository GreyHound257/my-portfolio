import { PropsWithChildren } from 'react';

export default function GlassPanel({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
	return (
		<div className={"glass rounded-xl p-6 " + className}>
			{children}
		</div>
	);
}

