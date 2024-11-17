import type { Props } from '../../components/2025Accordion.astro';
interface TrackInfo extends Props {}

export const AccordionItems: TrackInfo[] = [
	{
		title: 'HR',
		items: [
			'Interviewing 101',
			'Kickstarting Culture & Engagement',
			'Ministers 101 ✝️',
		],
	},
	{
		title: 'Finance',
		items: [
			'Oops, we did it again: Epic failures, foibles, and fumbles',
			'Budgeting 101',
			'Financial Modeling',
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
			'Coaching Related',
			'Leading your Leaders - How to effectively lead your people managers',
		],
	},

	{
		title: 'People Managers',
		items: [
			'Performance Management + HR Technology',
			'Caring for Staff and their Mental Wellness ',
			'Employee Recognition',
			"Leading Effective 1:1's",
		],
	},
	{
		title: 'Business Admin/Legal',
		items: [
			'Prepping for an Audit',
			'Dashboard Confessionals',
			'When tithing is not enough: preparing your church for a titheless world',
			'Legal Things',
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
		title: 'Worship / Productions',
		items: [
			'Foundation for Healthy Ministries',
			'Gaining Awareness: Rest, Trust, Discipleship',
			'Production for Pastors',
			'Should I Hire a Production Director?',
		],
	},
];
