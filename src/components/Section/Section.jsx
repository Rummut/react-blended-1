import { Section } from "./Section.styled"

export const CustomSection = ({title, color, children}) => {
    return (
        <Section>
            {title && <h2 style={{ color}}>{title}</h2>}
            {children}</Section>
    )
}