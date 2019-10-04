import styled from 'styled-components'

const TextBlock = styled.p`
  font: 17pt 'Times';
  max-width: 50%;
  max-height: 400px;
  overflow: auto;
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '40px')};
`

export default TextBlock
