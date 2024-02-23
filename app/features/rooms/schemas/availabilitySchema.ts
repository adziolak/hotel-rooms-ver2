import { z } from "zod";
import priceSchema from "./priceSchema";

export enum AvailabilityStatus {
    Available = "available",
    OnRequest = "onRequest",
    SoldOut = "soldOut", 
    Error = "error"
}

const availabilitySchema = z.object({
  availabilityStatus: z.nativeEnum(AvailabilityStatus),
  price: z.union([priceSchema, z.null()]),  
});

export default availabilitySchema;