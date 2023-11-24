export const linePayContent = (amount, name) => {
	return {
		type: "bubble",
		size: "hecto",
		header: {
			type: "box",
			layout: "horizontal",
			contents: [
				{
					type: "image",
					url: "https://ppt.cc/flfKPx@.jpg",
					size: "lg",
					align: "center",
					gravity: "center",
				},
			],
			backgroundColor: "#08bf5b",
			height: "160px",
			cornerRadius: "none",
		},
		body: {
			type: "box",
			layout: "vertical",
			spacing: "md",
			contents: [
				{
					type: "text",
					text: "接收（LINE Pay）",
					wrap: true,
					weight: "bold",
					gravity: "center",
					size: "sm",
					flex: 0,
				},
				{
					type: "box",
					layout: "baseline",
					margin: "none",
					contents: [
						{
							type: "text",
							text: `您已收到NT$ ${amount}。（來自：${name}）`,
							size: "12px",
							color: "#999999",
							flex: 0,
							wrap: true,
						},
					],
					flex: 0,
				},
				{
					type: "box",
					layout: "horizontal",
					contents: [
						{
							type: "text",
							text: "瞭解更多",
							wrap: true,
							weight: "bold",
							gravity: "center",
							size: "md",
							color: "#59483E",
							align: "center",
							position: "relative",
							scaling: true,
							style: "normal",
							decoration: "none",
						},
					],
					backgroundColor: "#DEDAD7",
					cornerRadius: "md",
					height: "40px",
					alignItems: "center",
					position: "relative",
				},
			],
		},
		footer: {
			type: "box",
			layout: "horizontal",
			contents: [
				{
					type: "image",
					url: "https://lh3.googleusercontent.com/pw/ADCreHccjKq97O-6zbdbD0YSUzJBZ6THMrOEkQn_aHjlGXD1GlBm6Mf2PQrHxGd7M58pR5q_18qYt6cTKkpTPfTJicwI-ghZeXxUtdbKhe2KcZTQldBfhvjuN3_wtrbi5PMUfBkoxWDCO8vkbbLxc0fo9MXy=w512-h512-s-no-gm?authuser=0",
					size: "15px",
					align: "start",
					position: "relative",
					flex: 1,
				},
				{
					type: "text",
					text: "LINE Pay",
					align: "start",
					contents: [],
					position: "relative",
					flex: 8,
					size: "10px",
				},
				{
					type: "text",
					text: ">",
					align: "end",
					weight: "bold",
					color: "#EDE8E5",
				},
			],
			position: "relative",
			height: "30px",
			alignItems: "center",
		},
		action: {
			type: "uri",
			label: "action",
			uri: "line://app/2001820290-d9ojVkVZ/?message=對不起爸爸，我是臭乞丐！",
		},
		styles: {
			footer: {
				separator: true,
			},
		},
	};
};

export const lineEnvelopeContent = (quantity) => {
	return "";
};
