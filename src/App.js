import React from "react";
import liff from "@line/liff";

function App() {
	var contents = {
		type: "bubble",
		hero: {
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
			height: "170px",
		},
		body: {
			type: "box",
			layout: "vertical",
			spacing: "md",
			contents: [
				{
					type: "text",
					text: "接收（LINE PAY）",
					wrap: true,
					weight: "bold",
					gravity: "center",
					size: "lg",
				},
				{
					type: "box",
					layout: "baseline",
					margin: "md",
					contents: [
						{
							type: "text",
							text: "您已收到NT$ 520。（來自: 尚軒.）",
							size: "sm",
							color: "#999999",
							flex: 0,
						},
					],
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
					size: "20px",
					align: "start",
					position: "relative",
					flex: 1,
				},
				{
					type: "text",
					text: "LINE PAY",
					gravity: "center",
					align: "start",
					contents: [],
					position: "relative",
					flex: 8,
				},
				{
					type: "text",
					text: ">",
					align: "end",
					weight: "bold",
					color: "#EDE8E5",
				},
			],
			spacing: "0px",
			position: "relative",
		},
		action: {
			type: "uri",
			label: "action",
			uri: "https://k19980506.github.io/message",
		},
		styles: {
			footer: {
				spearator: true,
			},
		},
	};

	liff.init({ liffId: "2001820290-d9ojVkVZ" }).then(() => {
		liff
			.shareTargetPicker([
				{
					type: "flex",
					altText: "Line Pay",
					contents: contents,
				},
			])
			.then(() => {
				alert("Success send flex message");
				liff.closeWindow();
			})
			.catch((err) => {
				alert(err);
			});
	});

	return (
		<div>
			<p>Welcome to my world.</p>
		</div>
	);
}

export default App;
