interface TechStackCardProps {
    content: string
}

export const TechStackCard = ( { content }: TechStackCardProps) => {
    const randomHue = Math.floor(Math.random() * 360);
    const bgColor = `hsl(${randomHue}, 80%, 90%)`;
    const borderColor = `hsl(${randomHue}, 80%, 70%)`;

    return (
        <div 
            style={{ 
                backgroundColor: bgColor,
                borderColor: borderColor
            }}
            className="p-1 rounded-2xl shadow-md w-full flex items-center justify-center"
            >
            <p className="font-medium text-gray-800">{content}</p>
        </div>
    )
}