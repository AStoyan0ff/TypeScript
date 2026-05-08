type Hallway = 'A' | 'C';

type FloorOne = {

    number: 1;
    hallway: 'A' | 'C';
    train(): void;
    pass?: 'Guest';
};

type FloorTwo = {

    number: 2;
    hallway: 'A' | 'C';
    dine(): void;
    pass?: 'Guest';
};

type FloorThree = {

    number: 3;
    hallway: 'A' | 'C';
    sleep(): void;
};

type HotelFloor = FloorOne | FloorTwo | FloorThree;

function visitFloor(floor: HotelFloor) {

    switch (floor.number) {
        case 1:
            floor.train();
            return;

        case 2:
            floor.dine();
            return;

        case 3:
            floor.sleep();
            return;
    }
}

visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });
visitFloor({ sleep() { }, number: 3, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'C' });