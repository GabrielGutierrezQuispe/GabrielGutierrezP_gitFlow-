function calcularCostoTotal(precio, impuestos, descuento) {
    return precio * (1 + impuestos) - descuento;
  }
  // Currying
  function aplicarImpuestos(impuestos) {
    return function (precio) { 
      return precio * (1 + impuestos);
    };
  }
  // Currying
  function aplicarDescuento(descuento) {
    return function (precio) { 
      return precio - descuento;
    };
  }
  
  // función parcial 
  const aplicarIVA = aplicarImpuestos(0.1); 
  // función parcial 
  const aplicarDescuento20 = aplicarDescuento(20); 
  
  const costoIVAyDescuento = (precio) => {
    const precioConIVA = aplicarIVA(precio); 
    const precioConDescuento = aplicarDescuento20(precioConIVA); 
    return precioConDescuento;
  };
  
  const costoFinal = costoIVAyDescuento(100); 
  console.log(costoFinal); 