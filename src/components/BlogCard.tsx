import React from "react";


type BlogCardProps = {
    image?: {
        url: string;
        alt: string;
    }
    title: string;
    description: string;
    tags: string[],
    publishedIn: string,
    url: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, url, tags, publishedIn }) => {
    return (
        <div
            onClick={() => {window.open(url, "_self")}}
            className="flex flex-col text-center cursor-pointer justify-center items-center rounded-3xl p-6 bg-(--color-primary-container) overflow-hidden transition-transform hover:scale-[1.01]"
        >
            {image && (
                <img src={image.url} alt={image.alt} className="transition-filter rounded-xl mb-5"/>
            )}

            <p className="text-(--color-tertiary-on-container) font-bold mb-3">In: {publishedIn}</p>

            <h1 className={`text-2xl font-extrabold text-(--color-primary-on-container) mb-2`}>
                {title}
            </h1>

            <p className="text-(--color-primary-on-container)">{description}</p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
                {
                    tags.map((tag, index) => (
                        <div
                            key={index}
                            className="rounded-full px-4 py-1 text-sm bg-(--color-primary-on-container) font-medium text-(--color-primary-container)"
                        >{tag}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogCard;