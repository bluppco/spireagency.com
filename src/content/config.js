import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        link: z.string(),
        order: z.number(),
        active: z.boolean(),

    })

})

export const collections = {

    "header": headerCollection,

}
