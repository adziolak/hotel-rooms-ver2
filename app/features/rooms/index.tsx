import { type FC } from 'react';
import { Title } from '@mantine/core';
import BookingForm from './components/BookingForm';
import classes from "./Rooms.module.css";
import type { Room } from './typings'; 

const Rooms: FC = () => {

    const handleBookRoom = (room: Room) => {
        console.log(room);
    }

    return (
        <section className={classes.rooms}>             
            <Title order={1} c="white" mt="xl" fw={300} fz={{ base: "1.5rem", md: "2.25rem", lg: "3rem"}}>
                Booking with us is easy
            </Title>             
            <Title order={2} c="white" fw={500} fz={{ base: "1.25rem", md: "1.5rem", lg: "1.875rem"}}>
                The best holiday experience
            </Title>      
            <BookingForm onBookRoom={handleBookRoom} />            
        </section>
    )
}

Rooms.displayName = "Rooms";

export default Rooms;