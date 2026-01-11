// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "简的博客",
		imgurl: "https://liteawa.com/usr/uploads/2024/04/00104-1783255629.webp",
		desc: "将微风吹向远方，纪念那个从未逝去的“你”",
		siteurl: "https://liteawa.com/",
		tags: ["Blog"],
	},
	{
		id: 2,
		title: "Yao三七的小博客",
		imgurl: "https://www.gstech.fun/head.png",
		desc: "我的计算机学习分享博客",
		siteurl: "https://www.gstech.fun/",
		tags: ["Blog", "Tech", "Programming", "大神"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
