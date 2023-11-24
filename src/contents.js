export const linePayContent = (amount, name, message) => {
	return {
		type: "bubble",
		size: "hecto",
		header: {
			type: "box",
			layout: "horizontal",
			contents: [
				{
					type: "image",
					url: "https://imgur.com/1xO7K9g.jpg",
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
					url: "https://imgur.com/xJidNvA.jpg",
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
			uri: "line://app/2001820290-d9ojVkVZ/?text=" + message,
		},
		styles: {
			footer: {
				separator: true,
			},
		},
	};
};

export const lineEnvelopeContent = (quantity, name, message) => {
	return {
		type: "bubble",
		size: "hecto",
		hero: {
			type: "box",
			layout: "vertical",
			contents: [
				{
					type: "box",
					layout: "vertical",
					contents: [
						{
							type: "image",
							url: "https://imgur.com/4FNBEe7.jpg",
							size: "245px",
							aspectMode: "fit",
							position: "relative",
							offsetBottom: "50px",
						},
					],
					position: "relative",
					width: "300px",
				},
				{
					type: "box",
					layout: "vertical",
					contents: [
						{
							type: "text",
							text: "LINE Pay 紅包",
							weight: "bold",
							size: "md",
						},
						{
							type: "box",
							layout: "baseline",
							margin: "sm",
							contents: [
								{
									type: "text",
									text: `${name}發了${quantity}個紅包到聊天室。先搶先贏。立刻打開紅包！`,
									size: "13px",
									color: "#999999",
									flex: 0,
									wrap: true,
								},
							],
							flex: 0,
							maxWidth: "228px",
						},
					],
					position: "relative",
					margin: "10px",
					flex: 9,
					offsetBottom: "90px",
				},
			],
			height: "240px",
			cornerRadius: "none",
			position: "relative",
			alignItems: "center",
		},
		body: {
			type: "box",
			layout: "horizontal",
			contents: [
				{
					type: "text",
					text: "查看紅包狀態",
					size: "sm",
					color: "#0645AD",
					position: "relative",
					action: {
						type: "uri",
						label: "action",
						uri: "line://app/2001820290-d9ojVkVZ/?text=" + message,
					},
					align: "center",
					gravity: "center",
				},
			],
			height: "50px",
		},
		footer: {
			type: "box",
			layout: "horizontal",
			contents: [
				{
					type: "image",
					url: "https://imgur.com/9aZJLdn.jpg",
					size: "15px",
					align: "start",
					position: "relative",
					flex: 1,
				},
				{
					type: "text",
					text: "紅包",
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
			uri: "line://app/2001820290-d9ojVkVZ/?text=" + message,
		},
		styles: {
			header: {
				separator: true,
			},
			hero: {
				separator: false,
			},
			body: {
				separator: true,
			},
			footer: {
				separator: true,
			},
		},
	};
};
