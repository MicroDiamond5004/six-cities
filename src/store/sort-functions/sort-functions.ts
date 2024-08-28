import { Offer } from '../../types/type-offers';

export function sortByHighPrice(offerA: Offer, offerB: Offer) {
    if (offerA.cost > offerB.cost) {
        return -1;
    }

    if (offerA.cost < offerB.cost) {
        return 1;
    }

    return 0;
}

export function sortByHighRating(offerA: Offer, offerB: Offer) {
    if (offerA.rating > offerB.rating) {
        return -1;
    }

    if (offerA.rating < offerB.rating) {
        return 1;
    }

    return 0;
}

export function sortByLowPrice(offerA: Offer, offerB: Offer) {
    if (offerA.cost < offerB.cost) {
        return -1;
    }

    if (offerA.cost > offerB.cost) {
        return 1;
    }

    return 0;
}
