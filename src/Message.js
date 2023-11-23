import React from "react";
import liff from "@line/liff";

const Message = () => {
	liff
		.init({ liffId: "2001820290-d9ojVkVZ" })
		.then(() => {
			// if (!liff.isLoggedIn()) {
			// 	;
			// } else {
			liff.login().then(() => {
				liff
					.sendMessages([{ type: "text", text: "謝謝！愛你唷！" }])
					.catch(function (res) {
						alert("Failed to send Messages");
						alert(res);
					});
				liff.closeWindow();
			});
		})
		.catch((err) => {
			alert(err);
		});

	return (
		<div>
			<p>Thanks.</p>
		</div>
	);
};

export default Message;
