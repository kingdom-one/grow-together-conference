import type { Props } from '../../components/2025Accordion.astro';
interface TrackInfo extends Props {}

export const AccordionItems: TrackInfo[] = [
	{
		title: 'HR',
		items: [
			'Beyond the Questions: Aligning Values and Uncovering Talent in Interviews',
			'Kickstarting Culture & Engagement',
			'Minister Matters: Compensation Essentials for Ministers',
		],
	},
	{
		title: 'Finance',
		items: [
			'Oops, we did it again: Epic failures, foibles, and fumbles',
			'Stewarding Resources: A Guide to Church Budgeting',
			'Building for Growth: Financial Modeling for Church Sustainability',
		],
	},
	{
		title: 'Marcom',
		items: [
			'Branding in Ministry: The Art of Making Ministry Three Dimensional',
			'Social Media Strategy for Ministries: Engaging Your Community Online',
			'Creativite Leadership',
			'How to Communicate with Communications',
		],
	},
	{
		title: 'Senior Leaders',
		items: [
			'How to Identify & Fix the Right Problem',
			'Stories behind the Real Data',
			'Leading with Purpose: Shaping the Leader Behind the Role',
			'Leading Your Leaders: How to effectively lead your people managers',
		],
	},

	{
		title: 'People Managers',
		items: [
			'Empowering Excellence: Mastering Performance Management Success',
			'Caring for the Caregivers: Fostering Mental Health and Wellness for Pastors and Ministry Staff',
			'Beyond Thank You: Transforming Workplace Culture with Meaningful Recognition',
			'Chat Smarter, Lead Better: Mastering Meaningful One-on-Ones',
		],
	},
	{
		title: 'Business Admin/Legal',
		items: [
			'Stewarding Integrity: Navigating Your Church’s Audit with Confidence',
			'Getting Stuff Done: Project Management 101',
			'When tithing is not enough: preparing your church for a titheless world',
		],
	},
	{
		title: 'Youth Ministry',
		items: [
			'Becoming Fishers of Men: Reaching Students on Local Campuses',
			'Effective Communication 101',
			'Reaching the Least, Last, and Lost: Effectively Reaching Students Far from God',
			'Introducing the 7 Emphases of Discipleship: A Pathway to Spiritual Growth for Students',
		],
	},
	{
		title: 'Worship',
		items: [
			'Foundation for Healthy Ministries',
			'Gaining Awareness: Rest, Trust, Discipleship',
		],
	},
];
