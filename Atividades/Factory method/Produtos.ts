// Interface comum para computadores
interface Computer {
    ram: number;  // RAM em GB
    hdd: number;  // HDD em GB
    cpu: number;  // CPU em GHz
    type: string; // Tipo do computador (PC ou Server)
    toString(): string;
}

// Implementação da classe PC
class PC implements Computer {
    ram: number;
    hdd: number;
    cpu: number;
    type: string;

    constructor(ram: number, hdd: number, cpu: number) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = 'PC';
    }

    toString(): string {
        return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}

// Implementação da classe Server
class Server implements Computer {
    ram: number;
    hdd: number;
    cpu: number;
    type: string;

    constructor(ram: number, hdd: number, cpu: number) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = 'Server';
    }

    toString(): string {
        return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}

// Fábrica abstrata
abstract class ComputerFactory {
    abstract createComputer(ram: number, hdd: number, cpu: number): Computer;
}

// Fábrica concreta que decide qual tipo de computador criar
class ConcreteComputerFactory extends ComputerFactory {
    createComputer(ram: number, hdd: number, cpu: number): Computer {
        // Aqui você pode adicionar lógica para escolher entre PC e Server
        // Neste exemplo, vamos criar um PC se a RAM for menor ou igual a 16GB, e um Server caso contrário
        if (ram <= 16) {
            return new PC(ram, hdd, cpu);
        } else {
            return new Server(ram, hdd, cpu);
        }
    }
}

// Exemplo de uso
const factory = new ConcreteComputerFactory();

const pc = factory.createComputer(8, 256, 3.5);
console.log(pc.toString());  // Tipo: PC, RAM: 8GB, HDD: 256GB, CPU: 3.5GHz

const server = factory.createComputer(32, 2048, 4.0);
console.log(server.toString());  // Tipo: Server, RAM: 32GB, HDD: 2048GB, CPU: 4.0GHz

