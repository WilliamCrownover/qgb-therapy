type Props = {
	className?: string
	content: string
}

export const TabbedParagraph = ({className, content}: Props) => {
	return (
		<p className={className} style={{ textIndent: '40px' }}>{content}</p>
	)
}