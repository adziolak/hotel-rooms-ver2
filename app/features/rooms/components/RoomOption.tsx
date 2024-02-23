import { type FC, useMemo } from "react";
import classes from "./RoomOption.module.css";
import { Text, NumberFormatter } from "@mantine/core";
import { Room } from "../typings";
import priceSchema from "../schemas/priceSchema";

const RoomOption: FC<Room> = ({
    name,
    availability,
    price
}) => {

    const priceDifference = useMemo(() => {        
        if (availability?.price && price) {
            const originalPrice = price.value ??= 0;
            const checkedPrice = availability.price.value ??= 0;

            const value = originalPrice - checkedPrice;

            if (value) {
                const result = priceSchema.safeParse({
                    value,
                    currencyCode: price.currencyCode
                });

                if (result.success) {
                    return result.data;
                }
            }
        }

        return null;

    }, [availability, price]);

    return (                  
        <div
            className={classes.room}
            data-status={availability?.availabilityStatus}
        >            
            <div className={classes.title}>
                {name}
                {priceDifference ?
                    <div className={classes.description}>
                        The difference between original and checked price:&nbsp;                     
                        <Text fw={700} c={"dark"} span className={classes.price}>
                            <NumberFormatter value={priceDifference.value} suffix={` ${priceDifference.currencyCode}`} />
                        </Text>
                    </div>  : null 
                }
            </div>          
            {price ?
                <NumberFormatter className={classes.price} value={price.value} suffix={` ${price.currencyCode}`} /> : null 
            }
        </div>        
    )
}

RoomOption.displayName = "RoomOption";

export default RoomOption;