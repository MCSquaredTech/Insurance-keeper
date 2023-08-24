import { Link } from 'react-router-dom';
import Start from './Start';
import GettingStarted from '../Components/GettingStarted';


import './Page.css';

const Home = () => (
  <div className="mainPage pageLine">
    <h1>Home Inventory Catalog</h1>
    <p>
      In mollit tempor do non reprehenderit sit irure eu pariatur nisi dolor. Non consequat dolore minim irure
      duis irure officia exercitation excepteur Lorem. Commodo do Lorem ipsum anim.
    </p>
    <p>
      Quis dolore sit pariatur cupidatat. Mollit do consequat ex occaecat ipsum aute elit ex est. Cupidatat incididunt
      et proident do. Nisi eiusmod dolor sint amet veniam enim dolore reprehenderit dolor eiusmod fugiat.
    </p>
    <p>
      Ipsum elit minim tempor consequat laboris ullamco. Quis ullamco aliquip do voluptate laboris do ullamco
      reprehenderit laboris cillum. Excepteur do qui fugiat dolor id est et deserunt est aute sunt id. Nostrud
      deserunt fugiat enim magna magna do reprehenderit laboris proident minim enim.
    </p>

    <GettingStarted />
    <Link to="getStarted" >Start</Link>

  </div>
)

export default Home
