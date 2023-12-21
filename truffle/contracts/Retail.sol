// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Retail {
    // Estructura para almacenar informacion personal
    struct DatosPersonales {
        string nombre;
        string lugarTrabajo;
        string url;
        uint[] prendas; // Identificadores de prendas asociadas
    }

    // Estructura para almacenar informacion de prendas
    struct InformacionPrenda {
        uint idPrenda; // Identificador único de la prenda
        address creador; // Direccion del creador de la prenda
        string material;
        string localizacion;
        string nombre;
        string url; // Nueva propiedad URL
    }

    // Mapeo de direcciones a informacion personal
    mapping(address => DatosPersonales) public informacionPersonal;

    // Mapeo de identificadores de prendas a informacion de prendas
    mapping(uint => InformacionPrenda) public informacionPrenda;

    // Contador para generar identificadores únicos de prendas
    uint private contadorPrendas;

    // Number of DatosPersonales
    address[] public DatosPersonales_array;

    // Number of Prendas_array
    uint[] public Prendas_array;

    // Constructor del contrato
    constructor() {
        contadorPrendas = 0;
    }

 

    // Funcion para ver el número de compañias que hay
    function getDatosPersonalesLength() external view returns (uint256) {
        if (DatosPersonales_array.length > 0) {
            return DatosPersonales_array.length;
        } else {
            return 0; // or handle this case accordingly
        }
    }
    // Funcion para ver el número de compañias que hay
    function getPrendasLength() external view returns (uint256) {
        if (Prendas_array.length > 0) {
            return Prendas_array.length;
        } else {
            return 0; // or handle this case accordingly
        }
    }


    // Funcion para almacenar informacion personal
    function almacenarInformacionPersonal(
        string memory _nombre,
        string memory _lugarTrabajo,
        string memory _url
    ) public {
        require(bytes(_nombre).length > 0, "El nombre no puede estar vacio");

        DatosPersonales storage persona = informacionPersonal[msg.sender];
        persona.nombre = _nombre;
        persona.lugarTrabajo = _lugarTrabajo;
        persona.url = _url;
        DatosPersonales_array.push(msg.sender);
    }

    // Funcion para almacenar informacion de prendas
    function crearPrenda(string memory _material, string memory _localizacion, string memory _nombre, string memory _url) public {
        require(bytes(_material).length > 0, "El material no puede estar vacio");
        require(bytes(_localizacion).length > 0, "La localizacion no puede estar vacia");
        require(bytes(informacionPersonal[msg.sender].nombre).length > 0, "Primero debes crear una persona");
        require(bytes(_nombre).length > 0, "El nombre no puede estar vacio");

        // Incrementar el contador de prendas
        contadorPrendas++;

        // Crear una nueva prenda
        InformacionPrenda storage prenda = informacionPrenda[contadorPrendas];
        prenda.idPrenda = contadorPrendas;
        prenda.creador = msg.sender;
        prenda.material = _material;
        prenda.localizacion = _localizacion;
        prenda.nombre = _nombre;
        prenda.url = _url; // Nueva propiedad URL

        // Asociar la nueva prenda al creador
        informacionPersonal[msg.sender].prendas.push(contadorPrendas);
        Prendas_array.push(contadorPrendas);
    }

    // Funcion para obtener informacion de una prenda y la persona que la hizo por su ID
    function obtenerInformacionPrenda(uint _idPrenda) public view returns (
        string memory nombrePersona,
        string memory lugarTrabajoPersona,
        string memory urlPersona,
        string memory material,
        string memory localizacion,
        string memory nombre,
        string memory url,
        address creador
    ) {
        InformacionPrenda storage prenda = informacionPrenda[_idPrenda];
        DatosPersonales storage persona = informacionPersonal[prenda.creador];

        nombrePersona = persona.nombre;
        lugarTrabajoPersona = persona.lugarTrabajo;
        urlPersona = persona.url;
        material = prenda.material;
        localizacion = prenda.localizacion;
        url = prenda.url;
        nombre = prenda.nombre;
        creador = prenda.creador;
    }

    // Funcion para obtener todos los IDs de prendas asociadas a una persona
    function obtenerIdsPrendasPorPersona(address _wallet) public view returns (uint[] memory) {
        return informacionPersonal[_wallet].prendas;
    }

    // Funcion para obtener la cantidad de prendas asociadas a una persona
    function obtenerIdsPrendasPorPersonalength(address _wallet) public view returns (uint256) {
        return informacionPersonal[_wallet].prendas.length;
    }




}
