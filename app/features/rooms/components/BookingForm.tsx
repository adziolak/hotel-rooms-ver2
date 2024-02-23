import { type FC, useMemo, useCallback, useState } from "react";
import { useGetRoomsQuery, useGetRoomsAvailabilityMutation } from "../api";
import { Flex, Button, Input, InputBase, Combobox, useCombobox } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import classes from "./BookingForm.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import RoomOption from "./RoomOption";
import { type Room, AvailabilityStatus } from "../typings"; 

interface Props {
    onBookRoom: (room: Room) => void;
}

const BookingForm: FC<Props> = ({
    onBookRoom
}) => {
    const { data: entityState } = useGetRoomsQuery();
    const [ getRoomsAvailability, { data } ] = useGetRoomsAvailabilityMutation();

    const [room, setRoom] = useState<Room | null>(null);

    const rooms = useMemo(() => {
        if (entityState) {
            const { ids, entities } = entityState;
            return ids.map(id => entities[id]);
        }

        return [];
    }, [entityState]);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const handleToggle = useCallback(() => {
        if (data) {
            combobox.toggleDropdown();
        } else {            
            if (entityState) {     
                getRoomsAvailability(entityState.ids).then(() => {                  
                    combobox.toggleDropdown();
                });
            }
        }   
    }, [combobox, data, entityState, getRoomsAvailability]);

    const handleClick = () => {
        if (room) {
            onBookRoom(room);
        }
    }

    return (      
        <div className={classes.container}>          
            <Combobox
                store={combobox}
                onOptionSubmit={(id) => {
                    if (entityState) {
                        const room = entityState.entities[parseInt(id)];                    
                        setRoom(room);

                        if (room.availability?.availabilityStatus !== AvailabilityStatus.Available) {                        
                            notifications.show({ message: "This room is not available", color: "red" });
                        }    
                    }

                    combobox.closeDropdown();
                }}                   
            >                           
                <Combobox.DropdownTarget>
                <Flex className={classes.form} mt="md">                      
                        <InputBase
                            component="button"
                            type="button"
                            pointer
                            rightSection={<IconChevronDown size={16} />}
                            rightSectionPointerEvents="none"
                            onClick={handleToggle}
                            className={classes.combobox}
                            h={"100%"}
                        >
                            <strong>{room?.name || <Input.Placeholder>Select Room</Input.Placeholder>}</strong>
                        </InputBase>
                                    
                        <Button 
                            disabled={room?.availability?.availabilityStatus !== AvailabilityStatus.Available}
                            variant="gradient" 
                            gradient={{ from: 'pink', to: 'grape', deg: 90 }} 
                            mr={{ base: "-1px" }}
                            style={{ borderRadius: '100px' }}
                            onClick={handleClick}>
                            Book
                        </Button>   
                                
                    </Flex>
                </Combobox.DropdownTarget>
                
                <Combobox.Dropdown>
                    <Combobox.Options mah={320} style={{ overflowY: 'auto' }}>
                        {rooms.map((item) => (
                            <Combobox.Option value={item.id.toString()} key={item.id}>
                                <RoomOption {...item} />
                            </Combobox.Option>
                        ))}               
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>        
        </div>   
    )
}

BookingForm.displayName = "BookingForm";

export default BookingForm;