import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export interface TitleProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  tag: "h1" | "h2" | "h3" | "h4"
  children: any
  color?: string
  indexing?: number
  indexingBg?: string
  size?: string
  indexingColor?: string
}
