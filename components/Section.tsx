import React, { FC, useState } from 'react';

interface SectionProps {
  title: string;
  subtitle: string;
}

const Section: FC<SectionProps> = ({ title, subtitle }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            {isExpanded ? (
                <div>
                    <h1 className="text-brand-orange text-4xl">{title}</h1>
                    <h2 className="text-brand-orange pb-6">{subtitle}</h2>
                </div>
            ) : (
                <h1 className="text-brand-orange text-4xl tracking-widest">{title}</h1>
            )
            }
        </>
    )
}

export default Section