import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: bisque;
  font-size: 24px;
  font: 500;
`
const StyledBadge = styled(Badge)`
  background-color: brown !important;
  font-size: 30px;
  font: 500;
  color: white;
`

function Badges(props) {
  return (
    <div>
      <h5>
        {props.title}
      </h5>
      <h6>
        Example heading <StyledBadge>New</StyledBadge>
      </h6>
      <StyledDiv>
        {props.data}
      </StyledDiv>
    </div>
  );
}

export default Badges