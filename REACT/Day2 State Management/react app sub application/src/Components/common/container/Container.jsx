import container from './Container.module.css';

function Container(props) {
  console.log(props)
  return <div data-testid="common-container" className={container.container}>{props.children}</div>;
}

export default Container;
