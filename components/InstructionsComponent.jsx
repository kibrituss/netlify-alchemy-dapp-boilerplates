import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Create<span>3D Animation in the Cloud</span>
				</h1>
				<p>
					Welcome to future that you can reach up to 100K Cuda Core in Single Render Server for your outstanding 3D Project's Rendering Processes.
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://www.kibrit.com.tr/rental-gpu-render-farm/"}
				>
					<div className={styles.button}>
						<img
							src="https://kibrit.com.tr/tmp/favicon.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Cloud Render Farm</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://www.kibrit.com.tr/gpu-render-farm-cost-estimator/"}
				>
					<div className={styles.button}>
						<img
							src="https://kibrit.com.tr/tmp/favicon.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Cloud Render Farm Cost Estimator</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://www.kibrit.com.tr/product/cloud-gpu-render-server-1w-4xrtx3090/"}
				>
					<div className={styles.button}>
						<img
							src="https://kibrit.com.tr/tmp/favicon.svg"
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
						style={{ width: "100px", height: "53px" }}
						src="https://www.kibrit.com.tr/wp-content/uploads/2020/08/Kibrit_logo_3D-Animation-Studios.png"
						alt="3D ANimasyon Yapım Şirketi, 3D Animasyon Yapan Firmalar"
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
