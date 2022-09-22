export const currencyFormat = (amount) => {
    return ((+amount).toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 }));
  };

  export const remainingClassName = (budget, remaining) => {
    let className = 'alert alert-success';
  
    if (remaining >= budget * 0.75) {
      className = 'alert alert-success';
    } else if (remaining >= budget * 0.5) {
      className = 'alert alert-warning';
    } else if (remaining >= budget * 0.25) {
      className = 'alert alert-danger';
    } else {
      className = 'alert alert-dark';
    }
  
    return className;
  };