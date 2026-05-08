type Diagnostics = {
    partName: string;
    runDiagnostics(): string;
};

type CarBody = {
    material: string;
    state: string;
};

type Tires = {
    airPressure: number;
    condition: string;
};

type Engine = {
    hp: number;
    oilDensity: number;
};

type CarBodyWithDiagnostics = CarBody & Diagnostics;
type TiresWithDiagnostics = Tires & Diagnostics;
type EngineWithDiagnostics = Engine & Diagnostics;

function monitorCar(

    carBody: CarBodyWithDiagnostics,
    tires: TiresWithDiagnostics,
    engine: EngineWithDiagnostics

): void {

    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}

const carBody = {

    material: 'aluminum',
    state: 'scratched',
    partName: 'Car Body',

    runDiagnostics() {
        return this.partName;
    }
};

const tires = {

    airPressure: 30,
    condition: 'needs change',
    partName: 'Tires',

    runDiagnostics() {
        return this.partName;
    }
};

const engine = {

    hp: 300,
    oilDensity: 780,
    partName: 'Engine',
    
    runDiagnostics() {
        return this.partName;
    }
};

monitorCar(carBody, tires, engine);