export type Comment = {
    offerId: string;
    comment: string;
    rating: number;
}

export type PageComment = {
    "id": string;
    "date": Date;
    "user": {
        "name": string;
        "avatarUrl": string;
        "isPro": boolean;
    },
    "comment": string;
    "rating": number;
}
