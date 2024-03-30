import { Container } from '@openedx/paragon';
import './index.scss';

const Domain1Page = () => (
  <Container>
    <h2>Domain One</h2>
    <p>
      I am loaded as a remote script, and I am getting react, react-dom, and paragon from the
      shell application.  I also specify my own stylesheet that turns h1 tags to green.
    </p>
  </Container>
);

export default Domain1Page;
