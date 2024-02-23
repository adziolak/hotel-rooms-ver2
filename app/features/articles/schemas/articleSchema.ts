import { z } from "zod";

const articleSchema = z.object({
  id: z.number(),  
  name: z.string(),
  publicationDate: z.string(),  
  shortDescription: z.string(),
  topic: z.string(),
  image: z.string()
});

export default articleSchema;