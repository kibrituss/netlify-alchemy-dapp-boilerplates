import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://www.kibrit.com.tr" target={"_blank"}>
				<img className={styles.alchemy_logo} src="https://www.kibrit.com.tr/wp-content/uploads/2020/08/Kibrit_logo_3D-Animation-Studios.png"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
