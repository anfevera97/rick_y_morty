import React from "react";
import ReactLoading from "react-loading";
export default function Loading() {
	return (
		<div>
			<h2 className="absolute top-44 left-1/3 text-6xl text-azul font-rick drop-shadow-[3px_3px_#e8e838]">
				Buscando en el multiverso
			</h2>

			<ReactLoading
				type="bars"
				color="rgb(51, 145, 162)"
				height={200}
				width={300}
				className="absolute top-64 left-[50%] drop-shadow-[3px_3px_#e8e838] rounded-full"
			/>
		</div>
	);
}
