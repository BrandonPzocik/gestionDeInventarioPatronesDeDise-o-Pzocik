interface Observador {
  notificar(equipo: Equipo, nuevoEstado: string): void;
}

class Soporte implements Observador {
  notificar(equipo: Equipo, nuevoEstado: string): void {
    console.log(
      `Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${nuevoEstado}.`
    );
  }
}

class Equipo {
  private observadores: Observador[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    private estado: string
  ) {}

  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  public cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    for (const obs of this.observadores) {
      obs.notificar(this, this.estado);
    }
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
