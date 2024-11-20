/**
 * The Campaign Tracker Component; based on the Bootstrap Progress Bar.
 */
export default function CampaignTracker() {
	return (
		<div
			className="progress"
			role="progressbar"
			aria-label="Basic example"
			aria-valuenow={0}
			aria-valuemin={0}
			aria-valuemax={100}
		>
			<div className="progress-bar" style={{ width: '25%' }}>
				25% of $2,500
			</div>
		</div>
	);
}
