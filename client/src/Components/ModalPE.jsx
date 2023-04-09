import React from "react";

const ModalPE = ({ visible, setVisible }) => {
	if (visible) return null;

	const close = () => {
		setVisible(true);
	};

	return (
		<div
			className="fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-sm flex justify-center
    items-center"
		>
			<div className="bg-gray-900 text-verde p-2 rounded-xl h-20 w-80 flex justify-center items-center">
				Este persojane ya esta, Jerry!
				<button
					className="relative -top-6 left-10 h-auto w-[25px] rounded text-black bg-gray-500 hover:text-red-700 
					hover:bg-transparent"
					onClick={() => close()}
				>
					X
				</button>
			</div>
		</div>
	);
};

export default ModalPE;
