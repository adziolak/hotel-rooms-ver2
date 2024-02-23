import { z } from "zod";
import articleSchema from "./schemas/articleSchema";

export type Article = z.infer<typeof articleSchema>;