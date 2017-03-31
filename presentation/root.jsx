import styles from './root.css'

const Root = () => <div className={ styles.wrapper }>
  <div className={ styles.status }></div>
  <img id="image-result" hidden />
</div>

export default Root
