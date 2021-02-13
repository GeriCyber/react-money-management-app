export const checkBudget = (budget, residuary) => {
    if ((budget / 4) > residuary) {
        return 'alert alert-danger';
    }

    if ((budget / 2) > residuary) {
        return 'alert alert-warning';
    } 
    
    return 'alert alert-success';
}