import { css } from "@emotion/react"
import { media } from "../../styles/mixins"

export function BigHref({
  link,
  cta
}: {
  link: string,
  cta: string
}) {
  return (
    <a
      className='big-link'
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <span>{cta}</span>
    </a>
  )
}
