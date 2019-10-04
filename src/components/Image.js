import styled from 'styled-components'

const Image = styled.img`
  height: ${props => (props.height ? props.height : '400px')};
  width: ${props => (props.width ? props.width : '400px')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '20px')};
`

export default Image
