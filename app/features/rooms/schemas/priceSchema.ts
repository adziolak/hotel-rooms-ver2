import { z } from "zod";

const priceSchema = z.object({
  value: z.number(),
  currencyCode: z.string(),  
});

export default priceSchema;