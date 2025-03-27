import { z } from 'astro/zod';

const endpoint = "https://gql.hashnode.com/"

export async function fetchPosts(page?:number) {
    const query = `
        query {
            user(username: "Lijucay") {
                posts(page: ${page ? page : 1}, pageSize: 10) {
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                        previousPage
                        nextPage
                    }
                    totalDocuments
                    edges {
                        node {
                            id
                            title
                            brief
                            coverImage { url }
                            publishedAt
                            readTimeInMinutes
                        }
                    }
                }
            }
        }
    `;

    const hashnodePostSchema = z.object({
        id: z.string(),
        title: z.string(),
        brief: z.string(),
        coverImage: z.object({
            url: z.string()
        }).nullable(),
        publishedAt: z.string(),
        readTimeInMinutes: z.number()
    });

    const hashnodeResponseSchema = z.object({
        data: z.object({
            user: z.object({
                posts: z.object({
                    pageInfo: z.object({
                        hasNextPage: z.boolean().nullable(),
                        hasPreviousPage: z.boolean().nullable(),
                        previousPage: z.number().nullable(),
                        nextPage: z.number().nullable()
                    }),
                    totalDocuments: z.number(),
                    edges: z.array(z.object({ node: hashnodePostSchema}))
                })
            })
        })
    });

    try {
        const response = await fetch(
            endpoint,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query })
            }
        );

        if (!response.ok) {
            console.error(`Hashnode API request failed: ${response.status} ${response.statusText}`);
            return;
        }

        const jsonData = await response.json();
        const parsedData = hashnodeResponseSchema.safeParse(jsonData);

        if (parsedData.success) {
            return parsedData.data.data.user.posts;
        } else {
            console.error('Data from Hashnode API does not match expected format:', parsedData.error);
        }
    } catch (error) {
        console.error('Error fetching data from Hashnode API', error);
    }
}

export async function getBlogContent(id: string) {
    const query = `
        query {
            post(id: "${id}") {
                coverImage { url }
                title
                content { html }
            }
        }
    `

    const hashnodePostSchema = z.object({
        coverImage: z.object({
            url: z.string()
        }).nullable(),
        title: z.string(),
        content: z.object({
            html: z.string()
        })
    });

    const hashnodeResponseSchema = z.object({
        data: z.object({
            post: hashnodePostSchema
        })
    });

    try {
        const response = await fetch(
            endpoint,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query })
            }
        );

        if (!response.ok) {
            console.error(`Hashnode API request failed: ${response.status} ${response.statusText}`);
            return;
        }

        const jsonData = await response.json();
        const parsedData = hashnodeResponseSchema.safeParse(jsonData);

        if (parsedData.success) {
            return parsedData.data.data.post;
        } else {
            console.error('Data from Hashnode API does not match expected format:', parsedData.error);
        }
    } catch (error) {
        console.error('Error fetching data from Hashnode API:', error)
    }
}