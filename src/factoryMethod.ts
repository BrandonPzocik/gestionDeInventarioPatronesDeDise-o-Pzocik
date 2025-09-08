interface IEquipo {
  nombre: string;
  ram: string;
  procesador: string;
  detalles(): string;
}

class Notebook implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string
  ): IEquipo {
    switch (tipo) {
      case "Notebook":
        return new Notebook(nombre, ram, procesador);
      case "Desktop":
        return new Desktop(nombre, ram, procesador);
      case "Servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error("Tipo de equipo no válido");
    }
  }
}

const factory = new EquipoFactory();

const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());

const desktop = factory.crearEquipo("Desktop", "PC Gamer", "32GB", "Ryzen 9");
console.log(desktop.detalles());

const servidor = factory.crearEquipo(
  "Servidor",
  "HP ProLiant",
  "128GB",
  "Xeon"
);
console.log(servidor.detalles());
