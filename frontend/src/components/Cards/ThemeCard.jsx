import React from 'react';

export default function ThemeCard({image, title, description, onClick}) {
    return (
        <article className="theme-card" onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={0}>
            {image && <img src={image} alt={title} />}
            <h3>{title}</h3>
            {description && <p>{description}</p>}
        </article>
    )
}