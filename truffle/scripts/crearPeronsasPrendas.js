const Retail = artifacts.require("Retail");

module.exports = async function(callback) {
  try {
    // Obtén una instancia del contrato
    const retail = await Retail.deployed();

    // Usar las cuentas de usuario
    const accounts = await web3.eth.getAccounts();
    /*if (accounts.length < 10) {
      throw new Error("No hay cuentas.");
    }*/

    // Dirección del propietario/administrador
    const ownerAddr = accounts[0];
    console.log("Cuenta del Propietario/Administrador =", ownerAddr);

    // Crea información personal para la cuenta del propietario/administrador
    await retail.almacenarInformacionPersonal("Alejandro Ramirez", "Santander", "bafybeifzrr6hwrnjsbanek2vvoaobynrseqsbj6kfy5zyelvyu2a7xpy7", { from: ownerAddr });

    // Obtiene información personal de la cuenta del propietario/administrador
    const infoPropietario = await retail.informacionPersonal(ownerAddr);
    console.log("Información del Propietario:", infoPropietario);

    // Crea una prenda para la cuenta del propietario/administrador
    await retail.crearPrenda("Lana merino", "Pamplona", "Chaqueta de lana","bafybeihar4kntyc3lrq5aqkajoqfcuueojtbqahw55k3qrljhqmtqqbj74", { from: ownerAddr });

    // Obtiene información de la prenda creada por el propietario/administrador
    const infoPrenda = await retail.obtenerInformacionPrenda(1);
    console.log("Información de la Prenda:", infoPrenda);

    // Obtiene todos los IDs de prendas asociadas a la cuenta del propietario/administrador
    const idsPrendasPropietario = await retail.obtenerIdsPrendasPorPersona(ownerAddr);
    console.log("IDs de Prendas del Propietario:", idsPrendasPropietario);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("FIN");
    callback();
  }
};
