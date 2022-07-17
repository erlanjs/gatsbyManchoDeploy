import cn from "classnames"
import React from "react"

import { TitleProps } from "./Title.props"

// @ts-ignore
export const Title = ({
  tag,
  children,
  color = "black",
  size,
  indexing = 0,
  className,
  indexingBg,
  indexingColor,
  ...props
}: TitleProps): JSX.Element => {
  switch (tag) {
    case "h1":
      // @ts-ignore
      return (
        <h1
          className={cn("h1", className)}
          style={{ color: color, fontSize: size }}
          {...props}
        >
          {indexing > 0
            ? children
                ?.toString()
                .substr(0, children?.toString().length - indexing)
            : children}
          <span style={{ background: indexingBg, color: indexingColor }}>
            {children
              ?.toString()
              .substr(
                children?.toString().length - indexing,
                children?.toString().length
              )}
          </span>
        </h1>
      )
    case "h2":
      // @ts-ignore
      return (
        <h2
          className={cn("h1", className)}
          style={{ color: color, fontSize: size }}
          {...props}
        >
          {indexing > 0
            ? children
                ?.toString()
                .substr(0, children?.toString().length - indexing)
            : children}
          <span style={{ background: indexingBg, color: indexingColor }}>
            {children
              ?.toString()
              .substr(
                children?.toString().length - indexing,
                children?.toString().length
              )}
          </span>
        </h2>
      )
    case "h3":
      // @ts-ignore
      return (
        <h3
          className={cn("h1", className)}
          style={{ color: color, fontSize: size }}
          {...props}
        >
          {indexing > 0
            ? children
                ?.toString()
                .substr(0, children?.toString().length - indexing)
            : children}
          <span style={{ background: indexingBg, color: indexingColor }}>
            {children
              ?.toString()
              .substr(
                children?.toString().length - indexing,
                children?.toString().length
              )}
          </span>
        </h3>
      )
    case "h4":
      // @ts-ignore
      return (
        <h4
          className={cn("h1", className)}
          style={{ color: color, fontSize: size }}
          {...props}
        >
          {indexing > 0
            ? children
                ?.toString()
                .substr(0, children?.toString().length - indexing)
            : children}
          <span style={{ background: indexingBg, color: indexingColor }}>
            {children
              ?.toString()
              .substr(
                children?.toString().length - indexing,
                children?.toString().length
              )}
          </span>
        </h4>
      )
    default:
      return <></>
  }
}
