import styled from '@emotion/styled'
import { media } from './mixins'

interface PageWrapperProps {
  grid?: boolean
}

export const PageWrapper = styled.section<PageWrapperProps>`
  margin: 0 auto;
  width: 100%;
  max-width: '100%';
  position: relative;
  padding: var(--space-sm);
  grid-template-columns: 1fr;
`
