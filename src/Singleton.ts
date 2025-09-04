interface Equipo {
    nombre : string
    tipo : string 
    estado : "disponible "| "en reparacion"
}

class Inventario {
    private static instancia: Inventario
    private equipos : Equipo[] = []

 private constructor() {}

 public static obtenerInstancia(): Inventario{
    if (!Inventario.instancia){
        Inventario.instancia = new Inventario()
    }
    return Inventario.instancia
 }

 public agregarEquipo(nombre:string, tipo:string, estado:Equipo["estado"]) : void {
    const equipo: Equipo = {nombre, tipo, estado} 
    this.equipos.push(equipo)
 }

 public listarEquipos(): Equipo[]{
    return this.equipos
 }

}

const inventario = Inventario.obtenerInstancia()
inventario.agregarEquipo("LevonoBrandon", "Portatil", "en reparacion")
console.log(inventario.listarEquipos())