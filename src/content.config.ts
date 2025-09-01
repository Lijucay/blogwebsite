import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {z} from "zod";

const qwotableEntries = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/qwotable"
    }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        author: z.string(),
        tags: z.array(z.string()),
    })
})

const bitsAndBeyondEntries = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/bits_and_beyond"
    }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        author: z.string(),
        tags: z.array(z.string()),
    })
})

export const collections = { qwotableEntries, bitsAndBeyondEntries }