export const qs = function(expr, context) {
    return (context || document).querySelector(expr);
}

export const qsa = function(expr, context) {
    return [].slice.call((context || document).querySelectorAll(expr), 0);
}

export const byId = function(id) {
    return document.getElementById(id);
}