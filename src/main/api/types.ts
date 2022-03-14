export type ProfileResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean;// подтвердил ли почту
    rememberMe: boolean
    error?: string
}

export type QueryPackParamsType = {
    packName: string;
    min: number;
    max: number;
    sortPacks: string;
    page: number;
    pageCount: number;
    user_id: string;
}

export type PacksResponseType = {
    cardPacks: [
        {
            _id: string
            user_id: string
            name: string
            cardsCount: number
            created: Date
            updated: Date
        },
    ]
    cardPacksTotalCount: number
    // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number
    // количество элементов на странице
}
export type NewPackType = {
    name: string
    deckCover: string
    private: boolean
}
export type UpdatePackType = {
    _id: string;
    name?: string;
}

export type QueryCardsParamsType = {
    cardAnswer: string
    cardQuestion: string
    cardsPack_id: string
    min: number
    max: number
    sortCards: string
    pageCount: number
}
export type CardsResponseType = {
    cards: [
        {
            answer: string
            question:string
            cardsPack_id: string
            grade:number
            shots: number
            user_id: string
            created: Date
            updated: Date
            _id: string
        },
    ]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
export type NewCardType = {
    cardsPack_id: string
    question: string
    answer: string
    grade: number
    shots: number
    answerImg: string
    questionImg: string
    questionVideo:string
    answerVideo: string
}
export type UpdateCardType = {
    _id: string;
    question: string;
    answer: string;
}