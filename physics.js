function getAcceleration(objet) {
    if (typeof objet.f !== 'undefined' && typeof objet.m !== 'undefined') {
        return objet.f/objet.m
    }else if (typeof objet.Δv !== 'undefined' && typeof objet.Δt !== 'undefined') {
        return objet.Δv / objet.Δt
    }else if (typeof objet.t !== 'undefined' && typeof objet.d !== 'undefined') {
        return (2*d) / (t*t)
    }else {
        return 'impossible'
    }
}