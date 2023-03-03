import { Hearts } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <Hearts
      height="80"
      width="80"
      color="rgb(114, 134, 211)"
      ariaLabel="hearts-loading"
      wrapperClass={css.wrap}
      visible={true}
    />
  );
};
