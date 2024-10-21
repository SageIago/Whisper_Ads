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

export interface WorkingListArray {
    heading: string
    text1: string
    text2: string
    text3: string
    text4: string
}

export interface MarketingArray {
    imgURL: string
    heading: string
    text: string
    sub_text: string
}

export interface FooterLink {
    text: string
}

export interface FooterIcon {
    icon: string
    title: string
}