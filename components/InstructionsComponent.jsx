import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					create<span>-web3-dapp</span>
				</h1>
				<p>
					Wellcome to Hevaen of Cuda for your renderin task in the cloud{" "}
					<span>/pages/index.js</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://www.kibrit.com.tr/rental-gpu-render-farm/"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Cloud Render Farm</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://www.kibrit.com.tr/gpu-render-farm-cost-estimator/"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Cloud Render Farm Cost Estimator</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://www.kibrit.com.tr/product/cloud-gpu-render-server-1w-4xrtx3090/"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Cloud Render Farm Credit Packs</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="https://www.kibrit.com.tr" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="All About 3D Animation and more"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://g.page/r/CeeuGANdrEKGEB0/review"
							target={"_blank"}
						>
							Leave a star on Google Bussiness
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/KibritCreative"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
