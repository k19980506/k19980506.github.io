import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { useSearchParams } from "react-router-dom";
import { linePayContent, lineEnvelopeContent } from "./contents";

const App = () => {
	const [searchParams] = useSearchParams();
	const [amount, setAmount] = useState("");
	const [quantity, setQuantity] = useState("");
	const [userDisplayName, setUserDisplayName] = useState("");
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		const message = searchParams.get("message");

		liff
			.init({
				liffId: "2001820290-d9ojVkVZ",
			})
			.then(() => liff.getProfile())
			.then((profile) => setUserDisplayName(profile.displayName))
			.then(() => {
				if (message !== null) {
					liff
						.sendMessages([{ type: "text", text: message }])
						.then(liff.closeWindow())
						.catch(() => liff.closeWindow());
				} else {
					setShouldRender(true);
				}
			})
			.catch((error) => {
				console.error("LIFF 初始化失败", error.message);
			});
	}, [searchParams]);

	const handleAmountChange = (event) => {
		setAmount(event.target.value);
	};

	const handleQuantityChange = (event) => {
		setQuantity(event.target.value);
	};

	const handleLinePay = () => {
		const contents = linePayContent(amount, userDisplayName);

		liff
			.shareTargetPicker([
				{
					type: "flex",
					altText: `已收到NT$ ${amount}的轉帳。`,
					contents: contents,
				},
			])
			.then(() => {
				alert("Successfully sent a Flex Message");
				liff.closeWindow();
			})
			.catch((err) => {
				alert(err.code, err.message);
				liff.closeWindow();
			});
	};

	const handleLineEnvelope = () => {
		console.log("按鈕 2 被點擊了！");
		// 在這裡可以使用 quantity 和其他相關數據
		const contents = lineEnvelopeContent(amount, userDisplayName);

		liff
			.shareTargetPicker([
				{
					type: "flex",
					altText: `已收到NT$ ${amount}的轉帳。`,
					contents: contents,
				},
			])
			.then(() => {
				alert("Successfully sent a Flex Message");
				liff.closeWindow();
			})
			.catch((err) => {
				alert(err.code, err.message);
				liff.closeWindow();
			});
	};

	return shouldRender ? (
		<div>
			<h1>LINE 整人工具</h1>

			<label>
				金額：
				<input type="text" value={amount} onChange={handleAmountChange} />
			</label>
			<button onClick={handleLinePay}>LINE Pay</button>
			<br />
			<br />
			<label>
				數量：
				<input type="text" value={quantity} onChange={handleQuantityChange} />
			</label>
			<button onClick={handleLineEnvelope}>LINE 紅包</button>
		</div>
	) : null;
};

export default App;
