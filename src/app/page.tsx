'use client';

import { useState } from 'react';

export default function Home() {
	const [open, setOpen] = useState(false);
	return (
		<div className="relative h-fit w-fit">
			<button onClick={() => setOpen(!open)} className="bg-red-200 px-4 py-2.5">
				Clic me
			</button>
			{open && (
				<div
					style={{}}
					className=" origin-top-right z-50 absolute translate-x-full -right-4 top-0"
				>
					<ul className="bg-blue-600">
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
					</ul>
				</div>
			)}
		</div>
	);
}
