import { z } from "zod";
import priceSchema from "./priceSchema";
import avaibilitySchema from "./availabilitySchema";

const roomSchema = z.object({
  id: z.number(),
  name: z.string(),  
  price: z.union([priceSchema, z.null()]),
  availability: avaibilitySchema.optional()
});

export default roomSchema;