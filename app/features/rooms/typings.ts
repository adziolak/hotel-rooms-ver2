import { z } from 'zod';
import roomSchema from "./schemas/roomSchema";
import priceSchema from "./schemas/priceSchema";
import availabilitySchema, { AvailabilityStatus } from "./schemas/availabilitySchema";

export type Room = z.infer<typeof roomSchema>;
export type Price = z.infer<typeof priceSchema>;
export type Availability = z.infer<typeof availabilitySchema>;

export {
    AvailabilityStatus
}