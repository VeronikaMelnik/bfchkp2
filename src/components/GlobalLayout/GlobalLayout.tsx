import { Header } from "./Header/Header"
import styles from './GlobalLayout.module.scss'

type Props = {
	children?: JSX.Element | Array<JSX.Element>
	isHideFooter?: boolean
}

export const GlobalLayout = ({ children, isHideFooter }: Props) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			{children}
			{!isHideFooter && <p>footer</p>}
		</div>
	)
}