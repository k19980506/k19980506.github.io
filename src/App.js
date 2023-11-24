import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import { useSearchParams } from "react-router-dom";
import { linePayContent, lineEnvelopeContent } from "./contents";

const App = () => {
	const [searchParams] = useSearchParams();
	const [amount, setAmount] = useState("");
	const [quantity, setQuantity] = useState("");
	const [message, setMessage] = useState("");
	const [userDisplayName, setUserDisplayName] = useState("");
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		const text = searchParams.get("text");

		liff
			.init({
				liffId: "2001820290-d9ojVkVZ",
			})
			.then(() => liff.getProfile())
			.then((profile) => setUserDisplayName(profile.displayName))
			.then(() => {
				if (text !== null) {
					liff
						.sendMessages([{ type: "text", text: text }])
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

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const handleLinePay = () => {
		const contents = linePayContent(amount, userDisplayName, message);

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
		const contents = lineEnvelopeContent(
			parseInt(quantity),
			userDisplayName,
			message
		);

		liff
			.shareTargetPicker([
				{
					type: "flex",
					altText: "您收到了紅包訊息！",
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
				請輸入想讓對方說的話：
				<input type="text" value={message} onChange={handleMessageChange} />
			</label>
			<br />
			<br />
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
