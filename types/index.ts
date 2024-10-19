export interface Tags {
    id: number
    text: string
}

export interface BenefitsArray {
    heading: string
    imageURL: string
    paragraph: string
    tags: Tags[]
}