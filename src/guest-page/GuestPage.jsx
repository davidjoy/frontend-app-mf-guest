import { Container } from '@openedx/paragon';
import './index.scss';

const GuestPage = () => (
  <Container>
    <h2>Guest Page</h2>
    <p>
      I am the guest, and am loaded as a remote script. I am getting react, react-dom, and paragon
      from the host application.  I also specify my own stylesheet that turns h1 and h2 tags to green.
    </p>
  </Container>
);

export default GuestPage;
