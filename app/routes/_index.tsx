import type { FC } from "react";
import Rooms from "~/features/rooms";
import Testimonial from "~/components/Testimonial";
import { SimpleGrid } from "@mantine/core"; 
import { IconMap2, IconHeart, IconWallet } from '@tabler/icons-react';

const Index: FC = () => {
    return (
        <div>
            <Rooms />
            <SimpleGrid cols={{ base: 1, md: 3 }}>           
                <Testimonial 
                    icon={<IconMap2 />}
                    title="Find the perfect rental"
                >
                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in
                </Testimonial>                
                <Testimonial 
                    icon={<IconWallet />}
                    title="Book with confidence"
                >
                    The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit
                </Testimonial>
                <Testimonial 
                    icon={<IconHeart />}
                    title="Enjoy your vacation"
                >
                    His room, a proper human room although a little too small, lay peacefully between its four familiar
                </Testimonial>
            </SimpleGrid>
        </div>        
    )
}

export default Index;