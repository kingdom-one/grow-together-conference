import { useState } from 'react';

export default function ConsentBanner() {
	const userConsent = JSON.parse(localStorage.getItem('userConsent')) || {};
	const [consent, setConsent] = useState(userConsent.analytics || false);

	if (!consent) {
		return (
			<div className="consent-banner sticky-bottom text-bg-yellow p-3">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6">
							<p className="mb-0">
								We're using Google Analytics to let us know you
								visited! By click "I agree", you consent to our
								use of cookies. For more information, please
								read our{' '}
								<a
									className="text-black"
									href="https://www.kingdomone.co/privacy-policy/"
									target="_blank"
								>
									privacy policy
								</a>
								.
							</p>
						</div>
						<div className="col-auto flex-shrink-1">
							<button
								className="btn btn-primary fs-base px-3 py-2 fw-normal"
								onClick={() => {
									localStorage.setItem(
										'userConsent',
										JSON.stringify({
											analytics: true,
											ads: false,
										})
									);
									setConsent(true);
									window.location.reload(); // Reload to apply consent settings
								}}
							>
								I agree
							</button>
							<button
								className="btn btn-outline-secondary fs-base px-3 py-2 fw-normal ms-3"
								onClick={() => {
									localStorage.setItem(
										'userConsent',
										JSON.stringify({
											analytics: false,
											ads: false,
										})
									);
									setConsent(true);
								}}
							>
								Opt Out
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
